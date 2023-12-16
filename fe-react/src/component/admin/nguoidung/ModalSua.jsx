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
import { useNguoiDung } from "./useNguoiDung";
import { Textarea } from "@chakra-ui/react";
import TextArea from "antd/es/input/TextArea";
import { FaRegEdit } from "react-icons/fa";
function ModalSua({ data2, fetchData, phongBan }) {
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
  const [role, setRole] = useState(
    data2.nguoiDungRole.map((item) => {
      return {
        nguoiDungId: item.nguoiDungId,
        roleId: item.roleId,
      };
    })
  );
  async function handleThem() {
    const data2 = await useNguoiDung.actions.suaNguoiDung({
      ...data,
      nguoiDungRole: role,
      phongBan: undefined,
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
          wrapperCol={{
            span: 18,
          }}
          layout="horizontal"
          style={{
            maxWidth: 768,
          }}
        >
          <Form.Item
            label="Tên tài khoản"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              disabled
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
            label="Phòng ban"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue={data.phongBan && data.phongBan.tenPhongBan}
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
            label="Chức vụ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="Chọn chức vụ"
              defaultValue={
                data.nguoiDungRole &&
                data.nguoiDungRole.map((item) => {
                  return {
                    label: item.role.roleName,
                    value: item.role.id,
                  };
                })
              }
              onChange={(e) => {
                var arr = [];
                for (var item of e) {
                  if (item == 3) {
                    arr.push({
                      roleId: 3,
                      nguoiDungId: data.id,
                    });
                  }
                  if (item == 4) {
                    arr.push({
                      roleId: 4,
                      nguoiDungId: data.id,
                    });
                  }
                }
                setRole(arr);
              }}
              optionLabelProp="label"
              options={[
                {
                  label: "Nhân viên",
                  value: "4",
                },
                {
                  label: "Đầu chủ",
                  value: "3",
                },
              ]}
              optionRender={(option) => (
                <Space>
                  <span role="img">{option.data.label}</span>
                </Space>
              )}
            />
          </Form.Item>
          <Form.Item
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
          <Form.Item
            label="Trạng thái"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Switch
              defaultChecked={data.trangThai == 2}
              onChange={(e) => {
                setData({
                  ...data,
                  trangThai: e ? 2 : 4,
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
              Cập nhật người dùng
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalSua;
