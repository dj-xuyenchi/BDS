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
import { FaRegEdit } from "react-icons/fa";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
function ModalSua({ data, fetchData }) {
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
  const [data2, setData] = useState(data);
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
  async function handleSua() {
    const data3 = await useSanPhamStore.actions.suaBDS({
      ...data2,
    });
    openNotification(
      "success",
      "Hệ thống",
      "Cập nhật thành công",
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
        title={"Cập nhật"}
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
            label="Tên chủ nhà"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data2.tenChuNha}
              onChange={(e) => {
                setData({
                  ...data2,
                  tenChuNha: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Số điện thoại chủ nhà"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data2.soDienThoaiChuNha}
              onChange={(e) => {
                setData({
                  ...data2,
                  soDienThoaiChuNha: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Giá bán"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.giaBan}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
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
            label="Hoa hồng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.giaTriHoaHong}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
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
            label="Hoa hồng nhân viên"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.giaTriHoaHongChiaNhanVien}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  giaTriHoaHongChiaNhanVien: e,
                });
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>{" "}
          <Form.Item
            label="Loại bất động sản"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              labelInValue
              value={fixLoaiBDS(data2.loaiBatDongSan)}
              optionLabelProp="children"
              style={{
                width: "100%",
              }}
              rules={[
                {
                  required: true,
                },
              ]}
              onChange={(e) => {
                setData({
                  ...data2,
                  loaiBatDongSan: e.value,
                });
              }}
            >
              <Select.Option key={1} value={1}>
                Nhà phố
              </Select.Option>
              <Select.Option key={2} value={2}>
                Đất thổ cư
              </Select.Option>
              <Select.Option key={3} value={3}>
                Đất nền
              </Select.Option>
              <Select.Option key={4} value={4}>
                Chung cư
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Năm xây dựng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.namXayDung}
              min={1900}
              max={3000}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  namXayDung: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Số phòng ngủ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.soPhongNgu}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  soPhongNgu: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Số nhà vệ sinh"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.soPhongVeSinh}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  soPhongVeSinh: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Chiều ngang"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.chieuNgang}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  chieuNgang: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Chiều dài"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.chieuDai}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  chieuDai: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Diện tích"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.dienTich}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  dienTich: e,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Diện tích sử dụng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              value={data2.dienTichSuDung}
              min={1}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data2,
                  dienTichSuDung: e,
                });
              }}
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
            <Input
              value={data2.diaChi}
              onChange={(e) => {
                setData({
                  ...data2,
                  diaChi: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Link Google Map"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data2.diaChiGoogleMap}
              onChange={(e) => {
                setData({
                  ...data2,
                  diaChiGoogleMap: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              value={data2.moTaChiTiet}
              rows={4}
              onChange={(e) => {
                setData({
                  ...data2,
                  moTaChiTiet: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Thao tác">
            <Button
              htmlType="submit"
              loading={isLoading}
              onClick={() => {
                handleSua();
              }}
            >
              Cập nhật BDS
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalSua;
