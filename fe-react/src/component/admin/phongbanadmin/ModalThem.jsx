import { Button, Form, Input, Modal, Select, notification } from "antd";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Textarea } from "@chakra-ui/react";
import TextArea from "antd/es/input/TextArea";
import { usePhongBanAdmin } from "./usePhongBanAdmin";
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
  const [nhanVien, setNhanVien] = useState(undefined);
  async function handleLayNhanVien() {
    const data2 =
      await usePhongBanAdmin.actions.layNhanVienKhongPhaiTruongPhong();
    setNhanVien(data2.data);
  }
  async function handleThem() {
    const data2 = await usePhongBanAdmin.actions.taoPhongBan({
      ...data,
      hinhDaiDien: " ",
    });
    if (!data2.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Tạo mới phòng ban thất bại!",
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
    if (isModalOpen) {
      handleLayNhanVien();
    }
  }, [isModalOpen]);
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Thêm mới phòng ban
      </Button>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={768}
        title={"Thêm mới phòng ban"}
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
            name="Tên phòng ban"
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
            name="Khẩu hiệu"
            label="Khẩu hiệu"
            rules={[
              {
                required: true,
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
            name="Trưởng phòng"
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
            <Button
              htmlType="submit"
              loading={isLoading}
            >
              Thêm phòng ban
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalThem;
