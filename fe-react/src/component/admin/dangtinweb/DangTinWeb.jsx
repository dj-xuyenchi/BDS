import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Image, Input, Space, Table, Tag } from "antd";
import { useTinBan } from "./useSanPhamStore";
import ModalView from "./ModalView";
import { fixMoney } from "../../../extensions/fixMoney";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import ModalXoa from "./ModalXoa";
function DangTin() {
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
      title: "Hình ảnh",
      dataIndex: "batDongSan",
      key: "batDongSan",
      width: "10%",
      render: (batDongSan) => (
        <>
          <Image
            src={batDongSan.hinhAnhBatDongSan[0].linkHinhAnh}
            style={{ width: "160px", height: "170px" }}
          />
        </>
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "tieuDe",
      key: "tieuDe",
      width: "20%",
      render: (tieuDe) => <span>{tieuDe}</span>,
    },
    {
      title: "Giá bán",
      dataIndex: "giaBan",
      key: "giaBan",
      width: "15%",
      sorter: (a, b) => a.giaBan - b.giaBan,
      sortDirections: ["descend", "ascend"],
      render: (giaBan) => <span>{fixMoney(giaBan)}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      width: "20%",
      render: (moTa) => <span>{moTa}</span>,
    },
    {
      title: "Ngày đăng",
      dataIndex: "ngayTao",
      key: "ngayTao",
      width: "5%",
      render: (ngayTao) => <span>{fixNgayThang(ngayTao)}</span>,
    },
    {
      title: "Người đăng",
      dataIndex: "nguoiDang",
      key: "nguoiDang",
      width: "7.5%",
      render: (nguoiDang) => <span>{nguoiDang.hoTenNguoiDung}</span>,
    },
    {
      title: "Loại BDS",
      dataIndex: "loaiBatDongSan",
      key: "loaiBatDongSan",
      width: "7.5%",
      filters: [
        {
          text: "Nhà phố",
          value: 1,
        },
        {
          text: "Đất thổ cư",
          value: 2,
        },
        {
          text: "Đất nền",
          value: 3,
        },
        {
          text: "Chung cư",
          value: 4,
        },
      ],
      onFilter: (value, record) => {
        return value == record.loaiBatDongSan;
      },
      filterSearch: true,
      render: (loaiBatDongSan) => (
        <Tag color="success">{fixLoaiBDS(loaiBatDongSan)}</Tag>
      ),
      // filters: filter.thietKe,
      // filteredValue: filteredInfo.address || null,
      // onFilter: (value, record) => record.thietKe.tenThietKe.includes(value),
    },
    {
      title: "Thao tác",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "10%",
      render: (id, record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ModalView data={record} />
          <ModalXoa tinId={id} fetData={fetchData} />
        </div>
      ),
    },
  ];
  const fetchData = async () => {
    const data = await useTinBan.actions.layTinKhach();
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

export default DangTin;
