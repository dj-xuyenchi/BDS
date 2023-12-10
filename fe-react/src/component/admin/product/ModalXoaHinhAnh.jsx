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
function ModalXoaHinhAnh({ hinhAnhId, bdsId, fetData }) {
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
    const data = await useSanPhamStore.actions.xoaHinhAnh({
      hinhAnhId: hinhAnhId,
      bdsId: bdsId,
    });
    if (data.data) {
      openNotification("success", "Hệ thống", "Xóa thành công", "bottomRight");
    } else {
      openNotification(
        "error",
        "Hệ thống",
        "BDS cần ít nhất 1 hình ảnh",
        "bottomRight"
      );
    }
    fetData();
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
        title={"Xóa hình ảnh"}
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
        Xác nhận xóa hình ảnh
      </Modal>
    </>
  );
}

export default ModalXoaHinhAnh;
