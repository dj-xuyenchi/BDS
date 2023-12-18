import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import GioHang from "../../home/giohang/GioHang";
import { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import MenuLeft from "../menuleft/MenuLeft";
import { FiSearch, FiHeart } from "react-icons/fi";
import Search from "../search/Search";
import YeuThich from "../../home/yeuthich/YeuThich";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  notification,
} from "antd";
import { Link } from "react-router-dom";
import { selectUser } from "../../login/selectUser";
import { MdOutlineEditCalendar } from "react-icons/md";
import { PiSignIn, PiSignInThin, PiUserCircleLight } from "react-icons/pi";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { RiAdminFill } from "react-icons/ri";
import { checkRole } from "../../../extensions/checkRole";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useSelector(selectLanguage);
  const user = useSelector(selectUser);
  const [openGioHang, setOpenGioHang] = useState(false);
  const [openYeuThich, setOpenYeuThich] = useState(false);
  const [openMenuLeft, setOpenMenuLeft] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const [form] = useForm();
  async function handleThem() {}
  const [api, contextHolder] = notification.useNotification();
  const items = [];
  var nguoiDung = JSON.parse(localStorage.getItem("user"));
  if (nguoiDung) {
    if (
      checkRole(nguoiDung.nguoiDungRole, ["ADMIN", "LEAD", "MEMBER", "PRODUCT"])
    ) {
      items.push({
        key: "1",
        label: (
          <a href="http://localhost:3000/admin/dashboard">Nhà Tốt Insight</a>
        ),
        icon: <RiAdminFill />,
      });
    }
  }
  if (!nguoiDung) {
    items.push({
      key: "2",
      label: <a href="http://localhost:3000/login">Đăng nhập</a>,
      icon: <PiSignIn />,
    });
  }
  if (nguoiDung) {
    items.push({
      key: "3",
      label: (
        <a
          onClick={() => {
            var nguoiDung = JSON.parse(localStorage.getItem("user"));
            if (nguoiDung) {
              handleRedirect();
              return;
            } else {
              window.location = "http://localhost:3000/login";
            }
          }}
        >
          Thông tin cá nhân
        </a>
      ),
      icon: <FaUser />,
    });
    items.push({
      key: "4",
      label: (
        <a
          onClick={() => {
            localStorage.removeItem("user");
            window.location = "http://localhost:3000/";
          }}
        >
          Đăng xuất
        </a>
      ),
      icon: <PiSignInThin />,
    });
  }

  const openNotification = (type, title, des, placement) => {
    if (type === "error") {
      api.error({
        message: title,
        description: des,
        placement,
      });
    } else {
      api.success({
        message: title,
        description: des,
        placement,
      });
    }
  };
  function handleRedirect() {
    if (user.nguoiDung.id == -1) {
      openNotification(
        "error",
        language.systemNotification.system,
        "Bạn chưa đăng nhập",
        "bottomRight"
      );
      setTimeout(() => {
        window.location.href = process.env.REACT_APP_FRONTEND_URL + "login";
      }, 1000);
      return;
    }
    window.location.href =
      process.env.REACT_APP_FRONTEND_URL + "profile/" + user.nguoiDung.id;
  }
  function handleRedirect2() {
    if (user.nguoiDung.id == -1) {
      openNotification(
        "error",
        language.systemNotification.system,
        "Bạn chưa đăng nhập",
        "bottomRight"
      );
      setTimeout(() => {
        window.location.href = process.env.REACT_APP_FRONTEND_URL + "login";
      }, 1000);
      return;
    }
    window.location.href =
      process.env.REACT_APP_FRONTEND_URL + "tin/" + user.nguoiDung.id;
  }
  var se = localStorage.getItem("search");
  const [search, setSearch] = useState(se ? se : "");
  function handleSearch() {
    localStorage.setItem("search", search);
    window.location.href = process.env.REACT_APP_FRONTEND_URL;
  }
  return (
    <>
      {contextHolder}
      <GioHang open={openGioHang} setOpen={setOpenGioHang} />
      <YeuThich open={openYeuThich} setOpen={setOpenYeuThich} />
      <MenuLeft open={openMenuLeft} setOpen={setOpenMenuLeft} />
      <Search open={openSearch} setOpen={setOpenSearch} />
      <div className="header-container">
        <div
          className="gif-img"
          style={{
            backgroundColor: "#F4F4F4",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4891/4891646.png"
            alt=""
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <span>
            Nhà Tốt chỉ cung cấp dịch vụ & chương trình trên các trang chính
            thức. Hãy cảnh giác với các hình thức liên hệ dưới tên Nhà Tốt!
          </span>
        </div>
        <div className="menu">
          <div className="left-menu">
            <div>
              <Link to="/">
                <img
                  style={{
                    height: "40px",
                    width: "auto",
                  }}
                  src="https://static.chotot.com/storage/APP_WRAPPER/logo/pty-logo-appwrapper.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="mid-menu">
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Tìm kiếm"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onPressEnter={() => {
                handleSearch();
              }}
            />
          </div>
          <div className="right-menu">
            <div className="icon-right">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Space>
                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0px",
                      width: "100px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: "100%",
                    }}
                    onClick={() => {
                      handleRedirect2();
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        lineHeight: "14px",
                      }}
                    >
                      <FaRegListAlt />
                    </span>
                    Quản lý tin
                  </p>
                </Space>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Space>
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "0px",
                        width: "115px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "22px",
                          lineHeight: "14px",
                        }}
                      >
                        <PiUserCircleLight />
                      </span>
                      Tài khoản
                      <DownOutlined />
                    </p>
                  </Space>
                </Dropdown>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => {
                    if (!nguoiDung) {
                      openNotification(
                        "error",
                        language.systemNotification.system,
                        "Bạn chưa đăng nhập",
                        "bottomRight"
                      );
                      return;
                    }
                    setIsModalOpen(true);
                  }}
                  style={{
                    backgroundColor: "#FA6819",
                    color: "white",
                  }}
                  icon={<MdOutlineEditCalendar />}
                >
                  Đăng tin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Đăng ký Đăng tin"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        width={768}
      >
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          layout="horizontal"
          style={{
            maxWidth: 768,
          }}
        >
          <Form.Item
            name="tieuDe"
            label="Tiêu đề"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tieuDe}
              onChange={(e) => {
                setData({
                  ...data,
                  tieuDe: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="giaBan"
            label="Giá bán"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.tieuDe}
              style={{
                width: "100%",
              }}
              min={1}
              onChange={(e) => {
                setData({
                  ...data,
                  giaBan: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="soDienThoai"
            label="Số điện thoại liên hệ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.soDienThoai}
              onChange={(e) => {
                setData({
                  ...data,
                  soDienThoai: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item name="moTa" label="Mô tả">
            <TextArea
              value={data.moTa}
              rows={4}
              onChange={(e) => {
                setData({
                  ...data,
                  moTa: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Thao tác">
            <Button
              htmlType="submit"
              loading={isLoading}
              onClick={() => {
                handleThem();
              }}
            >
              Đăng tin
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Header;
