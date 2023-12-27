import "./style.css";
import { Button, Input, InputNumber, Modal, Timeline, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Space, Table, Tag } from "antd";
import { usePhongBan } from "./useKyGui";
import ModalTimeLine from "./ModalTimeLine";
import { fixNgayThang } from "../../../../extensions/fixNgayThang";
import ModalAnhHopDong from "./ModalAnhHopDong";
import { fixMoney } from "../../../../extensions/fixMoney";
function ModalLichSuChot({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "tenKhachHang",
      key: "tenKhachHang",
      render: (tenKhachHang) => <span>{tenKhachHang}</span>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDienThoai",
      key: "soDienThoai",
      render: (soDienThoai) => (
        <a
          href={soDienThoai ? "https://zalo.me/" + soDienThoai : "#"}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              height: "20px",
              width: "auto",
              marginRight: "4px",
            }}
            src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/zalo-logo-inkythuatso-14-15-05-01.jpg"
            alt="s"
          />
          {soDienThoai ? soDienThoai : "Không có"}
        </a>
      ),
    },
    {
      title: "Facebook",
      dataIndex: "facebook",
      key: "facebook",
      render: (facebook) => (
        <a
          href={facebook ? facebook : "#"}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              height: "20px",
              width: "auto",
              marginRight: "4px",
            }}
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="s"
          />{" "}
          {facebook ? facebook : "Không có"}
        </a>
      ),
    },
    {
      title: "Người làm chứng",
      dataIndex: "hopDongMuaBatDongSan",
      key: "hopDongMuaBatDongSan",
      render: (hopDongMuaBatDongSan) => (
        <span>{hopDongMuaBatDongSan[0].nguoiLamChung}</span>
      ),
    },
    {
      title: "Nơi công chứng",
      dataIndex: "hopDongMuaBatDongSan",
      key: "hopDongMuaBatDongSan",
      render: (hopDongMuaBatDongSan) => (
        <span>{hopDongMuaBatDongSan[0].noiCongChung}</span>
      ),
    },
    {
      title: "Giá cuối",
      dataIndex: "hopDongMuaBatDongSan",
      key: "hopDongMuaBatDongSan",
      render: (hopDongMuaBatDongSan) => (
        <span>{fixMoney(hopDongMuaBatDongSan[0].giaBan)}</span>
      ),
    },
    {
      title: "Ngày chốt",
      dataIndex: "hopDongMuaBatDongSan",
      key: "hopDongMuaBatDongSan",
      render: (hopDongMuaBatDongSan) => (
        <span>{fixNgayThang(hopDongMuaBatDongSan[0].ngayChot)}</span>
      ),
    },
    {
      title: "Ghi chú",
      dataIndex: "ghiChu",
      key: "ghiChu",
      render: (ghiChu) => <span>{ghiChu}</span>,
    },
    {
      title: "Thao tác",
      key: "action",
      width: "20%",
      render: (_, record) => (
        <Space size="middle">
          <ModalTimeLine
            type={true}
            data={record.phieuXemNhaBatDongSan}
            phieuId={record.id}
            fet={handleLayDuLieu}
          />
          <ModalAnhHopDong
            listAnh={record.hopDongMuaBatDongSan[0].anhChupHopDong}
          />
        </Space>
      ),
    },
  ];
  const [data, setData] = useState(undefined);
  async function handleLayDuLieu() {
    const data = await usePhongBan.actions.layKhachHangDaChot(id);
    setData(data.data);
  }
  useEffect(() => {
    if (isModalOpen) {
      handleLayDuLieu();
    }
  }, [isModalOpen]);
  return (
    <>
      <Button
        style={{
          marginTop: "12px",
          marginLeft: "12px",
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
        type="primary"
      >
        Lịch sử chốt
      </Button>
      <Modal
        width={1268}
        title={"Lịch sử chốt khách"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <Table columns={columns} dataSource={data && data} />
      </Modal>
    </>
  );
}

export default ModalLichSuChot;
