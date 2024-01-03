import { Button, Card, Divider, Form, Input, Modal, notification } from "antd";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectLanguage } from "../../language/selectLanguage";
import { useLoginStore } from "./useLoginStore";
import { useForm } from "antd/es/form/Form";
function Login() {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();

  const [form] = useForm();
  const [typeError, setTypeError] = useState(undefined);
  const [loginPayload, setLoginPayload] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [yeuCauTaiKhoan, setYeuCauTaiKhoan] = useState({});
  async function handleLogin() {
    const login = await useLoginStore.actions.dangNhap(loginPayload);
    if (login.status == 204) {
      openNotification(
        "error",
        "Hệ thống",
        "Tài khoản hoặc mật khẩu không chính xác",
        "bottomRight"
      );
      localStorage.removeItem("user");
      return;
    }
    localStorage.setItem("user", JSON.stringify(login.data));
    window.location.href = process.env.REACT_APP_FRONTEND_URL;
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
  async function handleDangKy() {
    if (yeuCauTaiKhoan.matKhau !== yeuCauTaiKhoan.xacNhanMatKhau) {
      openNotification(
        "error",
        "Hệ thống",
        "Mật khẩu xác nhận không chính xác",
        "bottomRight"
      );
      return;
    }
    form.resetFields();
    setIsShow(false);
    const dangKy = await useLoginStore.actions.dangKy(yeuCauTaiKhoan);
    if (!dangKy.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Email đã tồn tại",
        "bottomRight"
      );
      return;
    }
    openNotification(
      "success",
      "Hệ thống",
      "Đăng ký thành công!",
      "bottomRight"
    );
  }
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
              <p>Nhà là phải tốt nhất</p>
              <label htmlFor="">Tên tài khoản</label>
              <Input
                onChange={(e) => {
                  setLoginPayload({
                    ...loginPayload,
                    taiKhoan: e.target.value,
                  });
                }}
                size="large"
                placeholder={language.login.userNamePlaceHolder}
                className="input"
                value={loginPayload.taiKhoan}
              />
              <label htmlFor="">{language.login.password}</label>
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
              <Link
                onClick={() => {
                  window.location = "http://localhost:3000/taoyeucau";
                }}
              >
                {language.login.forgotPass}
              </Link>
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

              <Button size="large" onClick={handleLogin}>
                {language.login.loginBtn}
              </Button>
              <Divider className="span"> {language.login.or}</Divider>
              <div className="social-oauth">
                <div>
                  <Button
                    onClick={() => {
                      setIsShow(true);
                    }}
                    size="default"
                    style={{
                      width: "120px",
                    }}
                  >
                    Đăng ký nhanh
                  </Button>
                  <Modal
                    width={568}
                    centered
                    title="Đăng ký tài khoản"
                    open={isShow}
                    onCancel={() => {
                      setIsShow(false);
                    }}
                    okButtonProps={{ style: { display: "none" } }}
                    cancelButtonProps={{ style: { display: "none" } }}
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
                      onFinish={handleDangKy}
                    >
                      <Form.Item
                        name="hoTen"
                        label="Họ tên"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Tên người dùng"
                          value={yeuCauTaiKhoan.hoTenNguoiDung}
                          onChange={(e) => {
                            setYeuCauTaiKhoan({
                              ...yeuCauTaiKhoan,
                              hoTenNguoiDung: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Email"
                          value={yeuCauTaiKhoan.tenTaiKhoan}
                          onChange={(e) => {
                            setYeuCauTaiKhoan({
                              ...yeuCauTaiKhoan,
                              tenTaiKhoan: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="matKhau"
                        label="Mật khẩu"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          type="password"
                          value={yeuCauTaiKhoan.matKhau}
                          placeholder="Mật khẩu"
                          onChange={(e) => {
                            setYeuCauTaiKhoan({
                              ...yeuCauTaiKhoan,
                              matKhau: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="xacNhanMatKhau"
                        label="Xác nhận mật khẩu"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Xác nhận mật khẩu"
                          value={yeuCauTaiKhoan.xacNhanMatKhau}
                          onChange={(e) => {
                            setYeuCauTaiKhoan({
                              ...yeuCauTaiKhoan,
                              xacNhanMatKhau: e.target.value,
                            });
                          }}
                          type="password"
                        />
                      </Form.Item>
                      <Form.Item
                        name="soDienThoai"
                        label="Số điện thoại"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Số điện thoại"
                          value={yeuCauTaiKhoan.soDienThoai}
                          onChange={(e) => {
                            setYeuCauTaiKhoan({
                              ...yeuCauTaiKhoan,
                              soDienThoai: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="soCanCuoc"
                        label="Số CMND/CCCD"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Số CMND/CCCD"
                          value={yeuCauTaiKhoan.soCanCuoc}
                          onChange={(e) => {
                            setYeuCauTaiKhoan({
                              ...yeuCauTaiKhoan,
                              soCanCuoc: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                      <Button type="primary" htmlType="submit">
                        Đăng ký
                      </Button>
                    </Form>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
