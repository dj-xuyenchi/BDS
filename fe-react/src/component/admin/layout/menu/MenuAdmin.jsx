import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../../language/selectLanguage";
import { BsFillBoxSeamFill, BsShopWindow } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import {
  FaBuffer,
  FaUserFriends,
  FaTag,
  FaGraduationCap,
} from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { MdGroupWork, MdArchitecture, MdVideoSettings } from "react-icons/md";
import { TbLayoutDashboard, TbPackages } from "react-icons/tb";
import { useState } from "react";
import { Menu } from "antd";
import { RiRefundFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsPercent } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { PiMicrosoftTeamsLogoFill, PiStudentBold } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { checkRole } from "../../../../extensions/checkRole";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
function MenuAdmin() {
  const items = [
    getItem(
      <Link
        to={"/admin/dashboard"}
        style={{
          textDecoration: "unset",
        }}
      >
        <span
          style={{
            fontSize: "18px",
          }}
        >
          Dashboard
        </span>
      </Link>,
      "1",
      <TbLayoutDashboard />
    ),
    getItem("Quản lý bất động sản", "sub1", <BsFillBoxSeamFill />, [
      getItem(
        <Link
          to={"/admin/sanpham"}
          style={{
            textDecoration: "unset",
          }}
        >
          Bất động sản
        </Link>,
        "22",
        <BsFillBoxSeamFill />
      ),
    ]),
    getItem(
      <Link
        to={"/admin/dangtin"}
        style={{
          textDecoration: "unset",
        }}
      >
        Quản lý đăng tin
      </Link>,
      "9",
      <RiBillLine />
    ),

    getItem(
      <Link
        to={"/admin/phongban"}
        style={{
          textDecoration: "unset",
        }}
      >
        Phòng ban của tôi
      </Link>,
      "69",
      <HiMiniUserGroup />
    ),
    getItem("Đào tạo", "sub1", <PiStudentBold />, [
      getItem(
        <Link
          to={"/admin/daotao"}
          style={{
            textDecoration: "unset",
          }}
        >
          Đào tạo
        </Link>,
        "88",
        <FaGraduationCap />
      ),
      getItem(
        <Link
          to={"/admin/quanlydaotao"}
          style={{
            textDecoration: "unset",
          }}
        >
          Quản lý bài học
        </Link>,
        "32",
        <MdVideoSettings />
      ),
    ]),
  ];
  const user = JSON.parse(localStorage.getItem("user"));
  if (checkRole(user.nguoiDungRole, ["ADMIN"])) {
    items.push(
      getItem(
        <Link
          to={"/admin/nguoidung"}
          style={{
            textDecoration: "unset",
          }}
        >
          Quản lý người dùng
        </Link>,
        "63",
        <FaUserFriends />
      )
    );
    items.push(
      getItem(
        <Link
          to={"/admin/phongbanadmin"}
          style={{
            textDecoration: "unset",
          }}
        >
          Quản lý phòng ban
        </Link>,
        "28",
        <PiMicrosoftTeamsLogoFill />
      )
    );
    items.push(
      getItem(
        <Link
          to={"/admin/dangtinweb"}
          style={{
            textDecoration: "unset",
          }}
        >
          Tin khách đăng
        </Link>,
        "64",
        <RiRefundFill />
      )
    );
      items.push(
        getItem(
          <Link
            to={"/admin/choxetduyet"}
            style={{
              textDecoration: "unset",
            }}
          >
            Tin khách đăng
          </Link>,
          "61",
          <GiConfirmed />
        )
      );
  }
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <div className="menu-container">
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: "100%", height: "100vh" }}
          items={items}
        />
      </div>
    </>
  );
}

export default MenuAdmin;
