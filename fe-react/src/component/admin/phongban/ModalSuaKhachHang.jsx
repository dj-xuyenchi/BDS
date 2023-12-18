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
import { FaRegEdit } from "react-icons/fa";
function ModalSuaKhachHang({ handleLayDuLieu, data2 }) {
  const [api, contextHolder] = notification.useNotification();

  const user = JSON.parse(localStorage.getItem("user"));
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
    const data3 = await usePhongBan.actions.suakhach({
      ...data,
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
      handleLayDuLieu();
      return;
    }
  }
  return (
    <>
      {contextHolder}

      <Tooltip title="Cập nhật liên hệ">
        <Button
          style={{ color: "green", marginLeft: "4px", marginRight: "4px" }}
          shape="circle"
          icon={<FaRegEdit />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={768}
        title={"Cập nhật liên hệ khách"}
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
        {" "}
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Tên khách hàng
        </p>
        <Input
          placeholder="Tên khách hàng"
          value={data.tenKhachHang}
          onChange={(e) => {
            setData({
              ...data,
              tenKhachHang: e.target.value,
            });
          }}
        />
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Số điện thoại
        </p>
        <Input
          placeholder=" Số điện thoại"
          value={data.soDienThoai}
          onChange={(e) => {
            setData({
              ...data,
              soDienThoai: e.target.value,
            });
          }}
        />
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Facebook
        </p>
        <Input
          placeholder="Facebook"
          value={data.facebook}
          onChange={(e) => {
            setData({
              ...data,
              facebook: e.target.value,
            });
          }}
        />{" "}
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Số căn cước
        </p>
        <Input
          placeholder="Số căn cước"
          value={data.soCanCuocKhachHang}
          onChange={(e) => {
            setData({
              ...data,
              soCanCuocKhachHang: e.target.value,
            });
          }}
        />
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Ghi chú
        </p>
        <TextArea
          rows={4}
          placeholder="Ghi chú"
          value={data.ghiChu}
          onChange={(e) => {
            setData({
              ...data,
              ghiChu: e.target.value,
            });
          }}
        />
      </Modal>
    </>
  );
}

export default ModalSuaKhachHang;
