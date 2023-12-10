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
import { useBaiHoc } from "../useSanPhamStore";
function ModalXoaBaiHoc({ baiHocId, fetData }) {
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
    const data = await useBaiHoc.actions.xoaBaiHoc(baiHocId);
    if (data.data) {
      openNotification("success", "Hệ thống", "Xóa thành công", "bottomRight");
    } else {
      openNotification("error", "Hệ thống", "Xóa thất bại", "bottomRight");
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
        title={"Xóa bài học"}
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
        Xác nhận xóa bài học
      </Modal>
    </>
  );
}

export default ModalXoaBaiHoc;
