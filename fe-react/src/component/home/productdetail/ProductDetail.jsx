import { useSelector } from "react-redux";
import "./style.css";
import Header from "../../common/header/Header";
import ProductImgSlider from "./ProductImgSlider";
import { fixMoney } from "../../../extensions/fixMoney";
import { CiClock2, CiLocationOn, CiRuler } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { useNumberInput } from "@chakra-ui/react";
import { Rate, Row, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSanPhamChiTiet, useTinChiTiet } from "./useSanPhamChiTiet";
import { selectUser } from "../../login/selectUser";
import { selectLanguage } from "../../../language/selectLanguage";
import QuantityField from "./QuantityField";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaPhoneVolume, FaRegClock, FaRestroom } from "react-icons/fa";
import { GoLaw, GoShieldCheck } from "react-icons/go";
import { GiNightSleep, GiResize, GiTempleGate } from "react-icons/gi";
import { IoArrowForwardOutline, IoArrowUpOutline } from "react-icons/io5";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import { tinhThoiGianCachHienTai } from "../../../extensions/fixThoiGian";
import { fixLoaiBDS } from "../../../extensions/fixLoaiBDS";
import Slide from "./Slide";
import { useSanPhamStore } from "../body/product/useSanPhamStore";
import MoiGioi from "../body/MoiGioi";
import Footer from "../../common/footer/Footer";
import TinDang from "../body/TinDang";
function ProductDetail() {
  const language = useSelector(selectLanguage);
  const [api, contextHolder] = notification.useNotification();

  const user = useSelector(selectUser);
  const { id } = useParams();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
    });

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
    handleLayTinKhach()
  }, []);
  return (
    <>
      {contextHolder}
      <Header />
      <div
        style={{
          width: "60%",
          marginLeft: "2%",
          display: "flex",
          marginTop: "24px",
          marginLeft: "20%",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
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
              width: "100%",
              backgroundColor: "#F4F4F4",
              marginTop: "80px",
              padding: "12px",
            }}
          >
            <div>
              <img
                src="https://static.chotot.com/storage/chotot-icons/svg/protected_icon_v2.svg"
                alt="s"
              />
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "4px",
                  fontWeight: 550,
                }}
              >
                {tinBan && tinBan.tieuDe}
              </span>
            </div>
            <div
              style={{
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  color: "red",
                }}
              >
                {tinBan && fixMoney(tinBan.giaBan)}
              </span>{" "}
              - {tinBan && tinBan.batDongSan.dienTich}{" "}
              <span>
                m<sup>2</sup>
              </span>
            </div>
            <div>
              <CiLocationOn />
              <span
                style={{
                  marginLeft: "4px",
                }}
              >
                {tinBan && tinBan.batDongSan.diaChi}
              </span>
            </div>
            <div>
              <CiClock2 />
              <span
                style={{
                  marginLeft: "4px",
                }}
              >
                {tinBan && tinhThoiGianCachHienTai(tinBan.ngayTao)}
              </span>
            </div>
            <div>
              <GoShieldCheck />
              <span
                style={{
                  marginLeft: "4px",
                }}
              >
                Tin đã được kiểm duyệt
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F4F4F4",
              marginTop: "8px",
              padding: "12px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "4px",
                  fontWeight: 550,
                }}
              >
                Đặc điểm BDS
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="info">
                  <GiResize />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Diện tích: {tinBan && tinBan.batDongSan.dienTich}
                    <span>
                      m<sup>2</sup>
                    </span>
                  </span>
                </div>
                <div className="info">
                  <GiNightSleep />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Số phòng ngủ:{" "}
                    {tinBan && tinBan.batDongSan.soPhongNgu + " phòng"}{" "}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="info">
                  <FaRestroom />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Số nhà vệ sinh:{" "}
                    {tinBan && tinBan.batDongSan.soPhongVeSinh + " phòng"}
                  </span>
                </div>
                <div className="info">
                  <GiTempleGate />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Diện tích sử dụng: {tinBan && tinBan.batDongSan.dienTich}
                    <span>
                      m<sup>2</sup>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="info">
                  <GoLaw />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Pháp lý: Giấy tờ chính chủ
                  </span>
                </div>
                <div className="info">
                  <MdOutlineTypeSpecimen />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Loại hình nhà ở:{" "}
                    {tinBan && fixLoaiBDS(tinBan.batDongSan.loaiBatDongSan)}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="info">
                  <IoArrowUpOutline />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Chiều dài: {tinBan && tinBan.batDongSan.chieuDai + "m"}
                  </span>
                </div>
                <div className="info">
                  <IoArrowForwardOutline />
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12p",
                      lineHeight: "20px",
                    }}
                  >
                    Chiều ngang: {tinBan && tinBan.batDongSan.chieuNgang + "m"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F4F4F4",
              marginTop: "8px",
              height: "200px",
              padding: "12px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "4px",
                  fontWeight: 550,
                }}
              >
                Mô tả chi tiết
              </span>
            </div>
            <p
              style={{
                fontSize: "16px",
              }}
            >
              {tinBan && tinBan.moTa}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "40%",
          }}
        >
          <div
            style={{
              backgroundColor: "#F4F4F4",
              width: "95%",
              marginLeft: "2.5%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "70px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                  width: "50px",
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{
                    height: "50px",
                    width: "auto",
                  }}
                  src={tinBan && tinBan.nguoiDang.hinhDaiDien}
                  alt="s"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "50px",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    marginLeft: "12px",
                    marginBottom: "2px",
                  }}
                >
                  {tinBan && tinBan.nguoiDang.hoTenNguoiDung}
                </p>
                <div
                  style={{
                    marginLeft: "16px",
                    color: "#628FE2",
                    fontSize: "14px",
                  }}
                >
                  <BiSolidShoppingBag /> <span>Môi giới</span>
                </div>
              </div>
            </div>
            <hr
              style={{
                margin: "unset",
              }}
            />
            <div
              style={{
                padding: "12px",
              }}
            >
              <div>
                <img
                  style={{
                    height: "30px",
                    width: "auto",
                  }}
                  src="https://cdn2.iconfinder.com/data/icons/Siena/256/protect%20red.png"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontWeight: 550,
                    fontSize: "15px",
                  }}
                >
                  Là đối tác của nhà tốt
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết thông tin BDS chính xác như tin đăng
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết thông tin cá nhân môi giới
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết đảm báo chất lượng tư vấn
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết đảm bảo năng lực tư vấn
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết đảm bảo quyền lợi khách hàng
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết hình ảnh là đúng
                </span>
              </div>
              <div>
                <img
                  style={{
                    height: "18px",
                    width: "auto",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                  src="https://static.chotot.com/storage/icons/svg/check.svg"
                  alt="ss"
                />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                  }}
                >
                  Cam kết đảm báo chất lượng tư vấn
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "12px",
              backgroundColor: "#F4F4F4",
              width: "95%",
              marginLeft: "2.5%",
              padding: "12px",
            }}
          >
            <h4
              style={{
                fontSize: "24px",
              }}
            >
              Liên hệ với người bán
            </h4>
            <div
              className="hover"
              style={{
                backgroundColor: "#589F39",
                borderRadius: "5px",
                fontSize: "20px",
                justifyContent: "center",
                color: "white",
                display: "flex",
                alignItems: "center",
                height: "50px",
                marginTop: "12px",
              }}
              onClick={() => {
                setHienSo(!hienSo);
              }}
            >
              <FaPhoneVolume />{" "}
              <span
                style={{
                  marginLeft: "4px",
                }}
              >
                {hienSo ? tinBan.soDienThoai : "Click để hiện số"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Row
        style={{
          width: "60%",
          marginLeft: "20%",
          padding: "12px",
        }}
      >
        <Row
          style={{
          }}
        >
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
      </Row>
      <Footer />
    </>
  );
}

export default ProductDetail;
