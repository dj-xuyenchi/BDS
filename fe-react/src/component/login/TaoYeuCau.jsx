import { Button, Card, Divider, Form, Input, Modal, notification } from "antd";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectLanguage } from "../../language/selectLanguage";
import { useLoginStore } from "./useLoginStore";
import { useForm } from "antd/es/form/Form";
function TaoYeuCau() {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();

  const [typeError, setTypeError] = useState(undefined);
  const [email, setEmail] = useState("");
  async function handleTaoYeuCau() {
    const data = await useLoginStore.actions.taoYeuCau(email);
    if (!data.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Tài khoản không tồn tại",
        "bottomRight"
      );
      return;
    }
    openNotification(
      "success",
      "Hệ thống",
      "Vui lòng kiểm tra email để nhận hướng dẫn đổi lại mật khẩu",
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
              <p>Bạn không còn nhớ mật khẩu tài khoản? Đừng lo.</p>
              <label htmlFor="">Email đăng ký</label>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                size="large"
                placeholder="Email đăng ký tài khoản"
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

              <Button size="large" onClick={handleTaoYeuCau}>
                Gửi yêu cầu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaoYeuCau;
