import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
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
  const imgs = data.hinhAnhBatDongSan.map((item) => {
    return {
      original: item.linkHinhAnh,
      thumbnail: item.linkHinhAnh,
      description: "Description 1",
    };
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  // var form = new FormData();
  // form.append("file1", hinhAnh[0]);
  // form.append("file2", hinhAnh[1]);
  // form.append("data", JSON.stringify(sanPham));

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
          <Form.Item label="Hình ảnh BDS">
            <Gallery items={imgs} />
          </Form.Item>
          <Form.Item label="Tên chủ nhà">
            <Input value={data.tenChuNha} disabled />
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
          <Form.Item label="Hoa hồng">
            <InputNumber
              value={data.giaTriHoaHong}
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
          <Form.Item label="Hoa hồng nhân viên">
            <InputNumber
              value={data.giaTriHoaHongChiaNhanVien}
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
          <Form.Item label="Năm xây dựng">
            <InputNumber
              value={data.namXayDung}
              min={1900}
              max={3000}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Số phòng ngủ">
            <InputNumber
              value={data.soPhongNgu}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Số nhà vệ sinh">
            <InputNumber
              value={data.soPhongVeSinh}
              min={1}
              max={20}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Chiều ngang">
            <InputNumber
              value={data.chieuNgang + "m"}
              min={1}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Chiều dài">
            <InputNumber
              value={data.chieuDai + "m"}
              min={1}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Diện tích">
            <InputNumber
              value={data.dienTich + "m2"}
              min={1}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Diện tích sử dụng">
            <InputNumber
              value={data.dienTichSuDung + "m2"}
              min={1}
              style={{
                width: "100%",
              }}
              disabled
            />
          </Form.Item>
          <Form.Item label="Địa chỉ">
            <Input value={data.diaChi} disabled />
          </Form.Item>
          <Form.Item label="Loại BDS">
            <Input value={fixLoaiBDS(data.loaiBatDongSan)} disabled />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea value={data.moTaChiTiet} rows={4} disabled />
          </Form.Item>
          <div>
            <iframe
              src={data.diaChiGoogleMap}
              style={{
                border: 0,
                width: 700,
                height: 450,
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default ModalView;
