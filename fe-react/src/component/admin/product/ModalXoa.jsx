import {
  Button,
  DatePicker,
  Form,
  Input,
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
import { useSanPhamStore } from "./useSanPhamStore";
function ModalXoa({ tinId, fetData }) {
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
    const data = await useSanPhamStore.actions.xoaBDS(tinId);
    fetData();
    openNotification("success", "Hệ thống", "Xóa thành công", "bottomRight");
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Xóa">
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
        title={"Xóa BDS"}
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
        Xác nhận xóa BDS
      </Modal>
    </>
  );
}

export default ModalXoa;
