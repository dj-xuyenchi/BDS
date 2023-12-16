import {
  Button,
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
  Tooltip,
} from "antd";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Textarea } from "@chakra-ui/react";
import TextArea from "antd/es/input/TextArea";
import { IoEyeSharp } from "react-icons/io5";
function ModalView({ data }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
        title={"Thông tin người dùng"}
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
          <Form.Item label="Tên tài khoản">
            <Input value={data.tenTaiKhoan} disabled />
          </Form.Item>
          <Form.Item label="Họ tên người dùng">
            <Input value={data.hoTenNguoiDung} disabled />
          </Form.Item>
          <Form.Item label="Số căn cước">
            <Input value={data.soCanCuoc} disabled />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input value={data.soDienThoai} disabled />
          </Form.Item>{" "}
          <Form.Item label="Phòng ban">
            <Select
              defaultValue={data.phongBan && data.phongBan.tenPhongBan}
              disabled
            />
          </Form.Item>
          <Form.Item label="Địa chỉ">
            <TextArea rows={4} value={data.diaChi} disabled />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalView;
