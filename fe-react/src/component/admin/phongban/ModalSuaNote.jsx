import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Tooltip,
} from "antd";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import React, { useState } from "react";
import { FaPersonRunning } from "react-icons/fa6";
import TextArea from "antd/es/input/TextArea";
import { usePhongBan } from "./useKyGui";
import { FiEdit } from "react-icons/fi";
function ModalSuaNote({ data2, fetchData }) {
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
  const [data, setData] = useState(data2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleThem() {
    const data3 = await usePhongBan.actions.suaDanKhach({
      ...data,
      id: data2.id,
    });
    if (!data3.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Cập nhật thất bại!",
        "bottomRight"
      );
      return;
    } else {
      openNotification(
        "sucess",
        "Hệ thống",
        "Cập nhật thành công",
        "bottomRight"
      );
      fetchData();
      return;
    }
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Cập nhật ghi chú">
        <Button
          style={{ color: "green", marginLeft: "4px" }}
          icon={<FiEdit />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Sửa ghi chú
        </Button>
      </Tooltip>
      <Modal
        width={800}
        title={"Cập nhật ghi chú"}
        open={isModalOpen}
        onOk={() => {
          handleThem();
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <p>Ghi chú</p>
        <TextArea
          rows={4}
          defaultValue={data.note}
          placeholder="Note thông tin"
          value={data.note}
          onChange={(e) => {
            setData({
              ...data,
              note: e.target.value,
            });
          }}
        />
      </Modal>
    </>
  );
}

export default ModalSuaNote;
