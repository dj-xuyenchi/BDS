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
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useSanPhamStore, useTinBan } from "./useSanPhamStore";
import { useForm } from "antd/es/form/Form";
import { MdPostAdd } from "react-icons/md";
import { useEffect } from "react";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { fixMoney } from "../../../extensions/fixMoney";
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
  const [data, setData] = useState({});
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
    openNotification("success", "Hệ thống", "Tạo thành công", "bottomRight");
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
              <Image src={hinhAnhBDSchon.hinhAnhBatDongSan[0].linkHinhAnh} />
            </Form.Item>
          )}
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
              htmlType="submit"
              loading={isLoading}
              onClick={() => {
                handleThem();
              }}
            >
              Đăng tin
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalThem;
