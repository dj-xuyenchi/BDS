import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../../language/selectLanguage";
import { BsFillBoxSeamFill, BsShopWindow } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { FaBuffer, FaUserFriends, FaTag } from "react-icons/fa";
import { SiZerodha } from "react-icons/si";
import { AiOutlineBgColors } from "react-icons/ai";
import { SiSteelseries } from "react-icons/si";
import { MdGroupWork, MdArchitecture } from "react-icons/md";
import { TbLayoutDashboard, TbPackages } from "react-icons/tb";
import { useState } from "react";
import { Menu } from "antd";
import { RiRefundFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsPercent } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <Link to={"/admin/dashboard"}>Dashboard</Link>,
    "1",
    <TbLayoutDashboard />
  ),
  getItem("Quản lý bất động sản", "sub1", <BsFillBoxSeamFill />, [
    getItem(
      <Link to={"/admin/sanpham"}>Bất động sản</Link>,
      "2",
      <BsFillBoxSeamFill />
    ),
  ]),
  getItem(
    <Link to={"/admin/dangtin"}>Quản lý đăng tin</Link>,
    "9",
    <RiBillLine />
  ),
  getItem(
    <Link to={"/admin/nguoidung"}>Quản lý người dùng</Link>,
    "63",
    <FaUserFriends />
  ),
  getItem(<Link to={"/admin/daotao"}>Đào tạo</Link>, "62", <BsShopWindow />),
  getItem(
    <Link to={"/admin/kygui"}>Yêu cầu ký gửi</Link>,
    "64",
    <RiRefundFill />
  ),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
function MenuAdmin() {
  const language = useSelector(selectLanguage);
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
    console.log(keys);
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
