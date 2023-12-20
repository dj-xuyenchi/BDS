import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import { Card, Drawer } from "antd";
import { useState } from "react";
function MoiGioi({ item, i }) {
  const language = useSelector(selectLanguage);
  const [placement, setPlacement] = useState("right");
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "240px",
          border: "1px solid #F4F4F4",
          borderRadius: "5px",
          marginLeft: "2px",
          marginRight: "2px",
          marginTop: "4px",
        }}
      >
        <div
          style={{
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "200px",
                width: "auto",
              }}
              src={
                i % 5 == 0
                  ? "https://media.vneconomy.vn/w800/images/upload/2022/11/16/56c99f14-2861-4dc2-ae06-3c04c8b22a63.jpg"
                  : i % 2 == 0
                  ? "https://cdn.reatimes.vn/mediav2/media_old/upload/ol4YvtHypO2k1VgfHNXKTQ/files/1-15651645335071869680987.jpg"
                  : "https://nhaodep.vn/wp-content/uploads/2021/03/dia-oc.jpg"
              }
              alt=""
            />
          </div>

          <div
            style={{
              border: "1px solid black",
              height: "48px",
              width: "48px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "absolute",
              bottom: "-20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "48px",
                width: "auto",
              }}
              src={item.hinhDaiDien}
              alt="ss"
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {item.hoTenNguoiDung}
          </p>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Chuyên viên tư vấn BDS {item.phongBan && item.phongBan.tenPhongBan}
          </p>
          <p
            style={{
              textAlign: "center",
            }}
          >
            SĐT: {item.soDienThoai}
          </p>
        </div>
      </div>
    </>
  );
}

export default MoiGioi;
