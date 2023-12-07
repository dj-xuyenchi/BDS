import { useSelector } from "react-redux";
import "./style.css";
import Header from "../../common/header/Header";
import ProductImgSlider from "./ProductImgSlider";
import { fixMoney } from "../../../extensions/fixMoney";
import { CiClock2, CiLocationOn, CiRuler } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { useNumberInput } from "@chakra-ui/react";
import { Rate, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSanPhamChiTiet } from "./useSanPhamChiTiet";
import { selectUser } from "../../login/selectUser";
import { selectLanguage } from "../../../language/selectLanguage";
import QuantityField from "./QuantityField";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaPhoneVolume, FaRegClock, FaRestroom } from "react-icons/fa";
import { GoLaw, GoShieldCheck } from "react-icons/go"; import { GiNightSleep, GiResize, GiTempleGate } from "react-icons/gi";
import { IoArrowForwardOutline, IoArrowUpOutline } from "react-icons/io5";
import { MdOutlineTypeSpecimen } from "react-icons/md";
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

  const [sanPham, setSanPham] = useState({});
  function handleGetOption(sanPhamChiTietList) {
    const mauSac = [];
    const size = [];
    for (var item of sanPhamChiTietList) {
      if (
        !mauSac.some((item2) => {
          return item2.id === item.mauSac.id;
        })
      ) {
        mauSac.push(item.mauSac);
      }
      if (
        !size.some((item2) => {
          return item2.id === item.kichThuoc.id;
        })
      ) {
        size.push(item.kichThuoc);
      }
    }
  }
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
  useEffect(() => {

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
          marginLeft: "20%"
        }}
      >
        <div style={{
          width: "60%",
          display: 'flex',
          flexDirection: "column"
        }}>
          <div
            style={{
              width: "100%",
            }}
          >
            <ProductImgSlider
              imgs={
                [{
                  linkHinhAnh: "https://mogi.vn/news/wp-content/uploads/2018/12/anh-nha-dep-8.jpg"
                }, {
                  linkHinhAnh: "https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-2.jpg"
                }]
              }
            />

          </div>
          <div style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            marginTop: "20px",
            padding: "12px"
          }}>
            <div><img src="https://static.chotot.com/storage/chotot-icons/svg/protected_icon_v2.svg" alt="s" />
              <span style={{
                fontSize: "15px",
                marginLeft: "4px",
                fontWeight: 550
              }}>Cần bán căn nhà siêu đẹp Bùi Xương Trạch 35m2</span>
            </div>
            <div
              style={{
                marginBottom: "10px"
              }}
            ><span style={{
              color: "red"
            }}>{fixMoney(3000000000)}</span> - 70m2</div>
            <div>
              <CiLocationOn />
              Bùi Xương Trạch - Thanh Xuân - Hà Nội
            </div>
            <div>
              <CiClock2 />
              Đăng 4 phút trước
            </div>
            <div>
              <GoShieldCheck />
              Tin đã được kiểm duyệt
            </div>
          </div>
          <div style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            marginTop: "8px",
            padding: "12px"
          }}>
            <div>
              <span style={{
                fontSize: "15px",
                marginLeft: "4px",
                fontWeight: 550
              }}>Đặc điểm BDS</span>
            </div>
            <div style={{
              display: "flex",
              justifyContent: 'center'
            }}>
              <div style={{
                width: "50%",
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="info">
                  <GiResize />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Diện tích: 35m2</span>
                </div>
                <div className="info">
                  <GiNightSleep />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Số phòng ngủ: 5</span>
                </div>
              </div>
              <div style={{
                width: "50%",
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="info">
                  <FaRestroom />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Số nhà vệ sinh: 5</span>
                </div>
                <div className="info">
                  <GiTempleGate />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Diện tích sử dụng: 70m2</span>
                </div>
              </div>
            </div>
            <div style={{
              display: "flex",
              justifyContent: 'center'
            }}>
              <div style={{
                width: "50%",
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="info">
                  <GoLaw />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Pháp lý: Giấy tờ chính chủ</span>
                </div>
                <div className="info">
                  <MdOutlineTypeSpecimen />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Loại hình nhà ở: Nhà phố</span>
                </div>
              </div>
              <div style={{
                width: "50%",
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="info">
                  <IoArrowUpOutline />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Chiều dài: 5m</span>
                </div>
                <div className="info">
                  <IoArrowForwardOutline />
                  <span style={{
                    marginLeft: "4px",
                    fontSize: "12p",
                    lineHeight: "20px"
                  }}>Chiều ngang: 7m</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            width: "100%",
            backgroundColor: "#F4F4F4",
            marginTop: "8px",
            height: "200px",
            padding: "12px"
          }}>
            <div>
              <span style={{
                fontSize: "15px",
                marginLeft: "4px",
                fontWeight: 550
              }}>Mô tả chi tiết</span>
            </div>
            <p style={{
              fontSize: "12px"
            }}>Cần bán căn nhà ở Bùi Xương Trạch</p>
          </div>
        </div>

        <div
          style={{
            width: "40%"
          }}
        >
          <div
            style={{
              backgroundColor: "#F4F4F4",
              width: "95%",
              marginLeft: "2.5%"
            }}>
            <div
              style={{
                display: "flex",
                alignItems: 'center',
                height: "70px",
                padding: "12px"
              }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px',
                width: "50px",
                overflow: "hidden",
                borderRadius: "50%",
              }}>
                <img style={{
                  height: '50px',
                  width: "auto"
                }} src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" alt="s" />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                height: '50px',
                flexDirection: "column"

              }}>
                <p style={{
                  marginLeft: "12px",
                  marginBottom: "2px"
                }}>Tiến Anh</p>
                <div style={{
                  marginLeft: "16px",
                  color: "#628FE2",
                  fontSize: "14px"
                }}>
                  <BiSolidShoppingBag /> <span>Môi giới</span>
                </div>
              </div>
            </div>
            <hr style={{
              margin: "unset"
            }} />
            <div style={{
              padding: "12px"
            }}>
              <div>
                <img style={{
                  height: "30px",
                  width: 'auto'
                }} src="https://cdn2.iconfinder.com/data/icons/Siena/256/protect%20red.png" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontWeight: 550,
                  fontSize: "15px"
                }}>Là đối tác của nhà tốt</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết thông tin BDS chính xác như tin đăng</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết thông tin cá nhân môi giới</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết đảm báo chất lượng tư vấn</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết đảm bảo năng lực tư vấn</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết đảm bảo quyền lợi khách hàng</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết hình ảnh là đúng</span>
              </div>
              <div>
                <img style={{
                  height: "18px",
                  width: 'auto',
                  marginLeft: "6px",
                  marginRight: "6px"
                }} src="https://static.chotot.com/storage/icons/svg/check.svg" alt="ss" />
                <span style={{
                  marginLeft: "4px",
                  fontSize: "14px"
                }}>Cam kết đảm báo chất lượng tư vấn</span>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "12px",
              backgroundColor: "#F4F4F4",
              width: "95%",
              marginLeft: "2.5%",
              padding: "12px"
            }}
          >

            <h4 style={{
              fontSize: "24px"
            }}>Liên hệ với người bán</h4>
            <div style={{
              backgroundColor: "#589F39",
              borderRadius: "5px",
              fontSize: "20px",
              justifyContent: 'center',
              color: "white",
              display: "flex",
              alignItems: 'center',
              height: "50px",
              marginTop: "12px"
            }}><FaPhoneVolume /> <span style={{
              marginLeft: "4px"
            }}>Click để hiện số</span></div>
          </div>
        </div>

      </div>


    </>
  );
}

export default ProductDetail;
