import {
  Button,
  Col,
  Radio,
  Row,
  Upload,
  notification,
  message,
  Image,
} from "antd";
import "./style.css";
import { useEffect, useState } from "react";
import { useNguoiDungStore } from "./useNguoiDungStore";
import { useParams } from "react-router-dom";
import { selectLanguage } from "../../../language/selectLanguage";
import { useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { fixMoney } from "../../../extensions/fixMoney";
function ChiTietNguoiDung({ user }) {
  const language = useSelector(selectLanguage);
  const [nguoiDung, setNguoiDung] = useState(undefined);
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
  useEffect(() => {
    async function getNguoiDung() {
      const data = await useNguoiDungStore.actions.layThongTinNguoiDung(
        param.id ? param.id : -1
      );
      setNguoiDung(data.data);
    }
    getNguoiDung();
  }, []);
  const onChangeGioiTinh = (e) => {
    setNguoiDung({
      ...nguoiDung,
      gioiTinh: e.target.value,
    });
  };
  const onChangeTen = (e) => {
    setNguoiDung({
      ...nguoiDung,
      ten: e.target.value,
    });
  };
  const onChangeHo = (e) => {
    setNguoiDung({
      ...nguoiDung,
      hoTenNguoiDung: e.target.value,
    });
  };
  async function handleCapNhatThongTin() {
    var form2 = new FormData();
    if (fileList[0]) {
      form2.append("file", fileList[0].originFileObj);
    }
    form2.append("data", JSON.stringify({ ...nguoiDung }));
    const data = await useNguoiDungStore.actions.capNhatThongTin(form2);
    setNguoiDung(data.data);
    if (data.data) {
      openNotification(
        "suscess",
        language.systemNotification.system,
        "Cập nhật dự liệu cá nhân thành công",
        "bottomRight"
      );
    } else {
      openNotification(
        "error",
        language.systemNotification.system,
        "Cập nhật dự liệu cá nhân thất bại!",
        "bottomRight"
      );
    }
  }
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
  return (
    <>
      {contextHolder}
      {nguoiDung ? (
        <>
          <h4
            style={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "4px",
            }}
          >
            Thông tin cá nhân
          </h4>
          <p
            style={{
              marginBottom: "12px",
              fontWeight: 400,
              fontSize: "15px",
              fontStyle: "normal",
            }}
          >
            Bạn có thể cập nhật thông tin của mình ở trang này
          </p>
          <Row>
            <Col span={24}>
              <p>
                Ảnh đại diện
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </p>
              <Image
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  marginBottom: "12px",
                }}
                src={nguoiDung.hinhDaiDien}
              />
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
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <p>
                Họ
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </p>
              <input
                onChange={onChangeHo}
                value={nguoiDung.hoTenNguoiDung}
                type="text"
                className="input-profile"
              />
            </Col>
            <Col span={1}></Col>
            <Col span={6}>
              <p>
                Phòng Ban
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </p>
              <input
                disabled
                value={nguoiDung.phongBan?.tenPhongBan}
                type="text"
                className="input-profile"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "12px",
            }}
          >
            <Col span={13}>
              <p>
                Địa chỉ
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
                  setNguoiDung({
                    ...nguoiDung,
                    diaChi: e.target.value,
                  });
                }}
                value={nguoiDung.diaChi}
                type="text"
                className="input-profile"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "12px",
            }}
          >
            <Col span={13}>
              <p>
                SĐT
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
                  setNguoiDung({
                    ...nguoiDung,
                    soDienThoai: e.target.value,
                  });
                }}
                value={nguoiDung.soDienThoai}
                type="text"
                className="input-profile"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "12px",
            }}
          >
            <Col span={13}>
              <p>
                Số căn cước
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
                  setNguoiDung({
                    ...nguoiDung,
                    soCanCuoc: e.target.value,
                  });
                }}
                value={nguoiDung.soCanCuoc}
                type="text"
                className="input-profile"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "12px",
            }}
          >
            <Col span={13}>
              <p>
                Số dư tài khoản
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </p>
              <input
                disabled
                value={nguoiDung.soDu ? fixMoney(nguoiDung.soDu) : "0đ"}
                type="text"
                className="input-profile"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "12px",
            }}
          >
            <Col span={4}>
              <Button onClick={handleCapNhatThongTin} type="primary">
                Cập nhật
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ChiTietNguoiDung;
