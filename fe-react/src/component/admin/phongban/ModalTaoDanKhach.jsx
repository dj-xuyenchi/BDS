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
function ModalTaoDanKhach({ phieuXemId, id, fetchData }) {
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
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleThem() {
    const data2 = await usePhongBan.actions.themDanKhach({
      ...data,
      phieuXemNhaId: phieuXemId,
      batDongSanId: id,
    });
    if (!data2.data) {
      openNotification("error", "Hệ thống", "Tạo thất bại!", "bottomRight");
      return;
    } else {
      openNotification("sucess", "Hệ thống", "Tạo thành công", "bottomRight");
      fetchData();
      return;
    }
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Xem">
        <Button
          style={{ color: "blue" }}
          icon={<FaPersonRunning />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Dẫn căn này?
        </Button>
      </Tooltip>
      <Modal
        width={768}
        title={"Thông tin lần dẫn"}
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

export default ModalTaoDanKhach;
