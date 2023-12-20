import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Tooltip,
} from "antd";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import React, { useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useNguoiDungStore } from "./useNguoiDungStore";
function ModalGiaHan({ tinBanId, fet }) {
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
  const [time, setTime] = useState(undefined);
  async function handleGiaHan() {
    if (!time) {
      openNotification("error", "Hệ thống", "Chọn ngày gia hạn", "bottomRight");
      return;
    }
    const data = await useNguoiDungStore.actions.giaHan({
      tinBanId: tinBanId,
      ngayHet: time,
      nguoiDungId: user.id,
    });
    if (data.data == 1) {
      openNotification(
        "success",
        "Hệ thống",
        "Gia hạn thành công",
        "bottomRight"
      );
      fet();
    }
    if (data.data == 0) {
      openNotification("error", "Hệ thống", "Số dư không đủ", "bottomRight");
    }
    setIsModalOpen(false);
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Gia hạn">
        <Button
          style={{ color: "green", marginLeft: "4px", marginRight: "4px" }}
          shape="circle"
          icon={<FaClockRotateLeft />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </Tooltip>
      <Modal
        width={480}
        title={"Gia hạn bài đăng"}
        open={isModalOpen}
        onOk={() => {
          handleGiaHan(time);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <p>Chọn ngày ngưng bài viết (Giá quảng cáo 1 ngày = 2.500đ)</p>
        <DatePicker
          style={{
            width: "100%",
          }}
          onChange={(e) => {
            if (e) {
              const currentDate = new Date();
              const selectedDate = new Date(e.format("YYYY-MM-DD"));
              if (selectedDate > currentDate) {
                setTime(e.format("YYYY-MM-DD"));
              } else {
                openNotification(
                  "error",
                  "Hệ thống",
                  "Vui lòng chọn 1 ngày trong tương lai",
                  "bottomRight"
                );
              }
            }
          }}
        />
      </Modal>
    </>
  );
}

export default ModalGiaHan;
