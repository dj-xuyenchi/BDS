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
import { GiConfirmed } from "react-icons/gi";
function ModalXacNhan({ tinId, fetData }) {
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
    const data = await useTinBan.actions.xacNhanTin(tinId);
    openNotification(
      "success",
      "Hệ thống",
      "Xác nhận thành công",
      "bottomRight"
    );
    fetData();
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Xác nhận tin">
        {" "}
        <Button
          style={{ color: "green", marginLeft: "4px", marginRight: "4px" }}
          shape="circle"
          icon={<GiConfirmed />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        title={"Xác nhận bài đăng"}
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
        Xác nhận bài đăng
      </Modal>
    </>
  );
}

export default ModalXacNhan;
