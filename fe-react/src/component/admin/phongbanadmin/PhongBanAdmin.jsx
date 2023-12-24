import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Image, Input, Space, Table, Tag } from "antd";
import ModalThem from "./ModalThem";
import ModalView from "./ModalView";
import ModalSua from "./ModalSua";
import { checkRole } from "../../../extensions/checkRole";
import { usePhongBanAdmin } from "./usePhongBanAdmin";
import ModalXoa from "./ModalXoa";
function PhongBanAdmin() {
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
      title: "Tên phòng ban",
      dataIndex: "tenPhongBan",
      key: "tenPhongBan",
      width: "20%",
      render: (tenPhongBan, record) => (
        <>
          <div>{tenPhongBan}</div>
        </>
      ),
    },
    {
      title: "Khẩu hiệu",
      dataIndex: "khauHieu",
      key: "khauHieu",
      render: (khauHieu) => <>{khauHieu}</>,
    },
    {
      title: "Trưởng phòng",
      dataIndex: "truongPhong",
      key: "truongPhong",
      render: (truongPhong) => (
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
                src={truongPhong.hinhDaiDien}
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
              {truongPhong.hoTenNguoiDung}
            </span>
          </div>
        </>
      ),
    },
    {
      title: "Số lượng nhân viên",
      dataIndex: "soLuongNhanVien",
      key: "soLuongNhanVien",
      render: (soLuongNhanVien) => <>{soLuongNhanVien + " nhân viên"}</>,
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
          <ModalSua data2={record} fetchData={handleLayPhongBan} />
          <ModalXoa phongBanId={id} fetchData={handleLayPhongBan} />
        </div>
      ),
    },
  ];
  async function handleLayPhongBan() {
    const data2 = await usePhongBanAdmin.actions.layPhongBan();
    setData(data2.data);
  }
  useEffect(() => {
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
            <ModalThem fetchData={handleLayPhongBan} />
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

export default PhongBanAdmin;
