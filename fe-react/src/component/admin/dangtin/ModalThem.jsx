import {
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Select,
  message,
  notification,
} from "antd";
import "./style.css";
import React, { useRef, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useSanPhamStore, useTinBan } from "./useSanPhamStore";
import { useForm } from "antd/es/form/Form";
import { MdPostAdd } from "react-icons/md";
import { useEffect } from "react";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { fixMoney } from "../../../extensions/fixMoney";
import { useGpt } from "../../../plugins/gpt";
import { content } from "./context";
function ModalThem({ fetchData }) {
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [batDongSan, setBatDongSan] = useState(undefined);
  const [hinhAnhBDSchon, setHinhAnhBDSchon] = useState(undefined);
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
  const [data, setData] = useState({
    moTa: "",
  });
  // var form = new FormData();
  // form.append("file1", hinhAnh[0]);
  // form.append("file2", hinhAnh[1]);
  // form.append("data", JSON.stringify(sanPham));
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
  async function handleThem() {
    const data2 = await useTinBan.actions.taoTin({
      ...data,
      nguoiDangId: user.id,
    });
    if (!data2.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Mỗi tài khoản chỉ được tạo tối đa 5 tin",
        "bottomRight"
      );
      form.resetFields();
      return;
    }
    openNotification("success", "Hệ thống", "Tạo thành công", "bottomRight");
    form.resetFields();
    setIsModalOpen(false);
    fetchData();
  }
  const [isLoading2, setIsLoading2] = useState(false);
  async function handleAi() {
    if (!data.batDongSanId) {
      openNotification(
        "error",
        "Hệ thống",
        "Tôi cần thông tin BDS để tư vấn content",
        "bottomRight"
      );
      return;
    }
    setIsLoading2(true);
    const data2 = await useGpt.actions.chat(
      content(
        batDongSan.find((item) => {
          return item.id == data.batDongSanId;
        })
      )
    );
    setIsLoading2(false);
    setData({
      ...data,
      moTa: data2.data.choices[0].message.content,
    });
  }
  const ai = useRef();
  useEffect(() => {}, [data]);
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <MdPostAdd />
        <span
          style={{
            marginLeft: "4px",
          }}
        >
          Đăng tin mới
        </span>
      </Button>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={768}
        title={"Đăng tin mới"}
        open={isModalOpen}
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
          onFinish={handleThem}
        >
          <Form.Item
            name="tieuDe"
            label="Tiêu đề"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tieuDe}
              onChange={(e) => {
                setData({
                  ...data,
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
                  ...data,
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
          </Form.Item>
          {hinhAnhBDSchon && (
            <Form.Item name="moTa" label="Hình ảnh">
              <Image
                style={{
                  width: "auto",
                  height: "220px",
                }}
                src={hinhAnhBDSchon.hinhAnhBatDongSan[0].linkHinhAnh}
              />
            </Form.Item>
          )}
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
              value={data.tieuDe}
              style={{
                width: "100%",
              }}
              min={1}
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
            name="soDienThoai"
            label="Số điện thoại liên hệ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tieuDe}
              onChange={(e) => {
                setData({
                  ...data,
                  soDienThoai: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
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
            <Button htmlType="submit" loading={isLoading}>
              Đăng tin
            </Button>
            <Button
              loading={isLoading2}
              disabled={isLoading2}
              style={{
                marginLeft: "4px",
              }}
              onClick={handleAi}
            >
              Hỗ trợ Content
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalThem;
