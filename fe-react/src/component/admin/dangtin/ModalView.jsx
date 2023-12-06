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
function ModalView({ data }) {
  console.log(data);
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {contextHolder}
      <Tooltip title="Xem">
        {" "}
        <Button
          style={{ color: "blue" }}
          shape="circle"
          icon={<IoEyeSharp />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={768}
        title={"Thông tin BDS"}
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

          <Form.Item label="Tiêu đề">
            <Input value={data.tieuDe} disabled />
          </Form.Item>
          <Form.Item label="Giá bán">
            <InputNumber
              value={data.giaBan}
              min={1}
              style={{
                width: "100%",
              }}
              disabled
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item label="Số điện thoại liên hệ">
            <Input
              value={data.soDienThoai}
              disabled
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              value={data.moTa}
              disabled
              rows={4}
            />
          </Form.Item>
          <Form.Item label="Ngày đăng">
            <Input
              value={data.ngayTao}
              disabled
            />
          </Form.Item>
          <Form.Item label="Loại BDS">
            <Input
              value={fixLoaiBDS(data.loaiBatDongSan)}
              disabled
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalView;
