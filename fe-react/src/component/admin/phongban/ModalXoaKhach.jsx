import {
  Button,
  InputNumber,
  Modal,
  notification,
  Select,
  Tooltip,
} from "antd";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { usePhongBan } from "./useKyGui";
function ModalXoaKhach({ tinId, fetData,fet2 }) {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleXoa() {
    const data = await usePhongBan.actions.xoakhach(tinId);
    if (!data.data) {
      openNotification("error", "Hệ thống", "Xóa thất bại", "bottomRight");
      return;
    }
    openNotification("success", "Hệ thống", "Xóa thành công", "bottomRight");
    fetData();
    fet2()
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Xóa khách hàng">
        {" "}
        <Button
          style={{ color: "red" }}
          shape="circle"
          icon={<MdDeleteOutline />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        title={"Xóa khách hàng"}
        open={isModalOpen}
        onOk={() => {
          handleXoa();
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        Xác nhận xóa khách hàng
      </Modal>
    </>
  );
}

export default ModalXoaKhach;
