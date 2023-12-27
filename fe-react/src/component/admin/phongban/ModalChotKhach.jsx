import {
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  message,
  Modal,
  notification,
  Select,
  Tooltip,
  Upload,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import React, { useEffect, useState } from "react";
import { usePhongBan } from "./useKyGui";
import { AiOutlineFileDone } from "react-icons/ai";
import { useTinBan } from "../dangtin/useSanPhamStore";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import { fixMoney } from "../../../extensions/fixMoney";
function ModalChotKhach({ handleLayDuLieu, phieu }) {
  const [api, contextHolder] = notification.useNotification();
  const [batDongSan, setBatDongSan] = useState(undefined);
  const [hinhAnhBDSchon, setHinhAnhBDSchon] = useState(undefined);
  async function hanleLayBatDongSan() {
    const data = await useTinBan.actions.layBatDongSan({});
    setBatDongSan(data.data);
  }
  const user = JSON.parse(localStorage.getItem("user"));
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
  const [fileList, setFileList] = useState([]);
  const props = {
    beforeUpload: (file) => {
      return false;
    },
    onChange: (file) => {
      setFileList(file.fileList);
      if (file.fileList.length == 0) {
        return;
      }
      if (file.fileList.length > 5) {
        message.error(`Chỉ được chọn tối đa 5 hình ảnh`);
        return;
      }
      const isPNG =
        file.file.type === "image/png" ||
        file.file.type === "image/jpg" ||
        file.file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.file.name} không phải file hình ảnh`);
        return;
      }
    },
  };
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    PhieuXemNhaId: phieu,
    nguoiChotId: user.id,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleThem() {
    var form2 = new FormData();
    for (var file of fileList) {
      form2.append("file", file.originFileObj);
    }
    form2.append(
      "data",
      JSON.stringify({
        ...data,
      })
    );
    setIsLoading(true);
    const data3 = await usePhongBan.actions.chotKhach(form2);
    handleLayDuLieu();
    setIsLoading(false);
    setIsModalOpen(false);
  }
  useEffect(() => {
    hanleLayBatDongSan();
  }, []);
  return (
    <>
      {contextHolder}

      <Tooltip title="Chốt khách">
        <Button
          style={{ color: "green", marginLeft: "4px", marginRight: "4px" }}
          shape="circle"
          icon={<AiOutlineFileDone />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={768}
        title={"Chốt khách"}
        open={isModalOpen}
        onOk={() => {
          handleThem();
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        {" "}
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Hình ảnh hợp đồng
        </p>
        <Upload
          listType="picture-card"
          multiple
          customRequest={() => {}}
          {...props}
          maxCount={5}
          fileList={fileList}
        >
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Họ tên người làm chứng
        </p>
        <Input
          placeholder="Họ tên người làm chứng"
          value={data.nguoiLamChung}
          onChange={(e) => {
            setData({
              ...data,
              nguoiLamChung: e.target.value,
            });
          }}
        />
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Số CCCD người làm chứng
        </p>
        <Input
          placeholder="Số CCCD người làm chứng"
          value={data.canCuocNguoiLamChung}
          onChange={(e) => {
            setData({
              ...data,
              canCuocNguoiLamChung: e.target.value,
            });
          }}
        />
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Nơi công chứng
        </p>
        <Input
          placeholder="Nơi công chứng"
          value={data.noiCongChung}
          onChange={(e) => {
            setData({
              ...data,
              noiCongChung: e.target.value,
            });
          }}
        />{" "}
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Giá cuối
        </p>
        <InputNumber
          placeholder="Giá chốt"
          value={data.giaBan}
          min={100000000}
          style={{
            width: "100%",
          }}
          onChange={(e) => {
            setData({
              ...data,
              giaBan: e.target.value,
            });
          }}
        />{" "}
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Bất động sản
        </p>
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
        {hinhAnhBDSchon && (
          <Image
            style={{
              marginTop: "8px",
              height: "200px",
            }}
            src={hinhAnhBDSchon.hinhAnhBatDongSan[0].linkHinhAnh}
          />
        )}
      </Modal>
    </>
  );
}

export default ModalChotKhach;
