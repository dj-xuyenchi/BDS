import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Image, Input, Space, Table, Tag } from "antd";
import { useSanPhamStore } from "./useSanPhamStore";
import { BsFillPencilFill } from "react-icons/bs";
import ModalThemSua from "./ModalThem";
import ModalView from "./ModalView";
import { fixMoney } from "../../../extensions/fixMoney";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import ModalThem from "./ModalThem";
import ModalXoa from "./ModalXoa";
import ModalSua from "./ModalSua";
import { checkRole } from "../../../extensions/checkRole";
function Product() {
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
      title: "Mặt trước",
      dataIndex: "hinhAnhBatDongSan",
      key: "hinhAnhBatDongSan",
      width: "10%",
      render: (hinhAnh) => (
        <>
          <Image
            src={hinhAnh[0].linkHinhAnh}
            style={{ width: "160px", height: "140px" }}
          />
        </>
      ),
    },
    {
      title: "Giá bán",
      dataIndex: "giaBan",
      key: "giaBan",
      width: "10%",
      sorter: (a, b) => a.giaBan - b.giaBan,
      sortDirections: ["descend", "ascend"],
      render: (giaBan) => <span>{fixMoney(giaBan)}</span>,
    },
    {
      title: "Hoa hồng",
      dataIndex: "giaTriHoaHongChiaNhanVien",
      key: "giaTriHoaHongChiaNhanVien",
      width: "10%",
      sorter: (a, b) =>
        a.giaTriHoaHongChiaNhanVien - b.giaTriHoaHongChiaNhanVien,
      sortDirections: ["descend", "ascend"],
      render: (giaTriHoaHongChiaNhanVien) => (
        <span>{fixMoney(giaTriHoaHongChiaNhanVien)}</span>
      ),
    },
    {
      title: "Mặt tiền",
      dataIndex: "chieuNgang",
      key: "chieuNgang",
      width: "5%",
      sorter: (a, b) => a.chieuNgang - b.chieuNgang,
      sortDirections: ["descend", "ascend"],
      render: (chieuNgang) => <span>{chieuNgang}m</span>,
    },
    {
      title: "Chiều dài",
      dataIndex: "chieuDai",
      key: "chieuDai",
      width: "5%",
      sorter: (a, b) => a.chieuDai - b.chieuDai,
      sortDirections: ["descend", "ascend"],
      render: (chieuDai) => <span>{chieuDai}m</span>,
    },
    {
      title: "Diện tích",
      dataIndex: "dienTich",
      key: "dienTich",
      width: "5%",
      sorter: (a, b) => a.dienTich - b.dienTich,
      sortDirections: ["descend", "ascend"],
      render: (dienTich) => (
        <span>
          {dienTich}m<sup>2</sup>{" "}
        </span>
      ),
    },
    {
      title: "Số phòng ngủ",
      dataIndex: "soPhongNgu",
      key: "soPhongNgu",
      width: "7.5%",
      sorter: (a, b) => a.soPhongNgu - b.soPhongNgu,
      sortDirections: ["descend", "ascend"],
      render: (soPhongNgu) => <span>{soPhongNgu}</span>,
    },
    {
      title: "Số nhà vệ sinh",
      dataIndex: "soPhongVeSinh",
      key: "soPhongVeSinh",
      width: "7.5%",
      sorter: (a, b) => a.soPhongVeSinh - b.soPhongVeSinh,
      sortDirections: ["descend", "ascend"],
      render: (soPhongVeSinh) => <span>{soPhongVeSinh}</span>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "diaChi",
      key: "diaChi",
      width: "12.5%",
      render: (diaChi) => <span>{diaChi}</span>,
      // filters: filter.thietKe,
      // filteredValue: filteredInfo.address || null,
      // onFilter: (value, record) => record.thietKe.tenThietKe.includes(value),
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
      title: "Thông tin Đầu chủ",
      dataIndex: "dauChuTao",
      key: "dauChuTao",
      width: "10%",
      render: (dauChuTao) => (
        <span>{dauChuTao.hoTenNguoiDung + " - " + dauChuTao.soDienThoai}</span>
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
          {record.dauChuTaoId == user.id ? (
            <>
              <ModalSua data={record} fetchData={fetchData} />
              <ModalXoa tinId={id} fetData={fetchData} />
            </>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];
  const fetchData = async () => {
    const se = localStorage.getItem("search");
    const data = await useSanPhamStore.actions.fetchSanPham({});
    setData(data.data);
  };

  useEffect(() => {
    // dispath(productSlice.actions.setIsLoading(true));
    fetchData();
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
                  pageSize: "40",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
