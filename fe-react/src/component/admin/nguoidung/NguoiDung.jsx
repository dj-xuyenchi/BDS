import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Image, Input, Space, Table, Tag } from "antd";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { fixMoney } from "../../../extensions/fixMoney";
import { useNguoiDung } from "./useNguoiDung";
import { fixTrangThaiNguoiDung } from "../../../extensions/fixTrangThaiNguoiDung";
import ModalThem from "./ModalThem";
import ModalView from "./ModalView";
import ModalSua from "./ModalSua";
import { checkRole } from "../../../extensions/checkRole";
function NguoiDung() {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState(undefined);
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Tìm
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Lọc
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Đóng
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Người dùng",
      dataIndex: "hoTenNguoiDung",
      key: "hoTenNguoiDung",
      width: "20%",
      render: (hoTenNguoiDung, record) => (
        <>
          <div>
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "50%",
                float: "left",
              }}
            >
              <Image
                style={{
                  height: "40px",
                  width: "auto",
                }}
                src={record.hinhDaiDien}
                alt=""
              />
            </div>
            <span
              style={{
                marginLeft: "8px",
                lineHeight: "40px",
                fontWeight: 500,
              }}
            >
              {hoTenNguoiDung}
            </span>
          </div>
        </>
      ),
    },
    {
      title: "Tên tài khoản",
      dataIndex: "tenTaiKhoan",
      key: "tenTaiKhoan",
      render: (tenTaiKhoan) => <>{tenTaiKhoan}</>,
    },
    {
      title: "Phòng ban",
      dataIndex: "phongBan",
      key: "phongBan",
      render: (phongBan) => <>{phongBan ? phongBan.tenPhongBan : "Chưa có"}</>,
    },
    {
      title: "Quyền",
      dataIndex: "nguoiDungRole",
      key: "nguoiDungRole",
      render: (nguoiDungRole) => (
        <>
          {nguoiDungRole.map((item) => {
            if (item.role.id == 1) {
              return <Tag color="#f50">{item.role.roleName}</Tag>;
            }
            if (item.role.id == 2) {
              return <Tag color="#87d068">{item.role.roleName}</Tag>;
            }
            if (item.role.id == 3) {
              return <Tag color="#2db7f5">{item.role.roleName}</Tag>;
            }
            if (item.role.id == 4) {
              return <Tag color="#108ee9">{item.role.roleName}</Tag>;
            }
            return "";
          })}
        </>
      ),
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDienThoai",
      key: "soDienThoai",
      render: (soDienThoai) => <>{soDienThoai ? soDienThoai : "Chưa nhập"}</>,
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
      render: (trangThai) => <>{fixTrangThaiNguoiDung(trangThai)}</>,
    },
    {
      title: "Thao tác",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "10%",
      render: (id, record) => (
        <div>
          <ModalView data={record} />
          {checkRole(user.nguoiDungRole, ["ADMIN", "LEAD", "PRODUCT"]) && (
            <ModalSua
              fetchData={fetchData}
              data2={record}
              phongBan={phongBan}
            />
          )}
        </div>
      ),
    },
  ];
  const [phongBan, setPhongBan] = useState(undefined);
  async function handleLayPhongBan() {
    const data2 = await useNguoiDung.actions.layPhongBan();
    setPhongBan(data2.data);
  }
  const fetchData = async () => {
    const data = await useNguoiDung.actions.layNguoiDung();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
    handleLayPhongBan();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div>
        <Header />
        <MenuAdmin />
        <div className="body-container">
          <div className="content">
            {checkRole(user.nguoiDungRole, ["ADMIN", "LEAD", "PRODUCT"]) && (
              <ModalThem fetchData={fetchData} />
            )}

            <div className="table-sanpham background-color">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{
                  position: ["bottomRight"],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NguoiDung;
