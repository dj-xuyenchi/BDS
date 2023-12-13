import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
  notification,
} from "antd";
import "./style.css";
import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { MdPostAdd } from "react-icons/md";
import { PlusOutlined } from "@ant-design/icons";
import { useBaiHoc } from "../useSanPhamStore";
import TextArea from "antd/es/input/TextArea";
import { FaRegEdit } from "react-icons/fa";
import { fixLoaiBDS } from "../../../../extensions/fixLoaiBDS";
import { fixLoaibaiHoc } from "../../../../extensions/fixLoaiBaiHoc";
function ModalSua({ data2, fetchData }) {
  const [form] = useForm();
  const user = JSON.parse(localStorage.getItem("user"));
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
  const [data, setData] = useState(data2);
  const [fileList, setFileList] = useState([]);
  const [fileList2, setFileList2] = useState([]);
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
    },
  };
  const props2 = {
    beforeUpload: (file) => {
      return false;
    },
    onChange: (file) => {
      setFileList2(file.fileList);
      if (file.fileList.length == 0) {
        return;
      }
    },
  };
  async function handleThemBaiHoc() {
    var form2 = new FormData();
    form2.append("file", fileList[0].originFileObj);
    form2.append("file", fileList2[0].originFileObj);
    form2.append("data", JSON.stringify(data));
    setIsLoading(true);
    const data2 = await useBaiHoc.actions.suaBaiHoc(form2);
    openNotification(
      "success",
      "Hệ thống",
      "Cập nhật bài học thành công",
      "bottomRight"
    );
    fetchData();
    setIsLoading(false);
    setIsModalOpen(false);
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
        title={"Cập nhật bài học"}
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
          <Form.Item label="Bìa bài học">
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
          </Form.Item>
          <Form.Item label="Tài liệu">
            <Upload
              listType="picture-card"
              multiple
              customRequest={() => {}}
              {...props2}
              maxCount={1}
              fileList={fileList2}
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
          </Form.Item>
          <Form.Item
            label="Tên bài học"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.tenBaiHoc}
              onChange={(e) => {
                setData({
                  ...data,
                  tenBaiHoc: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Link bài học"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={data.linkBaiHoc}
              onChange={(e) => {
                setData({
                  ...data,
                  linkBaiHoc: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Dạng bài học"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              labelInValue
              defaultValue={fixLoaibaiHoc(data.loaiBaiHoc)}
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
                  ...data,
                  loaiBaiHoc: e.value,
                });
              }}
            >
              <Select.Option key={1} value={1}>
                Luật
              </Select.Option>
              <Select.Option key={2} value={2}>
                Kỹ năng giao tiếp
              </Select.Option>
              <Select.Option key={3} value={3}>
                Kỹ năng làm việc
              </Select.Option>
              <Select.Option key={4} value={4}>
                Kỹ năng lãnh đạo
              </Select.Option>
              <Select.Option key={5} value={5}>
                Kỹ năng đánh giá BDS
              </Select.Option>
              <Select.Option key={6} value={6}>
                Khác
              </Select.Option>
            </Select>
          </Form.Item>{" "}
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
            <Button
              htmlType="submit"
              loading={isLoading}
              onClick={() => {
                handleThemBaiHoc();
              }}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalSua;
