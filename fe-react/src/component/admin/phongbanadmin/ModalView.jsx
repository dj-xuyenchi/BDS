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
        title={"Thông tin phòng ban"}
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
          <Form.Item label="Tên phòng ban">
            <Input value={data.tenPhongBan} disabled />
          </Form.Item>
          <Form.Item label="Khẩu hiệu">
            <Input value={data.khauHieu} disabled />
          </Form.Item>
          <Form.Item label="Trưởng phòng">
            <Input value={data.truongPhong.hoTenNguoiDung} disabled />
          </Form.Item>
          <Form.Item label="Số nhân viên">
            <Input value={data.soLuongNhanVien} disabled />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalView;
