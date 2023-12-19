import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import Header from "../../common/header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNguoiDungStore } from "./useNguoiDungStore";
import { Menu } from "antd";
import ChiTietNguoiDung from "./ChiTietNguoiDung";
import { BiUser } from "react-icons/bi";
import { MdOutlineLocalShipping, MdSecurity } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import DoiMatKhau from "./DoiMatKhau";
import TinDang from "./TinDang";
import { FaMoneyCheckAlt } from "react-icons/fa";
import NapTien from "./NapTien";

function Checkout() {
  const param = useParams();
  const [current, setCurrent] = useState("profile");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  async function handleXacNhan(id, status) {
    const data = await useNguoiDungStore.actions.xacNhan({
      hoaDonId: id,
      status: status,
    });
  }
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const vnp_TransactionStatus = params.get("vnp_TransactionStatus");
  const vnp_Id = params.get("vnp_OrderInfo");
  if (vnp_TransactionStatus == "00") {
    handleXacNhan(vnp_Id.split(":")[1], 1);
  } else {
    handleXacNhan(vnp_Id.split(":")[1], 2);
  }

  return (
    <>
      <Header />

      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "14px",
          }}
        >
          {vnp_TransactionStatus == "00" ? (
            <h3
              style={{
                color: "green",
                fontSize: "50px",
              }}
            >
              Thanh toán thành công
            </h3>
          ) : (
            <h3
              style={{
                color: "red",
                fontSize: "50px",
              }}
            >
              Thanh toán thất bại
            </h3>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "14px",
          }}
        >
          {/* <div className="btn-transaction">Lịch sử giao dịch</div>
                    <div className="btn-transaction">Tải biên lai</div> */}
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "14px",
          }}
        >
          <h3
            style={{
              color: "red",
              fontSize: "24px",
            }}
          ></h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "14px",
          }}
        ></div>
      </div>
    </>
  );
}

export default Checkout;
