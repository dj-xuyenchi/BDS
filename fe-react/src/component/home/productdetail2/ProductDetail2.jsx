import "./style.css";
import { Divider, Row, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTinChiTiet } from "./useSanPhamChiTiet";
import { useSanPhamStore } from "../body/product/useSanPhamStore";
import Footer from "../../common/footer/Footer";
import Header from "../../admin/home2/Header";
import ProductImgSlider from "../productdetail/ProductImgSlider";
import { fixMoney } from "../../../extensions/fixMoney";
import { GiResize } from "react-icons/gi";
import { PiToilet } from "react-icons/pi";
import { MdOutlineCheckroom } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMdResize } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import MoiGioi from "../body/MoiGioi";
import TinDang from "../body/TinDang";
function ProductDetail2() {
  const [api, contextHolder] = notification.useNotification();
  const { id } = useParams();
  const [tinBan, setTinBan] = useState(undefined);
  const [hienSo, setHienSo] = useState(false);
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

  const [tinKhach, setTinKhach] = useState(undefined);
  async function handleLayTinKhach() {
    const data = await useSanPhamStore.actions.layTinKhach();
    setTinKhach(data.data);
  }
  const [moiGioi, setMoiGioi] = useState(undefined);
  async function handleLayMoiGioi() {
    const data = await useSanPhamStore.actions.layNguoiDung();
    setMoiGioi(data.data);
  }
  async function handleLayData() {
    const data = await useTinChiTiet.actions.layTinById(id);
    setTinBan(data.data);
  }
  useEffect(() => {
    handleLayData();
    handleLayMoiGioi();
    handleLayTinKhach();
  }, []);
  return (
    <>
      {contextHolder}
      <Header />
      <div
        style={{
          width: "925px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "12px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "700px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "100%",
            }}
          >
            <ProductImgSlider
              imgs={
                tinBan &&
                tinBan.batDongSan.hinhAnhBatDongSan.map((item) => {
                  return {
                    linkHinhAnh: item.linkHinhAnh,
                  };
                })
              }
            />
          </div>
          <div
            style={{
              marginTop: "12px",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                lineHeight: "20px",
                letterSpacing: "-0.2px",
                fontFamily: "Lexend Medium, Roboto, Arial",
                fontWeight: 550,
              }}
            >
              {tinBan && tinBan.tieuDe}
            </h1>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "24px",
                }}
              >
                <span
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Mức giá
                </span>
                <span
                  style={{
                    color: "black",
                    fontWeight: 550,
                    fontSize: "16px",
                  }}
                >
                  {tinBan && fixMoney(tinBan.giaBan)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "24px",
                }}
              >
                <span
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Diện tích
                </span>
                <span
                  style={{
                    color: "black",
                    fontWeight: 550,
                    fontSize: "16px",
                  }}
                >
                  {tinBan && tinBan.batDongSan.dienTich}M<sup>2</sup>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "24px",
                }}
              >
                <span
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Phòng ngủ
                </span>
                <span
                  style={{
                    color: "black",
                    fontWeight: 550,
                    fontSize: "16px",
                  }}
                >
                  {tinBan && tinBan.batDongSan.soPhongNgu} PN
                </span>
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <h1
              style={{
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.2px",
                fontFamily: "Lexend Medium, Roboto, Arial",
                fontWeight: 550,
                marginBottom: "14px",
              }}
            >
              Thông tin mô tả
            </h1>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontFamily: " Roboto Regular, Roboto, Arial ",
                }}
              >
                {tinBan && tinBan.moTa}
              </span>
            </div>
            <div
              style={{
                marginTop: "36px",
              }}
            >
              <h1
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.2px",
                  fontFamily: "Lexend Medium, Roboto, Arial",
                  fontWeight: 550,
                  marginBottom: "14px",
                }}
              >
                Đặc điểm bất động sản
              </h1>
              <div
                style={{
                  marginBottom: "12px",
                }}
              ></div>
            </div>
          </div>
          <Divider />
          <div
            style={{
              marginBottom: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                <GiResize />
              </span>
              <span
                style={{
                  lineHeight: "20px",
                  marginLeft: "6px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Diện tích: {tinBan && tinBan.batDongSan.dienTich}M<sup>2</sup>
              </span>
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                <PiToilet />
              </span>
              <span
                style={{
                  lineHeight: "20px",
                  marginLeft: "6px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Số toilet: {tinBan && tinBan.batDongSan.soPhongVeSinh}
              </span>
            </div>
          </div>
          <Divider />
          <div
            style={{
              marginBottom: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                <MdOutlineCheckroom />
              </span>
              <span
                style={{
                  lineHeight: "20px",
                  marginLeft: "6px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Số phòng ngủ: {tinBan && tinBan.batDongSan.soPhongNgu}
              </span>
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                <SlSizeFullscreen />
              </span>
              <span
                style={{
                  lineHeight: "20px",
                  marginLeft: "6px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Mặt tiền: {tinBan && tinBan.batDongSan.chieuNgang}m
              </span>
            </div>
          </div>
          <Divider />
          <div
            style={{
              marginBottom: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                <IoMdResize />
              </span>
              <span
                style={{
                  lineHeight: "20px",
                  marginLeft: "6px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Chiều dài: {tinBan && tinBan.batDongSan.chieuDai}m
              </span>
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                <FaWarehouse />
              </span>
              <span
                style={{
                  lineHeight: "20px",
                  marginLeft: "6px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Diện tích sử dụng: {tinBan && tinBan.batDongSan.dienTichSuDung}{" "}
                m<sup>2</sup>
              </span>
            </div>
          </div>
          <Divider />
        </div>
        <div
          style={{
            width: "210px",
          }}
        >
          <div
            style={{
              border: "1px solid #F3F3F3",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                marginTop: "12px",
                height: "60px",
                width: "60px",
                overflow: "hidden",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <img
                src={tinBan && tinBan.nguoiDang.hinhDaiDien}
                alt=""
                style={{
                  height: "60px",
                  width: "auto",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#999",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "8px",
                marginBottom: 0,
              }}
            >
              Được đăng bởi
            </p>
            <p
              style={{
                fontSize: "14px",
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: 500,
                marginTop: "8px",
              }}
            >
              {tinBan && tinBan.nguoiDang.hoTenNguoiDung}
            </p>
            <div
              onClick={() => {
                setHienSo(!hienSo);
              }}
              style={{
                backgroundColor: "#009BA0",
                borderRadius: "5px",
                height: "40px",
                width: "90%",
                marginLeft: "5%",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {!hienSo ? "Bấm để hiện số" : tinBan && tinBan.soDienThoai}
            </div>
            <a
              href={tinBan ? "https://zalo.me/" + tinBan.soDienThoai : "#"}
              target="_blank"
              style={{
                marginTop: "8px",
                borderRadius: "5px",
                border: "1px solid #999",
                height: "40px",
                width: "90%",
                marginLeft: "5%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "12px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://cdn.brvn.vn/editor_news/2013/03/zalo1-ID1338.jpg"
                alt="s"
                style={{
                  height: "18px",
                  width: "auto",
                  marginRight: "4px",
                }}
              />{" "}
              Chat qua Zalo
            </a>
          </div>
        </div>
      </div>
      <Row
        style={{
          width: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "12px",
        }}
      >
        <Row style={{}}>
          <Row
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
          >
            <h5>Tin đăng gần đây</h5>
          </Row>
          <Row
            style={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {tinKhach &&
              tinKhach.map((item) => {
                return <TinDang data={item} />;
              })}
          </Row>
        </Row>
        <Row
          style={{
            width: "100%",
            marginBottom: "12px",
            marginTop: "24px",
          }}
        >
          <h5>Chuyên gia môi giới BDS</h5>
        </Row>
        <Row
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {moiGioi &&
            moiGioi.map((item) => {
              return <MoiGioi item={item} />;
            })}
        </Row>
        {tinBan && (
          <div
            style={{
              marginTop: "12px",
            }}
          >
            <iframe
              src={tinBan.batDongSan.diaChiGoogleMap}
              style={{
                border: 0,
                width: 1140,
                height: 450,
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </Row>
      <Footer />
    </>
  );
}

export default ProductDetail2;
