import "./style.css";
import { Button, Input, InputNumber, Modal, Timeline, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import ModalTimeLine from "./ModalTimeLine";
import { usePhongBan } from "./useKyGui";
import ModalThemKhachHang from "./ModalThemKhachHang";
import ModalSuaKhachHang from "./ModalSuaKhachHang";
import ModalXoaKhach from "./ModalXoaKhach";
function ModalKhachHangCuaToi({ id }) {
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
      title: "Ghi chú",
      dataIndex: "ghiChu",
      key: "ghiChu",
      render: (ghiChu) => <span>{ghiChu}</span>,
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ModalTimeLine
            type={true}
            data={record.phieuXemNhaBatDongSan}
            phieuId={record.id}
            fet={handleLayDuLieu}
          />
          <ModalSuaKhachHang handleLayDuLieu={handleLayDuLieu} data2={record} />
          <ModalXoaKhach tinId={record.id} fetData={handleLayDuLieu} />
        </Space>
      ),
    },
  ];
  const [data, setData] = useState(undefined);
  async function handleLayDuLieu() {
    const data = await usePhongBan.actions.layKhachHang(id);
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
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
        type="primary"
      >
        Khách hàng của tôi
      </Button>
      <Modal
        width={768}
        title={"Khách hàng của tôi"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <ModalThemKhachHang handleLayDuLieu={handleLayDuLieu} />
        <Table columns={columns} dataSource={data && data} />
      </Modal>
    </>
  );
}

export default ModalKhachHangCuaToi;
