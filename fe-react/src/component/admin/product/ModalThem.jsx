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
import { InboxOutlined } from "@ant-design/icons";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import { useSanPhamStore } from "./useSanPhamStore";
import { useForm } from "antd/es/form/Form";
import Dragger from "antd/es/upload/Dragger";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  // var form = new FormData();
  // form.append("file1", hinhAnh[0]);
  // form.append("file2", hinhAnh[1]);
  // form.append("data", JSON.stringify(sanPham));
  const props = {
    name: "file",
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  async function handleThem() {
    const data2 = await useSanPhamStore.actions.theMoi(data);
    openNotification("success", "Hệ thống", "Thêm thành công", "bottomRight");
    form.resetFields();
    setIsModalOpen(false);
    fetchData();
  }
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Tạo BDS
      </Button>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={768}
        title={"Tạo BDS"}
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
          {/* <Form.Item label="Hình ảnh BDS">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Ảnh bất động sản</p>
              <p className="ant-upload-hint">Chỉ hỗ trợ file png, jpg, jpeg</p>
            </Dragger>
          </Form.Item> */}
          <Form.Item
            name="tenChuNha"
            label="Tên chủ nhà"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tenChuNha}
              onChange={(e) => {
                setData({
                  ...data,
                  tenChuNha: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soDienThoaiChuNha"
            label="Số điện thoại chủ nhà"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.soDienThoaiChuNha}
              onChange={(e) => {
                setData({
                  ...data,
                  soDienThoaiChuNha: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="giaBan"
            label="Giá bán"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.giaBan}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  giaBan: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="giaTriHoaHong"
            label="Hoa hồng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.giaTriHoaHong}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  giaTriHoaHong: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="giaTriHoaHongChiaNhanVien"
            label="Hoa hồng nhân viên"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.giaTriHoaHongChiaNhanVien}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  giaTriHoaHongChiaNhanVien: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="namXayDung"
            label="Năm xây dựng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.namXayDung}
              min={1900}
              max={3000}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  namXayDung: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soPhongNgu"
            label="Số phòng ngủ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.soPhongNgu}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  soPhongNgu: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="soPhongVeSinh"
            label="Số nhà vệ sinh"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.soPhongVeSinh}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  soPhongVeSinh: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="chieuNgang"
            label="Chiều ngang"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.chieuNgang}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  chieuNgang: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="chieuDai"
            label="Chiều dài"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.chieuDai}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  chieuDai: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="dienTich"
            label="Diện tích"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.dienTich}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  dienTich: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="dienTichSuDung"
            label="Diện tích sử dụng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data.dienTichSuDung}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  dienTichSuDung: e,
                });
              }}
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
            <Input
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
            name="diaChiGoogleMap"
            label="Link Google Map"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.diaChiGoogleMap}
              onChange={(e) => {
                setData({
                  ...data,
                  diaChiGoogleMap: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item name="moTa" label="Mô tả">
            <TextArea
              value={data.moTa}
              rows={4}
              onChange={(e) => {
                setData({
                  ...data,
                  moTa: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Thao tác">
            <Button
              //  htmlType="submit"
              loading={isLoading}
              onClick={() => {
                handleThem();
              }}
            >
              Tạo BDS
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalThem;
