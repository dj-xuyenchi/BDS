import {
  Button,
  Col,
  Radio,
  Row,
  Upload,
  notification,
  message,
  Image,
  Table,
  Tag,
} from "antd";
import "./style.css";
import { useEffect, useState } from "react";
import { useNguoiDungStore } from "./useNguoiDungStore";
import { useParams } from "react-router-dom";
import ModalView from "../../admin/dangtin/ModalView";
import ModalSua from "../../admin/dangtin/ModalSua";
import ModalXoa from "../../admin/dangtin/ModalXoa";
import { fixMoney } from "../../../extensions/fixMoney";
import { fixTrangThaiTin } from "../../../extensions/fixTrangThaiTin";
import ModalGiaHan from "./ModalGiaHan";
function TinDang() {
  const [data, setData] = useState(undefined);
  const param = useParams();

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
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "batDongSan",
      key: "batDongSan",
      width: "20%",
      render: (batDongSan) => (
        <>
          <Image
            src={batDongSan.hinhAnhBatDongSan[0].linkHinhAnh}
            style={{ width: "100px", height: "80px" }}
          />
        </>
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "tieuDe",
      key: "tieuDe",
      width: "20%",
      render: (tieuDe) => (
        <span>
          {tieuDe.length > 40 ? tieuDe.substring(0, 40) + "..." : tieuDe}
        </span>
      ),
    },
    {
      title: "Giá bán",
      dataIndex: "giaBan",
      key: "giaBan",
      width: "15%",
      sorter: (a, b) => a.giaBan - b.giaBan,
      sortDirections: ["descend", "ascend"],
      render: (giaBan) => <span>{fixMoney(giaBan)}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      width: "20%",
      render: (moTa) => (
        <span>{moTa.length > 40 ? moTa.substring(0, 40) + "..." : moTa}</span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
      width: "10%",
      render: (trangThai) => <span>{fixTrangThaiTin(trangThai)}</span>,
    },
    {
      title: "Thao tác",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "15%",
      render: (id, record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ModalView data={record} />
          {record.trangThai !== 2 ? (
            <ModalGiaHan tinBanId={record.id} fet={fetchData} />
          ) : (
            ""
          )}
          <ModalXoa tinId={id} fetData={fetchData} />
        </div>
      ),
    },
  ];

  const fetchData = async () => {
    const data = await useNguoiDungStore.actions.layBaiDangById(param.id);
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {contextHolder}
      <>
        <h4
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            marginBottom: "4px",
          }}
        >
          Các bài đăng
        </h4>
        <p
          style={{
            marginBottom: "12px",
            fontWeight: 400,
            fontSize: "15px",
            fontStyle: "normal",
          }}
        >
          Bạn có thể gia hạn bài đăng ở đây
        </p>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomRight"],
          }}
        />
      </>
    </>
  );
}

export default TinDang;
