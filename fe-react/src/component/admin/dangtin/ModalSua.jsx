import {
  Button,
  DatePicker,
  Form,
  Image,
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
import { FaRegEdit } from "react-icons/fa";
import { useTinBan } from "./useSanPhamStore";
import { useEffect } from "react";
import { fixMoney } from "../../../extensions/fixMoney";
function ModalSua({ data, fetData }) {
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [batDongSan, setBatDongSan] = useState(undefined);
  const [hinhAnhBDSchon, setHinhAnhBDSchon] = useState(undefined);
  const [data2, setData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function hanleLayBatDongSan() {
    const data = await useTinBan.actions.layBatDongSan({});
    setBatDongSan(data.data);
  }

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (isModalOpen) {
      hanleLayBatDongSan();
    }
  }, [isModalOpen]);
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
  async function handleSua() {
    console.log(data2);
    const data = await useTinBan.actions.suaTin({
      ...data2,
    });
    fetData();
    form.resetFields();
    openNotification(
      "success",
      "Hệ thống",
      "Cập nhật thành công",
      "bottomRight"
    );
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Cập nhật">
        <Button
          style={{ color: "green", marginLeft: "4px", marginRight: "4px" }}
          shape="circle"
          icon={<FaRegEdit />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={768}
        title={"Cập nhật tin bài"}
        open={isModalOpen}
        onOk={() => {
          handleSua();
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
            <Input
              value={data2.tieuDe}
              onChange={(e) => {
                setData({
                  ...data2,
                  tieuDe: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            name="batDongSan"
            label="Bất động sản"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              labelInValue
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
                setHinhAnhBDSchon(
                  batDongSan.find((item) => {
                    return item.id == e.key;
                  })
                );
                setData({
                  ...data2,
                  batDongSanId: e.key,
                });
              }}
            >
              {batDongSan
                ? batDongSan.map((option) => (
                    <Select.Option key={option.id} value={option.id}>
                      {"Đầu chủ " +
                        option.dauChuTao.hoTenNguoiDung +
                        " BDS " +
                        option.diaChi +
                        " Loại " +
                        fixLoaiBDS(option.loaiBatDongSan) +
                        " giá " +
                        fixMoney(option.giaBan)}
                    </Select.Option>
                  ))
                : ""}
            </Select>
          </Form.Item>{" "}
          {hinhAnhBDSchon && (
            <Form.Item name="moTa" label="Hình ảnh">
              <Image src={hinhAnhBDSchon.hinhAnhBatDongSan[0].linkHinhAnh} />
            </Form.Item>
          )}
          <Form.Item label="Giá bán">
            <InputNumber
              value={data2.giaBan}
              onChange={(e) => {
                setData({
                  ...data2,
                  giaBan: e,
                });
              }}
              min={1}
              style={{
                width: "100%",
              }}
              formatter={(value) =>
                `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item label="Số điện thoại liên hệ">
            <Input
              value={data2.soDienThoai}
              onChange={(e) => {
                setData({
                  ...data2,
                  soDienThoai: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              value={data2.moTa}
              rows={4}
              onChange={(e) => {
                setData({
                  ...data2,
                  moTa: e.target.value,
                });
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalSua;
