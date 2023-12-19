import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import GioHang from "../../home/giohang/GioHang";
import { useEffect, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import MenuLeft from "../menuleft/MenuLeft";
import { FiSearch, FiHeart } from "react-icons/fi";
import Search from "../search/Search";
import YeuThich from "../../home/yeuthich/YeuThich";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Form,
  Input,
  message,
  InputNumber,
  Modal,
  Space,
  notification,
  Upload,
  Select,
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
import { useLayout } from "../useLayout";
import { useSanPhamStore } from "../../admin/product/useSanPhamStore";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useSelector(selectLanguage);
  const user = useSelector(selectUser);
  const [openGioHang, setOpenGioHang] = useState(false);
  const [openYeuThich, setOpenYeuThich] = useState(false);
  const [openMenuLeft, setOpenMenuLeft] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
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
          }}>
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
          }}>
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
    if (!nguoiDung) {
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
      process.env.REACT_APP_FRONTEND_URL + "profile/" + nguoiDung.id;
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

  const [fileList, setFileList] = useState([]);
  const props = {
    beforeUpload: (file) => {
      return false;
    },
    onChange: (file) => {
      setFileList(file.fileList);
      if (file.fileList.length == 0) {
        return;
      }
      if (file.fileList.length > 5) {
        message.error(`Chỉ được chọn tối đa 5 hình ảnh`);
        return;
      }
      const isPNG =
        file.file.type === "image/png" ||
        file.file.type === "image/jpg" ||
        file.file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.file.name} không phải file hình ảnh`);
        return;
      }
    },
  };
  async function handleTaoTin() {
    var form2 = new FormData();
    for (var file of fileList) {
      form2.append("file", file.originFileObj);
    }
    form2.append(
      "data",
      JSON.stringify({
        batDongSan: data,
        tinBan: {
          ...data2,
          nguoiDangId: nguoiDung.id,
        },
      })
    );
    setIsLoading(true);
    const data3 = await useLayout.actions.taoTin(form2);
    if (data3.data) {
      window.location = "http://localhost:3000/quanlytin";
    }
    // fetchData();
    setIsLoading(false);
    setIsModalOpen(false);
  }

  const [khuVuc, setKhuVuc] = useState(undefined);
  const [huyen, setHuyen] = useState(undefined);
  const [xa, setXa] = useState(undefined);
  const layKhuVuc = async () => {
    const data = await useSanPhamStore.actions.layDiaChiOption();
    setKhuVuc(data.data);
  };

  useEffect(() => {
    layKhuVuc();
  }, []);
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
          }}>
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
                }}>
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
                    }}>
                    <span
                      style={{
                        fontSize: "20px",
                        lineHeight: "14px",
                      }}>
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
                }}>
                <Dropdown
                  menu={{
                    items,
                  }}>
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
                      }}>
                      <span
                        style={{
                          fontSize: "22px",
                          lineHeight: "14px",
                        }}>
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
                }}>
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
                  icon={<MdOutlineEditCalendar />}>
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
          handleTaoTin();
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        width={768}>
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
          }}>
          <Form.Item label="Hình ảnh (tối đa 5 ảnh)">
            <Upload
              listType="picture-card"
              multiple
              customRequest={() => {}}
              {...props}
              maxCount={5}
              fileList={fileList}>
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}>
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="tenChuNha"
            label="Tên chủ nhà"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input
              value={data.tenChuNha}
              onChange={(e) => {
                setData({
                  ...data,
                  tenChuNha: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soDienThoaiChuNha"
            label="Số điện thoại chủ nhà"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input
              value={data.soDienThoaiChuNha}
              onChange={(e) => {
                setData({
                  ...data,
                  soDienThoaiChuNha: e.target.value,
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
            ]}>
            <InputNumber
              value={data.giaBan}
              min={1}
              style={{
                width: "100%",
              }}
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
            name="giaTriHoaHong"
            label="Hoa hồng"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.giaTriHoaHong}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  giaTriHoaHong: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="giaTriHoaHongChiaNhanVien"
            label="Hoa hồng nhân viên"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.giaTriHoaHongChiaNhanVien}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  giaTriHoaHongChiaNhanVien: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>{" "}
          <Form.Item
            name="tinhCode"
            label="Tỉnh/TP"
            rules={[
              {
                required: true,
              },
            ]}>
            <Select
              labelInValue
              optionLabelProp="children"
              style={{
                width: "100%",
              }}
              rules={[
                {
                  required: true,
                },
              ]}
              onChange={(e) => {
                setData({
                  ...data,
                  provinceCode: e.value,
                });
                setHuyen(
                  khuVuc.districts.filter((item) => {
                    return item.province_code === e.value;
                  })
                );
              }}>
              {khuVuc &&
                khuVuc.provinces.map((item) => {
                  return (
                    <Select.Option key={item.code} value={item.code}>
                      {item.full_name}
                    </Select.Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item
            name="huyenCode"
            label="Quận/Huyện"
            rules={[
              {
                required: true,
              },
            ]}>
            <Select
              labelInValue
              optionLabelProp="children"
              style={{
                width: "100%",
              }}
              rules={[
                {
                  required: true,
                },
              ]}
              onChange={(e) => {
                setData({
                  ...data,
                  districtCode: e.value,
                });
                setXa(
                  khuVuc.wards.filter((item) => {
                    return item.district_code === e.value;
                  })
                );
              }}>
              {huyen &&
                huyen.map((item) => {
                  return (
                    <Select.Option key={item.code} value={item.code}>
                      {item.full_name}
                    </Select.Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item
            name="xaCode"
            label="Xã/Phường"
            rules={[
              {
                required: true,
              },
            ]}>
            <Select
              labelInValue
              optionLabelProp="children"
              style={{
                width: "100%",
              }}
              rules={[
                {
                  required: true,
                },
              ]}
              onChange={(e) => {
                setData({
                  ...data,
                  wardCode: e.value,
                });
              }}>
              {xa &&
                xa.map((item) => {
                  return (
                    <Select.Option key={item.code} value={item.code}>
                      {item.full_name}
                    </Select.Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item
            name="namXayDung"
            label="Năm xây dựng"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.namXayDung}
              min={1900}
              max={3000}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  namXayDung: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soPhongNgu"
            label="Số phòng ngủ"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.soPhongNgu}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  soPhongNgu: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soPhongVeSinh"
            label="Số nhà vệ sinh"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.soPhongVeSinh}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  soPhongVeSinh: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="chieuNgang"
            label="Chiều ngang"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.chieuNgang}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  chieuNgang: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="chieuDai"
            label="Chiều dài"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.chieuDai}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  chieuDai: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="dienTich"
            label="Diện tích"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.dienTich}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  dienTich: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="dienTichSuDung"
            label="Diện tích sử dụng"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data.dienTichSuDung}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  dienTichSuDung: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="diaChi"
            label="Địa chỉ"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input
              value={data.diaChi}
              onChange={(e) => {
                setData({
                  ...data,
                  diaChi: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="diaChiGoogleMap"
            label="Link Google Map"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input
              value={data.diaChiGoogleMap}
              onChange={(e) => {
                setData({
                  ...data,
                  diaChiGoogleMap: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item name="moTa" label="Mô tả">
            <TextArea
              value={data.moTaChiTiet}
              rows={4}
              onChange={(e) => {
                setData({
                  ...data,
                  moTaChiTiet: e.target.value,
                });
              }}
            />
          </Form.Item>
          <h5
            style={{
              marginBottom: "8px",
            }}>
            Thông tin Bài Đăng
          </h5>
          <Form.Item
            name="tieuDe"
            label="Tiêu đề"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input
              value={data2.tieuDe}
              onChange={(e) => {
                setData2({
                  ...data2,
                  tieuDe: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="giaBan2"
            label="Giá bán"
            rules={[
              {
                required: true,
              },
            ]}>
            <InputNumber
              value={data2.tieuDe}
              style={{
                width: "100%",
              }}
              min={1}
              onChange={(e) => {
                setData2({
                  ...data2,
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
            ]}>
            <Input
              value={data2.soDienThoai}
              onChange={(e) => {
                setData2({
                  ...data2,
                  soDienThoai: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item name="moTa2" label="Mô tả">
            <TextArea
              value={data2.moTa}
              rows={4}
              onChange={(e) => {
                setData2({
                  ...data2,
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
              }}>
              Đăng tin
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Header;
