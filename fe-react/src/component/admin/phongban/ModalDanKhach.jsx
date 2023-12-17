import { Button, Image, Modal, Table, Tag, notification } from "antd";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import ModalView from "../product/ModalView";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { fixMoney } from "../../../extensions/fixMoney";
import { useSanPhamStore } from "../product/useSanPhamStore";
import ModalTaoDanKhach from "./ModalTaoDanKhach";
function ModalDanKhach({ phieuId ,fet}) {
  const [data, setData] = useState(undefined);
  const [api, contextHolder] = notification.useNotification();
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
  const user = JSON.parse(localStorage.getItem("user"));
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    },

    {
      title: "Thông tin Đầu chủ",
      dataIndex: "dauChuTao",
      key: "dauChuTao",
      width: "10%",
      render: (dauChuTao) => (
        <span>{dauChuTao.hoTenNguoiDung + " - " + dauChuTao.soDienThoai}</span>
      ),
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
          <ModalTaoDanKhach phieuXemId={phieuId} id={id} fetchData={fet} />
        </div>
      ),
    },
  ];
  const fetchData = async () => {
    const data = await useSanPhamStore.actions.fetchSanPham({});
    setData(data.data);
  };
  useEffect(() => {
    // dispath(productSlice.actions.setIsLoading(true));
    fetchData();
  }, []);
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Dẫn mới
      </Button>
      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        width={1268}
        title={"Kho hàng"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomRight"],
            pageSize: "40",
          }}
        />
      </Modal>
    </>
  );
}

export default ModalDanKhach;
