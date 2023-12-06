import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import { Col, Drawer, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrSystem } from "react-icons/gr";
import { MdConnectWithoutContact, MdOutlinePolicy } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
function MenuLeft({ open, setOpen }) {
  const language = useSelector(selectLanguage);
  const [placement, setPlacement] = useState("left");
  var nguoiDung = JSON.parse(localStorage.getItem("user"));
  function handleCloseMenu() {
    setOpen(false);
  }
  return (
    <>
      <Drawer
        title="Lỗi tắt"
        placement={placement}
        closable={false}
        onClose={handleCloseMenu}
        open={open}
        key={placement}
      >
        <Row>
          {nguoiDung && (
            <Col span={24}>
              <div
                className="item-nav"
                onClick={() => {
                  window.location = "http://localhost:3000/admin/dashboard";
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginBottom: 0,
                    marginLeft: "4px",
                  }}
                >
                  <GrSystem />
                  <span
                    style={{
                      marginLeft: "8px",
                    }}
                  >
                    Quản trị hệ thống
                  </span>
                </p>
              </div>
            </Col>
          )}
          {nguoiDung && (
            <Col span={24}>
              <div
                className="item-nav"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location = "http://localhost:3000/login";
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginBottom: 0,
                    marginLeft: "4px",
                  }}
                >
                  <IoIosLogOut />
                  <span
                    style={{
                      marginLeft: "8px",
                    }}
                  >
                    Đăng xuất
                  </span>
                </p>
              </div>
            </Col>
          )}
          <Col span={24}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginBottom: 0,
                  marginLeft: "4px",
                }}
              >
                <MdConnectWithoutContact />
                <span
                  style={{
                    marginLeft: "8px",
                  }}
                >
                  Liên hệ
                </span>
              </p>
            </Link>
          </Col>
          <Col span={24}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginBottom: 0,
                  marginLeft: "4px",
                }}
              >
                <MdOutlinePolicy />
                <span
                  style={{
                    marginLeft: "8px",
                  }}
                >
                  Chính sách
                </span>
              </p>
            </Link>
          </Col>
        </Row>
      </Drawer>
    </>
  );
}

export default MenuLeft;
