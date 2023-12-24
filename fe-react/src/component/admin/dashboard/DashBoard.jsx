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
import { TbSettingsSearch } from "react-icons/tb";
import { useDashBoardStore } from "./useDashBoardStore";
import BanhDonut2 from "./chart/BanhDonut2";
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
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
  const options = [
    {
      label: "Stt",
      value: "stt",
      columns: {
        title: "#",
        dataIndex: "name",
        key: "name",
        width: "5%",
        ...getColumnSearchProps("name"),
      },
    },
    {
      label: "Hình ảnh",
      value: "hinhAnh",
      columns: {
        title: "Hình ảnh",
        dataIndex: "age",
        key: "age",
        width: "10%",
        ...getColumnSearchProps("age"),
      },
    },
    {
      label: "Tên SP",
      value: "tenSanPham",
      columns: {
        title: "Tên SP",
        dataIndex: "address",
        key: "address",
        width: "10%",
        ...getColumnSearchProps("address"),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
      },
    },
    {
      label: "Số lượng tồn",
      value: "soLuongTon",
      columns: {
        title: "Số lượng tồn",
        dataIndex: "age",
        key: "age",
        width: "5%",
        ...getColumnSearchProps("age"),
      },
    },
    {
      label: "Đã bán",
      value: "daBan",
      columns: {
        title: "Đã bán",
        dataIndex: "age",
        key: "age",
        width: "5%",
        ...getColumnSearchProps("age"),
      },
    },
    {
      label: "Đang giao",
      value: "dangGiao",
      columns: {
        title: "Đang giao",
        dataIndex: "age",
        key: "age",
        width: "5%",
        ...getColumnSearchProps("age"),
      },
    },
  ];
  const handleChange = (value) => {
    var columnMoi = [];
    for (var item of value) {
      for (var option of options) {
        if (item == option.value) {
          columnMoi.push(option.columns);
          break;
        }
      }
    }
    setColumns(columnMoi);
  };
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
  async function handleTaiBaoCao() {
    try {
      const response = await useDashBoardStore.actions.taiBaoCao();

      // Tạo một đường dẫn URL từ dữ liệu Blob trả về từ API
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Tạo một thẻ a để kích thích tải xuống file
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "baocao.xlsx"); // Đặt tên file tải về
      document.body.appendChild(link);
      link.click();

      // Loại bỏ thẻ a sau khi tải xuống
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading report:", error);
    }
  }
  const [nam, setNam] = useState(2023);
  const [thongKe, setThongKe] = useState(undefined);
  async function handleThongKe() {
    const data2 = await useDashBoardStore.actions.thongKe(nam);
    setThongKe(data2.data);
  }
  useEffect(() => {
    handleThongKe();
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
              <Row
                style={{
                  marginBottom: "10px",
                }}
              >
                <Col span={12}>
                  <Space
                    style={{
                      width: "100%",
                    }}
                    direction="horizontal"
                  >
                    Filter
                    <Select
                      mode="multiple"
                      size="large"
                      allowClear
                      style={{
                        width: "400px",
                      }}
                      placeholder="Cài đặt hiển thị"
                      onChange={handleChange}
                      options={options}
                    />
                  </Space>
                </Col>
                <Col span={2}></Col>
                <Col span={10}>
                  <Space
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                    direction="horizontal"
                  >
                    {/* <Button
                      type="primary"
                      size="large"
                      onClick={handleTaiBaoCao}
                    >
                      Nhận báo cáo
                    </Button>
                    <Button type="primary" size="large" onClick={showModal}>
                      Thêm cột
                    </Button>  */}
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </Modal>
                    {/* <Input
                      style={{
                        width: "240px",
                      }}
                      size="large"
                      placeholder="Tìm kiếm"
                      prefix={<SearchOutlined />}
                    /> */}
                  </Space>
                </Col>
              </Row>
              <Table
                pagination={{ position: ["bottomCenter"] }}
                columns={columns}
                dataSource={thongKe && thongKe.topSeller}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
