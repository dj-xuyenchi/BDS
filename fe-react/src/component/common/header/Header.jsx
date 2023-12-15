import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import GioHang from "../../home/giohang/GioHang";
import { useState } from "react";
import MenuLeft from "../menuleft/MenuLeft";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import Search from "../search/Search";
import YeuThich from "../../home/yeuthich/YeuThich";
import { Breadcrumb, Button, notification } from "antd";
import { Link } from "react-router-dom";
import { selectUser } from "../../login/selectUser";
import { MdOutlineEditCalendar } from "react-icons/md";
function Header() {
  const language = useSelector(selectLanguage);
  const user = useSelector(selectUser);
  const [openGioHang, setOpenGioHang] = useState(false);
  const [openYeuThich, setOpenYeuThich] = useState(false);
  const [openMenuLeft, setOpenMenuLeft] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

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
  function handleRedirect() {
    if (user.nguoiDung.id == -1) {
      openNotification(
        "error",
        language.systemNotification.system,
        "Bạn chưa đăng nhập",
        "bottomRight"
      );
      setTimeout(() => {
        window.location.href = process.env.REACT_APP_FRONTEND_URL + "login";
      }, 1000);
      return;
    }
    window.location.href =
      process.env.REACT_APP_FRONTEND_URL + "profile/" + user.nguoiDung.id;
  }
  return (
    <>
      {contextHolder}
      <GioHang open={openGioHang} setOpen={setOpenGioHang} />
      <YeuThich open={openYeuThich} setOpen={setOpenYeuThich} />
      <MenuLeft open={openMenuLeft} setOpen={setOpenMenuLeft} />
      <Search open={openSearch} setOpen={setOpenSearch} />
      <div className="header-container">
        <div
          className="gif-img"
          style={{
            backgroundColor: "#F4F4F4",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4891/4891646.png"
            alt=""
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <span>
            Nhà Tốt chỉ cung cấp dịch vụ & chương trình trên các trang chính
            thức. Hãy cảnh giác với các hình thức liên hệ dưới tên Nhà Tốt!
          </span>
        </div>
        <div className="menu">
          <div className="left-menu">
            <div
              onClick={() => {
                setOpenMenuLeft(true);
              }}
            >
              <HiMenuAlt2 />
            </div>
          </div>
          <div className="mid-menu">
            <Link to="/">
              <img
                src="https://static.chotot.com/storage/APP_WRAPPER/logo/pty-logo-appwrapper.png"
                alt="logo"
              />
            </Link>
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Trang chủ</a>,
                },
              ]}
            />
          </div>
          <div className="right-menu">
            <div
              className="input-search"
              onClick={() => {
                setOpenSearch(true);
              }}
            >
              <FiSearch />
              <span>{language.header.search.inputHolder}</span>
            </div>
            <div className="icon-right">

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => {
                  setOpenYeuThich(true);
                }}
              >
                <FiHeart />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => {
                  var nguoiDung = JSON.parse(localStorage.getItem("user"));
                  if (nguoiDung) {
                    handleRedirect();
                    return;
                  } else {
                    window.location = "http://localhost:3000/login";
                  }
                }}
              >
                <FaRegUser />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Button style={{
                  backgroundColor: "#FA6819",
                  color: "white"
                }} icon={<MdOutlineEditCalendar />}>
                  Ký gửi nhà đất
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
