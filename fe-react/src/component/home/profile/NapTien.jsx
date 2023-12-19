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
function NapTien() {
  const [data, setData] = useState(0);
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
  function laSoNguyen(str) {
    // Kiểm tra xem chuỗi có chứa chỉ số nguyên hay không
    return /^\d+$/.test(str);
  }
  async function handleNapTien() {
    const data2 = await useNguoiDungStore.actions.napTien({
      nguoiDungId: param.id,
      soTien: data,
    });
    window.location = data2.data;
  }
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
          Nạp tiền vào Nhà Tốt
        </h4>
        <p
          style={{
            marginBottom: "12px",
            fontWeight: 400,
            fontSize: "15px",
            fontStyle: "normal",
          }}
        >
          Bạn có thể nạp tiền để sử dụng gia hạn bài đăng
        </p>
        <Row>
          <Col span={13}>
            <p>
              Số tiền cần nạp (Tỷ lệ quy đổi 1 = 1)
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </p>
            <input
              onChange={(e) => {
                setData(e.target.value);
              }}
              value={data}
              min={1}
              type="number"
              className="input-profile"
            />
          </Col>
        </Row>{" "}
        <Row
          style={{
            marginTop: "12px",
          }}
        >
          <Col span={4}>
            <Button
              onClick={() => {
                if (data <= 0 || !laSoNguyen(data)) {
                  openNotification(
                    "error",
                    "Hệ thống",
                    "Số tiền nạp tối thiểu 100.000đ và là số nguyên",
                    "bottomRight"
                  );
                  return;
                }
                handleNapTien();
              }}
              type="primary"
            >
              Thanh toán
            </Button>
          </Col>
        </Row>
      </>
    </>
  );
}

export default NapTien;
