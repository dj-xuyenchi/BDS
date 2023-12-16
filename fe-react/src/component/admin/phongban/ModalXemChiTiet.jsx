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
import ModalTimeLine from "./ModalTimeLine";
function ModalXemChiTiet({ data }) {
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
          <ModalTimeLine data={record.phieuXemNhaBatDongSan} />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Tooltip title="Dẫn khách">
        {" "}
        <Button
          style={{ color: "blue" }}
          shape="circle"
          icon={<FaBusinessTime />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={700}
        title={"Danh sách khách hàng"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <Table columns={columns} dataSource={data} />
      </Modal>
    </>
  );
}

export default ModalXemChiTiet;
