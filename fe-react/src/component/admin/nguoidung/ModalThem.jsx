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
} from "antd";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useNguoiDung } from "./useNguoiDung";
import { Textarea } from "@chakra-ui/react";
import TextArea from "antd/es/input/TextArea";
function ModalThem({ fetchData }) {
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
  const [data, setData] = useState({});
  const [phongBan, setPhongBan] = useState(undefined);
  async function handleLayPhongBan() {
    const data2 = await useNguoiDung.actions.layPhongBan();
    setPhongBan(data2.data);
  }
  async function handleThem() {
    const data2 = await useNguoiDung.actions.themNguoiDung(data);
    if (!data2.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Thêm thất bại tên tài khoản đã tồn tại!",
        "bottomRight"
      );
      return;
    }
    openNotification(
      "success",
      "Hệ thống",
      "Thêm mới thành công!",
      "bottomRight"
    );
    form.resetFields();
    setIsModalOpen(false);
    fetchData();
  }
  useEffect(() => {
    handleLayPhongBan();
  }, []);
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Tạo mới người dùng
      </Button>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={768}
        title={"Thêm mới người dùng"}
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
          wrapperCol={{
            span: 18,
          }}
          layout="horizontal"
          style={{
            maxWidth: 768,
          }}
        >
          <Form.Item
            name="tenTaiKhoan"
            label="Tên tài khoản"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tenTaiKhoan}
              onChange={(e) => {
                setData({
                  ...data,
                  tenTaiKhoan: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="matKhau"
            label="Mật khẩu"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              value={data.matKhau}
              onChange={(e) => {
                setData({
                  ...data,
                  matKhau: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="hoTenNguoiDung"
            label="Họ tên người dùng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.hoTenNguoiDung}
              onChange={(e) => {
                setData({
                  ...data,
                  hoTenNguoiDung: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soCanCuoc"
            label="Số căn cước"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.soCanCuoc}
              onChange={(e) => {
                setData({
                  ...data,
                  soCanCuoc: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soDienThoai"
            label="Số điện thoại"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.soDienThoai}
              onChange={(e) => {
                setData({
                  ...data,
                  soDienThoai: e.target.value,
                });
              }}
            />
          </Form.Item>{" "}
          <Form.Item
            name="phongBan"
            label="Phòng ban"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue="Chọn phòng ban"
              onChange={(e) => {
                setData({
                  ...data,
                  phongBanId: e,
                });
              }}
              options={
                phongBan &&
                phongBan.map((item) => {
                  return {
                    value: item.id,
                    label: item.tenPhongBan,
                  };
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="diaChi"
            label="Địa chỉ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea
              rows={4}
              value={data.diaChi}
              onChange={(e) => {
                setData({
                  ...data,
                  diaChi: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Thao tác">
            <Button
              htmlType="submit"
              loading={isLoading}
              onClick={() => {
                handleThem();
              }}
            >
              Thêm người dùng
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalThem;
