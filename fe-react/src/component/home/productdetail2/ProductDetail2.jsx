import "./style.css";
import { Divider, notification } from "antd";
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
    // handleLayData();
    // handleLayMoiGioi();
    // handleLayTinKhach();
  }, []);
  return (
    <>
      {contextHolder}
      <Header />
      <div style={{
        width: "925px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "12px",
        display: "flex",
        flexDirection: "row"
      }}>
        <div style={{
          width: "700px"
        }}>
          <div style={{
            display: "inline-block"
          }}>
            <ProductImgSlider
              imgs={[{
                linkHinhAnh: "https://channel.mediacdn.vn/2020/11/28/photo-1-1606529143640136190400.jpg"
              }]}
            // imgs={
            //   tinBan &&
            //   tinBan.batDongSan.hinhAnhBatDongSan.map((item) => {
            //     return {
            //       linkHinhAnh: item.linkHinhAnh,
            //     };
            //   })
            // }
            />
          </div>
          <div style={{
            marginTop: "12px"
          }}>
            <h1 style={{
              fontSize: "20px",
              lineHeight: "20px",
              letterSpacing: "-0.2px",
              fontFamily: "Lexend Medium, Roboto, Arial",
              fontWeight: 550
            }}>Bán Căn hộ Sunview Town phường Tam Bình TP Thủ Đức giá tổng 1,5 tỷ/căn, giao nhà và Sổ hồng ngay</h1>
            <Divider />
            <div style={{
              display: "flex",
              flexDirection: "row"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "24px"
              }}>
                <span style={{
                  color: "#999",
                  fontSize: "14px",
                  fontWeight: 500
                }}>Mức giá</span>
                <span style={{
                  color: "black",
                  fontWeight: 550,
                  fontSize: "16px"
                }}>{fixMoney(2000000000)}</span>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "24px"
              }}>
                <span style={{
                  color: "#999",
                  fontSize: "14px",
                  fontWeight: 500
                }}>Diện tích</span>
                <span style={{
                  color: "black",
                  fontWeight: 550,
                  fontSize: "16px"
                }}>{"20m"}</span>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "24px"
              }}>
                <span style={{
                  color: "#999",
                  fontSize: "14px",
                  fontWeight: 500
                }}>Phòng ngủ</span>
                <span style={{
                  color: "black",
                  fontWeight: 550,
                  fontSize: "16px"
                }}>{"4PN"}</span>
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <h1 style={{
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "-0.2px",
              fontFamily: "Lexend Medium, Roboto, Arial",
              fontWeight: 550,
              marginBottom: "14px"
            }}>Thông tin mô tả</h1>
            <div style={{
              marginBottom: "12px"
            }}>
              <span style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontFamily: " Roboto Regular, Roboto, Arial "
              }}>
                * ĐT/Zalo mở cửa xem nhà: 0903 864 ***.
                * Địa chỉ: Căn hộ Sunview Town, số 18 đường Gò Dưa, Phường Tam Bình, TP. Thủ Đức.
                ------
                + Căn hộ đã có sổ hồng.
                + 1PN 1WC, Phòng khách, Bếp, Sân giặt phơi riêng.
                + Thành tiền tổng: 1,5 tỷ/căn.
                + Pháp lý: Sổ hồng trao tay.
                + Thời hạn sở hữu: Lâu dài (sổ hồng sở hữu vĩnh viễn - không phải là 50 năm).
                ------
                + Nội thất: Full nội thất.
                ------
                + Phí quản lý: 350.000 vnd/căn/tháng.
                + Điện nước giá đồng hồ trực tiếp nhà nước.
                + Phí giữ xe: 100.000/tháng/xe máy, 900.000/tháng/ô tô.
                ------
                + Hồ bơi, nhiều khu thể thao.
                + Công viên xanh mát.
                + An ninh bảo vệ 24/24.
                ------
                + 5 phút đến trường tiểu học Tam Bình.
                + 5 phút đến siêu thị Coop Mart.
                + 10 phút đến đường Phạm Văn Đồng.
                + 15 phút đến Quận 1, Bình Thạnh.
                ------
                * Dự án triển khai trên khu đất rộng 5.7 héc - ta, gồm:
                + 63 nền nhà phố thấp tầng.
                + 4 block chung cư cao 18 tầng với 1603 căn hộ được thiết kế theo tiêu chuẩn xanh, thoáng, sáng, hiện đại, lấy sáng và gió tối đa.
                Dự án có mật độ xây dựng RẤT THẤP chỉ 22,78%, phần kiến trúc cảnh quan với cây xanh, thảm cỏ, khu thể thao ngoài trời, khu vui chơi ngoài trời và mặt nước chiếm phần lớn diện tích đất đem lại môi trường sống sinh thái, mát rượi lý tưởng.
                ------
                * ĐT/Zalo mở cửa xem nhà: 0903 864 ***.
                * Địa chỉ: Căn hộ Sunview Town, số 18 đường Gò Dưa, Phường Tam Bình, TP. Thủ Đức.
              </span>
            </div>
            <div style={{
              marginTop: "36px"
            }}>
              <h1 style={{
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.2px",
                fontFamily: "Lexend Medium, Roboto, Arial",
                fontWeight: 550,
                marginBottom: "14px"
              }}>Đặc điểm bất động sản</h1>
              <div style={{
                marginBottom: "12px"
              }}>
              </div>
            </div>
          </div>
          <Divider />
          <div style={{
            marginBottom: "8px",
            display: "flex",
            flexDirection: "row"
          }}>
            <div style={{
              width: "50%",
            }}>
              <span style={{
                fontSize: "30px"
              }}>
                <GiResize />
              </span>
              <span style={{
                lineHeight: "20px",
                marginLeft: "6px",
                fontWeight: 500,
                fontSize: "14px"
              }}>Diện tích: 35m</span>
            </div>
            <div style={{
              width: "50%",
            }}>
              <span style={{
                fontSize: "30px"
              }}>
                <PiToilet />
              </span>
              <span style={{
                lineHeight: "20px",
                marginLeft: "6px",
                fontWeight: 500,
                fontSize: "14px"
              }}>Số toilet: 35m</span>
            </div>
          </div>
          <Divider />
          <div style={{
            marginBottom: "8px",
            display: "flex",
            flexDirection: "row"
          }}>
            <div style={{
              width: "50%",
            }}>
              <span style={{
                fontSize: "30px"
              }}>
                <MdOutlineCheckroom />
              </span>
              <span style={{
                lineHeight: "20px",
                marginLeft: "6px",
                fontWeight: 500,
                fontSize: "14px"
              }}>Số phòng ngủ: 35m</span>
            </div>
            <div style={{
              width: "50%",
            }}>
              <span style={{
                fontSize: "30px"
              }}>
                <SlSizeFullscreen />
              </span>
              <span style={{
                lineHeight: "20px",
                marginLeft: "6px",
                fontWeight: 500,
                fontSize: "14px"
              }}>Mặt tiền: 35m</span>
            </div>
          </div>
          <Divider />
          <div style={{
            marginBottom: "8px",
            display: "flex",
            flexDirection: "row"
          }}>
            <div style={{
              width: "50%",
            }}>
              <span style={{
                fontSize: "30px"
              }}>
                <IoMdResize />
              </span>
              <span style={{
                lineHeight: "20px",
                marginLeft: "6px",
                fontWeight: 500,
                fontSize: "14px"
              }}>Chiều ngang: 35m</span>
            </div>
            <div style={{
              width: "50%",
            }}>
              <span style={{
                fontSize: "30px"
              }}>
                <FaWarehouse />
              </span>
              <span style={{
                lineHeight: "20px",
                marginLeft: "6px",
                fontWeight: 500,
                fontSize: "14px"
              }}>Diện tích sử dụng: 35m</span>
            </div>
          </div>
          <Divider />
        </div>
        <div style={{
          width: "210px"
        }}>
          <div style={{
            border: "1px solid #F3F3F3",
            borderRadius: "5px",
            display: 'flex',
            flexDirection: "column"
          }}>
            <div style={{
              marginTop: "12px",
              height: "60px",
              width: "60px",
              overflow: "hidden",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              <img src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-an-anime-girl-in-a-beautiful-pose-with-beautiful-flowers-image_2698613.jpg" alt="" style={{
                height: "60px",
                width: "auto"
              }} />
            </div>
            <p style={{
              fontSize: "12px",
              color: "#999", marginLeft: "auto",
              marginRight: "auto",
              marginTop: "8px",
              marginBottom: 0
            }}>Được đăng bởi</p>
            <p style={{
              fontSize: "14px",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: 500,
              marginTop: "8px"
            }}>{"Trần thu"}</p>
            <div style={{
              backgroundColor: "#009BA0",
              borderRadius: "5px",
              height: "40px",
              width: "90%",
              marginLeft: "5%",
              color: "white",
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center"
            }}>
              Bấm để hiện số
            </div>
            <div style={{
              marginTop: "8px",
              borderRadius: "5px",
              border: "1px solid #999",
              height: "40px",
              width: "90%",
              marginLeft: "5%",
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center",
              marginBottom: "12px"
            }}>
              <img src="https://cdn.brvn.vn/editor_news/2013/03/zalo1-ID1338.jpg" alt="s" style={{
                height: "18px",
                width: "auto",
                marginRight: "4px"
              }} />  Chat qua Zalo
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail2;
