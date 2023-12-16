import "./style.css";
import { FaBusinessTime } from "react-icons/fa6";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Timeline,
  Tooltip,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import ModalTimeLine from "./ModalTimeLine";
function ModalKhachHangCuaToi({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(data);
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
        >
          {soDienThoai ? soDienThoai : "Không có"}
        </a>
      ),
    },
    {
      title: "Facebook",
      dataIndex: "facebook",
      key: "facebook",
      render: (facebook) => (
        <a href={facebook ? facebook : "#"} target="_blank">
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
          <ModalTimeLine type={true} data={record.phieuXemNhaBatDongSan} />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Tooltip title="Chi tiết dẫn khách">
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
      </Tooltip>
      <Modal
        width={700}
        title={"Lịch sử dẫn khách"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <Table columns={columns} dataSource={data && data.lichSuXem} />
      </Modal>
    </>
  );
}

export default ModalKhachHangCuaToi;
