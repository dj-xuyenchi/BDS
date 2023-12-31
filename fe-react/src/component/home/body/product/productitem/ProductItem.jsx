import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../../../language/selectLanguage";
import { PiHeartStraight } from "react-icons/pi";
import { fixMoney } from "../../../../../extensions/fixMoney";
import { Link } from "react-router-dom";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { tinhThoiGianCachHienTai } from "../../../../../extensions/fixThoiGian";
import { fixDoDai } from "../../../../../extensions/fixDoDai";
function ProductItem({ item }) {
  const language = useSelector(selectLanguage);
  return (
    <>
      <div className="product-item-container">
        <div className="product-item-detail">
          <Link to={"/bds/" + item.id}>
            <div className="product-imgs">
              <img
                src={item.batDongSan.hinhAnhBatDongSan[0].linkHinhAnh}
                alt="san pham"
              />
            </div>
          </Link>
          <div
            className="product-detail"
            style={{
              marginTop: "8px",
            }}
          >
            {fixDoDai(item.tieuDe)}
            <div className="product-name-container">
              <span>
                {item.batDongSan.dienTich + "M"}
                <sup>2</sup> - {item.batDongSan.soPhongNgu + "PN"}
              </span>
            </div>
            <div
              className="product-cost"
              style={{
                color: "red",
              }}
            >
              {fixMoney(item.giaBan)}
            </div>
            <div
              className=""
              style={{
                fontSize: "16px",
                color: "#9b9b9b",
              }}
            >
              <LiaBusinessTimeSolid />{" "}
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                {tinhThoiGianCachHienTai(item.ngayTao) +
                  " - " +
                  item.batDongSan.diaChi}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
