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
  Table,
  Space,
  Image,
} from "antd";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSanPhamStore } from "./useSanPhamStore";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import ModalXoaHinhAnh from "./ModalXoaHinhAnh";
function Media({ bdsId, fetchData }) {
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
  const [data, setData] = useState(undefined);
  async function handleLayData() {
    const data = await useSanPhamStore.actions.layHinhAnh(bdsId);
    setData(data.data);
  }
  useEffect(() => {
    handleLayData();
  }, []);
  // var form = new FormData();
  // form.append("file1", hinhAnh[0]);
  // form.append("file2", hinhAnh[1]);
  // form.append("data", JSON.stringify(sanPham));

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
      const isPNG =
        file.file.type === "image/png" ||
        file.file.type === "image/jpg" ||
        file.file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.file.name} không phải file hình ảnh`);
        return;
      }
      handleThemAnh(file.fileList[0]);
    },
  };
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "linkHinhAnh",
      key: "linkHinhAnh",
      render: (linkHinhAnh) => (
        <Image src={linkHinhAnh} style={{ width: "220px", height: "200px" }} />
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
      render: (ngayTao) => <span>{fixNgayThang(ngayTao)}</span>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ModalXoaHinhAnh
            fetData={handleLayData}
            fet2={fetchData}
            hinhAnhId={record.id}
            bdsId={record.batDongSanId}
          />
        </Space>
      ),
    },
  ];
  async function handleThemAnh(e) {
    var form2 = new FormData();
    form2.append("img", e.originFileObj);
    form2.append("data", JSON.stringify(bdsId));
    const data = await useSanPhamStore.actions.themHinhAnh(form2);
    openNotification(
      "success",
      "Hệ thống",
      "Thêm hình ảnh thành công",
      "bottomRight"
    );
    handleLayData();
    fetchData()
  }
  return (
    <>
      {contextHolder}
      <Button
        style={{
          marginLeft: "4px",
        }}
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Hình Ảnh
      </Button>

      <Modal
        width={800}
        title={"Hình ảnh BDS"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        {" "}
        <Upload
          listType="picture-card"
          multiple
          customRequest={() => {}}
          {...props}
          maxCount={1}
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
        <Table
          style={{
            marginTop: "12px",
          }}
          columns={columns}
          dataSource={data}
        />
      </Modal>
    </>
  );
}

export default Media;
