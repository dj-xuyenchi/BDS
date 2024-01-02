import { Button, Card, Divider, Form, Input, Modal, notification } from "antd";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectLanguage } from "../../language/selectLanguage";
import { useLoginStore } from "./useLoginStore";
import { useForm } from "antd/es/form/Form";
function QuenMatKhau() {
  const language = useSelector(selectLanguage);
  const [typeError, setTypeError] = useState(undefined);
  const [loginPayload, setLoginPayload] = useState({});
  const [matKhau, setMatKhau] = useState("");
  async function handleTaoYeuCau() {
    const data = await useLoginStore.actions.xacNhanDoi({
      matKhauMoi: matKhau,
    });
    if (!data.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Yêu cầu đã hết hạn",
        "bottomRight"
      );
      return;
    }
    openNotification(
      "success",
      "Hệ thống",
      "Đổi mật khẩu thành công!",
      "bottomRight"
    );
  }

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

  return (
    <>
      {contextHolder}
      <div className="login-container">
        <div className="login-banner">
          <div className="login-pannel">
            <img src={require("../../assets/login/login3.png")} alt="" /> :
          </div>
        </div>
        <div className="login-option">
          <div className="login-option-site">
            <div className="login-option-header">
              <img
                src="https://static.chotot.com/storage/APP_WRAPPER/logo/pty-logo-appwrapper.png"
                alt="ss"
              />
              <p>Cập nhật mật khẩu tài khoản</p>
              <label htmlFor="">Mật khẩu mới</label>
              <Input.Password
                onChange={(e) => {
                  setLoginPayload({
                    ...loginPayload,
                    matKhau: e.target.value,
                  });
                }}
                value={loginPayload.matKhau}
                size="large"
                placeholder={language.login.passwordPlaceHolder}
                className="input"
              />
              <label htmlFor="">Xác nhận mật khẩu</label>
              <Input.Password
                onChange={(e) => {
                  setLoginPayload({
                    ...loginPayload,
                    matKhau: e.target.value,
                  });
                }}
                value={loginPayload.matKhau}
                size="large"
                placeholder={language.login.passwordPlaceHolder}
                className="input"
              />
              {typeError ? (
                <Card
                  style={{
                    width: "100%",
                    marginBottom: 12,
                    marginTop: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="wrong">{language.login.wrong}</p>
                  <p className="wait">{language.login.wait}</p>
                </Card>
              ) : (
                ""
              )}

              <Button size="large" onClick={() => {}}>
                Cập nhật
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuenMatKhau;
