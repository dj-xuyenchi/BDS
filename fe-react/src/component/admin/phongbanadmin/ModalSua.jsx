import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Switch,
  message,
  Upload,
  notification,
  Space,
} from "antd";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Textarea } from "@chakra-ui/react";
import TextArea from "antd/es/input/TextArea";
import { FaRegEdit } from "react-icons/fa";
import { usePhongBanAdmin } from "./usePhongBanAdmin";
function ModalSua({ data2, fetchData }) {
  const [form] = useForm();
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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(data2);
  async function handleThem() {
    const data2 = await usePhongBanAdmin.actions.suaPhongBan({
      ...data,
      hinhDaiDien: " ",
    });
    if (!data2.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Cập nhật thất bại!",
        "bottomRight"
      );
      return;
    }
    openNotification(
      "success",
      "Hệ thống",
      "Cập nhật thành công!",
      "bottomRight"
    );
    form.resetFields();
    setIsModalOpen(false);
    fetchData();
  }

  const [nhanVien, setNhanVien] = useState(undefined);
  async function handleLayNhanVien() {
    const data2 =
      await usePhongBanAdmin.actions.layNhanVienKhongPhaiTruongPhong();
    setNhanVien(data2.data);
  }
  useEffect(() => {
    if (isModalOpen) {
      handleLayNhanVien();
    }
  }, [isModalOpen]);
  return (
    <>
      {contextHolder}
      <Button
        style={{ color: "green", marginLeft: "4px", marginRight: "4px" }}
        shape="circle"
        icon={<FaRegEdit />}
        onClick={() => {
          setIsModalOpen(true);
        }}
      />{" "}
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={768}
        title={"Cập nhật người dùng"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          onFinish={handleThem}
          wrapperCol={{
            span: 18,
          }}
          layout="horizontal"
          style={{
            maxWidth: 768,
          }}
        >
          <Form.Item
            label="Tên phòng ban"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tenPhongBan}
              onChange={(e) => {
                setData({
                  ...data,
                  tenPhongBan: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Khẩu hiệu"
            rules={[
              {
                required: true,
                message: "Không được để trống",
              },
            ]}
          >
            <Input
              value={data.khauHieu}
              onChange={(e) => {
                setData({
                  ...data,
                  khauHieu: e.target.value,
                });
              }}
            />
          </Form.Item>

          <Form.Item
            label="Trưởng phòng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue="Chọn trưởng phòng"
              onChange={(e) => {
                setData({
                  ...data,
                  truongPhongId: e,
                });
              }}
              options={
                nhanVien &&
                nhanVien.map((item) => {
                  return {
                    value: item.id,
                    label: item.hoTenNguoiDung,
                  };
                })
              }
            />
          </Form.Item>

          <Form.Item label="Thao tác">
            <Button htmlType="submit" loading={isLoading}>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalSua;
