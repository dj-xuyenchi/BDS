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
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { IoEyeSharp } from "react-icons/io5";
import TextArea from "antd/es/input/TextArea";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { useTinBan } from "./useSanPhamStore";
import { MdDeleteOutline } from "react-icons/md";
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
    const data = await useTinBan.actions.xoaTin(tinId);
    openNotification("success", "Hệ thống", "Xóa thành công", "bottomRight");
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
        title={"Xóa bài đăng"}
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
        Xác nhận xóa bài đăng
      </Modal>
    </>
  );
}

export default ModalXoa;
