import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import MenuAdmin from "../layout/menu/MenuAdmin";
import Header from "../layout/header/Header";
import ThongKeBar from "./chart/ThongKeBar";
import { Col, Image, Modal, Row, Select, Tag } from "antd";
import BanhDonut from "./chart/BanhDonut";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Input, Space, Table } from "antd";
import {} from "@ant-design/icons";
import { useDashBoardStore } from "./useDashBoardStore";

function DashBoard() {
  const language = useSelector(selectLanguage);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
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
            Search
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
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
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
  const [columns, setColumns] = useState([
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
      title: "Số BDS đã chốt",
      dataIndex: "soBatDongSanDaBan",
      key: "soBatDongSanDaBan",
      render: (soBatDongSanDaBan) => <>{soBatDongSanDaBan + " BDS"}</>,
    },
    {
      title: "Quyền",
      dataIndex: "nguoiDungRole",
      key: "nguoiDungRole",
      render: (nguoiDungRole) => (
        <>
          {nguoiDungRole.map((item) => {
            if (item.roleId == 1) {
              return <Tag color="#f50">Admin</Tag>;
            }
            if (item.roleId == 2) {
              return <Tag color="#87d068">Trưởng phòng</Tag>;
            }
            if (item.roleId == 3) {
              return <Tag color="#2db7f5">Đầu chủ</Tag>;
            }
            if (item.roleId == 4) {
              return <Tag color="#108ee9">Nhân viên</Tag>;
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
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [nam, setNam] = useState(2023);
  const [thongKe, setThongKe] = useState(undefined);
  async function handleThongKe() {
    const data2 = await useDashBoardStore.actions.thongKe(nam);
    setThongKe(data2.data);
  }
  useEffect(() => {
    handleThongKe();
  }, [nam]);
  function xapSep(a, b) {
    if (a.soBatDongSanDaBan < b.soBatDongSanDaBan) {
      return 1;
    } else {
      return -1;
    }
  }
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
              <Select
                defaultValue="2024"
                style={{
                  width: 220,
                  marginBottom: "12px",
                }}
                onChange={(e) => {
                  setNam(e);
                }}
                options={[
                  {
                    value: "2020",
                    label: "2020",
                  },
                  {
                    value: "2021",
                    label: "2021",
                  },
                  {
                    value: "2022",
                    label: "2022",
                  },
                  {
                    value: "2023",
                    label: "2023",
                  },
                  {
                    value: "2024",
                    label: "2024",
                  },
                ]}
              />
              <ThongKeBar
                data={
                  thongKe && {
                    soBDSChot: thongKe.soBDSChot,
                    soKhachHangMoi: thongKe.soKhachHangMoi,
                  }
                }
              />
            </Row>
            <Row
              style={{
                marginTop: "12px",
                backgroundColor: "#ffffff",
              }}
            >
              <BanhDonut
                data={
                  thongKe && {
                    soDauChu: thongKe.soDauChu,
                    soNhanVien: thongKe.soNhanVien,
                    soTruongPhong: thongKe.soTruongPhong,
                  }
                }
              />
            </Row>
            <div
              style={{
                marginTop: "12px",
                width: "100%",
                backgroundColor: "#ffffff",
                padding: "12px 12px",
              }}
            >
              <Table
                pagination={{ position: ["bottomCenter"] }}
                columns={columns}
                dataSource={thongKe && thongKe.topSeller.sort(xapSep)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
