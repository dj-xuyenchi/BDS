import { Button, notification } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineEditCalendar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
function Header() {
  var nguoiDung = JSON.parse(localStorage.getItem("user"));
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "96px",
          padding: "15px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <img
            style={{
              height: "48px",
              width: "160px",
            }}
            src="https://static.chotot.com/storage/APP_WRAPPER/logo/pty-logo-appwrapper.png"
            alt="hinh"
          />
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Nhà Đất Bán
          </span>
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Nhà đất cho thuê
          </span>
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Dự án
          </span>
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Tin tức
          </span>
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Wiki BĐS
          </span>
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Phân tích đánh giá
          </span>
          <span
            style={{
              marginLeft: "24px",
              padding: "12px 0px 8px",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2C2C2C",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Danh bạ
          </span>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              marginRight: "12px",
              display: "flex",
              alignItems: "center",
              height: "36px",
              fontSize: "30px",
            }}
          >
            <CiHeart />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "36px",
              marginRight: "12px",
              fontWeight: 550,
            }}
          >
            Đăng nhập
          </div>

          <div
            style={{
              marginRight: "12px",
              display: "flex",
              alignItems: "center",
              height: "36px",
              fontWeight: 550,
            }}
          >
            Đăng ký
          </div>
          <div
            style={{
              marginRight: "12px",
              display: "flex",
              alignItems: "center",
              height: "36px",
              fontWeight: 550,
            }}
          >
            <Button
              onClick={() => {
                if (!nguoiDung) {
                  openNotification(
                    "error",
                    "Hệ thống",
                    "Bạn chưa đăng nhập",
                    "bottomRight"
                  );
                  return;
                }
                setIsModalOpen(true);
              }}
              style={{
                color: "black",
              }}
              icon={<MdOutlineEditCalendar />}
            >
              Đăng tin
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
