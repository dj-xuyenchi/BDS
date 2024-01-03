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
function ModalThemKhachHang({ handleLayDuLieu }) {
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
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleThem() {
    if (!data.tenKhachHang) {
      openNotification(
        "error",
        "Hệ thống",
        "Thiếu tên khách hàng",
        "bottomRight"
      );
      return;
    }
    if (!data.soDienThoai) {
      openNotification(
        "error",
        "Hệ thống",
        "Thiếu số điện thoại",
        "bottomRight"
      );
      return;
    }
    if (!data.soCanCuocKhachHang) {
      openNotification("error", "Hệ thống", "Thiếu số căn cước", "bottomRight");
      return;
    }
    if (!data.ghiChu) {
      openNotification("error", "Hệ thống", "Thiếu ghi chú", "bottomRight");
      return;
    }
    const data3 = await usePhongBan.actions.themKhach({
      ...data,
      nhanVienDanKhachId: user.id,
    });
    if (!data3.data) {
      openNotification("error", "Hệ thống", "Tạo mới thất bại!", "bottomRight");
      return;
    } else {
      openNotification(
        "sucess",
        "Hệ thống",
        "Tạo mới thành công",
        "bottomRight"
      );
      handleLayDuLieu();
      setIsModalOpen(false);
      return;
    }
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Tạo liên hệ khách mới">
        <Button
          icon={<FiEdit />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Tạo liên hệ
        </Button>
      </Tooltip>
      <Modal
        width={768}
        title={"Tạo liên hệ khách mới"}
        open={isModalOpen}
        onOk={() => {
          handleThem();
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

export default ModalThemKhachHang;
