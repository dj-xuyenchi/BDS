import "./style.css";
import { Image } from "antd";
import { fixMoney } from "../../../extensions/fixMoney";
import { tinhThoiGianCachHienTai } from "../../../extensions/fixThoiGian";
import { fixDoDai } from "../../../extensions/fixDoDai";
function TinDang({ data }) {
  return (
    <>
      <div
        onClick={(e) => {
          window.location = "http://localhost:3000/bds/" + data.id;
        }}
        className="tinban"
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
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "120px",
              marginTop: "12px",
              width: "auto",
            }}
            src={data && data.batDongSan.hinhAnhBatDongSan[0].linkHinhAnh}
            alt=""
          />
        </div>
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <p
            style={{
              marginLeft: "8px",
              marginBottom: "0px",
            }}
          >
            {data && fixDoDai(data.tieuDe)}
          </p>
          <p
            style={{
              fontSize: "14px",
              marginLeft: "8px",
              color: "#9b9b9b",
              marginBottom: "0px",
            }}
          >
            {data && data.batDongSan.dienTich + "m2 - "}
            {data && data.batDongSan.soPhongNgu + "PN"}
          </p>
          <p
            style={{
              fontSize: "14px",
              marginLeft: "8px",
              color: "red",
              marginBottom: "0px",
            }}
          >
            {data && fixMoney(data.giaBan)}
          </p>
          <div
            style={{
              marginLeft: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src={data && data.nguoiDang.hinhDaiDien}
              alt="s"
              style={{
                height: "16px",
                width: "16px",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                lineHeight: "16px",
                color: "#9b9b9b",
                fontSize: "11px",
                marginLeft: "4px",
              }}
            >
              {" "}
              - {data && tinhThoiGianCachHienTai(data.ngayTao)} .{" "}
              {data && fixDoDai(data.batDongSan.diaChi)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TinDang;
