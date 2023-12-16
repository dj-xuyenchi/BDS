import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Image, Input, Space, Table, Tag } from "antd";
import BieuDoChotPhongBan from "./BieuDoChotPhongBan";

import { Col, Row } from "antd";
import { usePhongBan } from "./useKyGui";
import ModalView from "./ModalView";
import ModalXemChiTiet from "./ModalXemChiTiet";
import ModalTimeLine from "./ModalTimeLine";
import { checkRole } from "../../../extensions/checkRole";
import ModalKhachHangCuaToi from "./ModalKhachCuaToi";
function PhongBan() {
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

  const user = JSON.parse(localStorage.getItem("user"));
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      width: "20%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDienThoai",
      key: "soDienThoai",
      width: "15%",
      render: (soDienThoai) => <span>{soDienThoai}</span>,
    },
    {
      title: "Số khách",
      dataIndex: "soKhach",
      key: "soKhach",
      width: "10%",
      sorter: (a, b) => a - b,
      sortDirections: ["descend", "ascend"],
      render: (soKhach) => <span>{soKhach}</span>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "diaChi",
      key: "diaChi",
      width: "20%",
      render: (diaChi) => <span>{diaChi}</span>,
    },
    {
      title: "Quyền",
      dataIndex: "role",
      key: "role",
      width: "15%",
      render: (role) => (
        <>
          {role.map((item) => {
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
      title: "Thao tác",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "20%",
      render: (id, record) => (
        <>
          <ModalView data={record.data} />
          {checkRole(user.nguoiDungRole, ["ADMIN", "LEAD"]) && (
            <ModalXemChiTiet data={record.lichSuXem} />
          )}
        </>
      ),
    },
  ];
  const [year, setYear] = useState(2023);
  const fetchData = async () => {
    const data = await usePhongBan.actions.layPhongBan({
      phongBanId: 2,
      year: year,
    });
    setData(data.data);
  };
  useEffect(() => {
    // dispath(productSlice.actions.setIsLoading(true));
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Header />
        <MenuAdmin />
        <div className="body-container">
          <div className="content">
            <Row
              style={{
                backgroundColor: "#ffffff",
                padding: "12px 12px",
              }}
            >
              <BieuDoChotPhongBan
                dataChot={data && data.thongKeBDS}
                dataKhach={data && data.soKhach}
                title={data && data.tenPhong}
              />
            </Row>
            <ModalKhachHangCuaToi
              data={
                data &&
                data.thanhVien.find((item) => {
                  return item.id === user.id;
                })
              }
            />
            <div className="table-sanpham background-color">
              <Table
                columns={columns}
                dataSource={data && data.thanhVien}
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

export default PhongBan;
