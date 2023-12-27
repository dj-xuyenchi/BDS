import { Button, Dropdown, Input, Popover, Row, Space } from "antd";
import Footer from "../../common/footer/Footer";
import Header from "./Header";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import { BsHouses } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import BatDongSan from "./BatDongSan";
import { useSanPhamStore } from "../../home/body/product/useSanPhamStore";
import TinKhachDang from "./TinKhachDang";
import { FaRegClock } from "react-icons/fa6";
import SearchLoaiNhaDat from "./SearchLoaiNhaDat";
import SearchKhuVuc from "./SearchKhuVuc";
import SearchMucGia from "./SearchMucGia";
import SearchDienTich from "./SearchDienTich";
import SearchLocThem from "./SearchLocThem";

function Home2() {
  const [searchParam, setSearchParam] = useState({
    // loaiBatDongSan: [],
    tinhCode: undefined,
    huyenCode: undefined,
    min: undefined,
    max: undefined,
    dienTich: undefined,
    soPhongNgu: undefined,
    soNhaVeSinh: undefined,
    chieuNgang: undefined,
    chieuDai: undefined,
  });
  const [data, setData] = useState(undefined);
  async function handleLayDuLieu() {
    const data = await useSanPhamStore.actions.fetchSanPham(searchParam);
    setData(data.data);
  }
  function handleClearParam() {
    setSearchParam({
      ...{},
    });
  }
  const [tinKhach, setTinKhach] = useState(undefined);
  async function handleLayTinKhach() {
    const data = await useSanPhamStore.actions.layTinKhach();
    setTinKhach(data.data);
  }
  const slideData = [
    require("../../../assets/1.png"),
    require("../../../assets/2.png"),
    require("../../../assets/3.jpg"),
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    handleLayDuLieu();
    handleLayTinKhach();
    const iter = setInterval(() => {
      console.log(slide);
      if (slide === 2) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
    }, 1500);
    return () => {
      clearInterval(iter);
    };
  }, [slide]);
  return (
    <>
      <Header />
      <div
        className="body"
        style={{
          position: "relative",
        }}
      >
        <img
          src={slideData[slide]}
          style={{
            width: "auto",
            top: 0,
            left: 0,
            position: "absolute",
            zIndex: 0,
            height: "512px",
            left: "50%",
            transform: "translate( -50%)",
          }}
          alt="anh"
        />
        <div
          style={{
            position: "absolute",
            marginTop: "24px",
            width: "945px",
            left: "50%",
            transform: "translate( -50%)",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              height: "128px",
              borderRadius: "5px",
              padding: "16px",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                height: "48px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <div
                  style={{
                    height: "48px",
                    width: "171px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    borderRight: "1px solid #F2F2F2",
                  }}
                >
                  <Popover
                    content={
                      <SearchLoaiNhaDat
                        searchParam={searchParam}
                        setSearchParam={setSearchParam}
                      />
                    }
                    title="Loại nhà đất"
                    placement="bottom"
                    trigger="click"
                  >
                    <BsHouses />
                    <span
                      style={{
                        marginLeft: "4px",
                        marginRight: "4px",
                      }}
                    >
                      Loại nhà đất
                    </span>
                    <MdKeyboardArrowDown />
                  </Popover>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Input
                  onChange={(e) => {
                    setSearchParam({
                      ...searchParam,
                      keyword: e.target.value,
                    });
                  }}
                  value={searchParam.keyword}
                  placeholder="Tìm nhanh"
                  style={{
                    border: "none",
                    borderRadius: "0",
                    height: "48px",
                    width: "600px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "146px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <Button
                    onClick={handleLayDuLieu}
                    style={{
                      backgroundColor: "#E03C31",
                      color: "white",
                    }}
                    icon={<GoSearch />}
                  >
                    Tìm kiếm
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "14px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Popover
                content={
                  <SearchKhuVuc
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                  />
                }
                title="Khu vực"
                placement="bottom"
                trigger="click"
              >
                <div
                  style={{
                    marginRight: "6px",
                    borderRadius: "5px",
                    border: "1px solid white",
                    width: "210px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  <span> Trên toàn quốc</span> <MdKeyboardArrowDown />
                </div>
              </Popover>
              <Popover
                content={
                  <SearchMucGia
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                  />
                }
                title="Mức giá"
                placement="bottom"
                trigger="click"
              >
                <div
                  style={{
                    marginRight: "6px",
                    borderRadius: "5px",
                    border: "1px solid white",
                    width: "210px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  <span> Mức giá</span> <MdKeyboardArrowDown />
                </div>
              </Popover>
              <Popover
                content={
                  <SearchDienTich
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                  />
                }
                title="Diện tích"
                placement="bottom"
                trigger="click"
              >
                <div
                  style={{
                    marginRight: "6px",
                    borderRadius: "5px",
                    border: "1px solid white",
                    width: "210px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  <span> Diện tích</span> <MdKeyboardArrowDown />
                </div>
              </Popover>
              <Popover
                content={
                  <SearchLocThem
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                  />
                }
                title="Lọc thêm"
                placement="bottom"
                trigger="click"
              >
                <div
                  style={{
                    marginRight: "6px",
                    borderRadius: "5px",
                    border: "1px solid white",
                    width: "210px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  <span>Lọc thêm</span> <MdKeyboardArrowDown />
                </div>
              </Popover>
              <div
                onClick={handleClearParam}
                style={{
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px",
                  marginLeft: "12px",
                  cursor: "pointer",
                }}
              >
                <TfiReload />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "520px",
            marginTop: "1px",
          }}
        ></div>
        <div className="sanpham" style={{}}>
          <div
            style={{
              width: "1164px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "12px",
            }}
          >
            <h5
              style={{
                marginBottom: "12px",
              }}
            >
              Bất động sản dành cho bạn
            </h5>
            <div
              style={{
                width: "1140px",
                display: "inline-block",
              }}
            >
              {data &&
                data.map((item, index) => {
                  return (
                    <BatDongSan
                      data={item}
                      type={(index + 1) % 4 === 0 ? true : false}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        <div className="tinkhachdang">
          <div
            style={{
              width: "1164px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "12px",
            }}
          >
            <h5
              style={{
                marginBottom: "12px",
              }}
            >
              Tin bán nổi bật
            </h5>
            <div
              style={{
                width: "1140px",
                display: "inline-block",
              }}
            >
              {tinKhach &&
                tinKhach.map((item, index) => {
                  return (
                    <TinKhachDang
                      data={item}
                      type={(index + 1) % 4 === 0 ? true : false}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        <div className="tintuc">
          <div
            style={{
              width: "1164px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "12px",
            }}
          >
            <h5
              style={{
                marginBottom: "12px",
              }}
            >
              Tin bán nổi bật
            </h5>
            <div
              style={{
                width: "1140px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className="item-tintuc active">Tin nổi bật</div>
                <div className="item-tintuc">Tin tức</div>
                <div className="item-tintuc">BDS Hà Nội</div>
                <div className="item-tintuc">BDS TP. Hồ Chí Minh</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "12px",
                }}
              >
                <div className="img-tin">
                  <img
                    src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/11/MG_9605-scaled.jpg"
                    alt="s"
                  />
                  <div>
                    <h4
                      style={{
                        marginTop: "12px",
                        fontFamily: "Lexend Medium,Roboto,Arial !important",
                        fontSize: "24px",
                        lineHeight: "32px",
                        fontWeight: " normal !important",
                        letterSpacing: "-0.2px",
                        marginBottom: "2px",
                      }}
                    >
                      {" "}
                      Tâm điểm BDS khu vực miền trung nhiều biến động trước dịp
                      tết nguyên đán 2024
                    </h4>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#999",
                      }}
                    >
                      <FaRegClock />
                      <span
                        style={{
                          marginLeft: "4px",
                        }}
                      >
                        5 ngày trước
                      </span>
                    </span>
                  </div>
                </div>
                <div className="tintuc-container">
                  <div className="tintuc-title">
                    <span>
                      Cuối năm 2023 có phải thời điểm phù hợp để mua nhà?
                    </span>
                  </div>
                  <div className="tintuc-title">
                    <span>
                      Hành Trình Tìm Mua Nhà “Cười Ra Nước Mắt” Của Gia Đình
                      Giun Dế Family
                    </span>
                  </div>
                  <div className="tintuc-title">
                    <span>Tiêu chí mua nhà trong năm 2023</span>
                  </div>
                  <div className="tintuc-title">
                    <span>Dự án ECO Pank Hà Nội.</span>
                  </div>
                  <div className="tintuc-title">
                    <span>Chọn tuổi mua nhà 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row
          style={{
            width: "1140px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              padding: "8px",
              width: "100%",
            }}
          >
            <h4
              style={{
                color: "#fff",
                display: "block",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Trở thành đối tác Nhà Tốt{" "}
              <img
                src="https://static.chotot.com/storage/default_images/pty/shield.svg"
                alt="ss"
              />
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              height: "80px",
            }}
          >
            <div
              style={{
                width: "33.33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "60px",
                  width: "auto",
                }}
                src="https://cdn.chotot.com/admincentre/cyv7mNjb62sbJme5uSc3WQz0OiNl7RvYiqKw1tf2ZIM/preset:raw/plain/e34f3443057f6cc5b640d117d73a4429-2808379119443443986.jpg"
                alt="s"
              />
              <span
                style={{
                  marginLeft: "8px",
                  color: "#ff833f",
                  fontWeight: 700,
                }}
              >
                Chứng nhận đối tác
              </span>
            </div>
            <div
              style={{
                width: "33.33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "60px",
                  width: "auto",
                }}
                src="https://cdn.chotot.com/admincentre/jpZqe68svUuCc0trsTLg9oUuDPqUc78tSMAkukSd7Ns/preset:raw/plain/1d6d2218e5c9703dad0fd94101a805d6-2808379189790155893.jpg"
                alt="s"
              />
              <span
                style={{
                  marginLeft: "8px",
                  color: "#ff833f",
                  fontWeight: 700,
                }}
              >
                Đăng tin tiếp cận
              </span>
            </div>
            <div
              style={{
                width: "33.33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "60px",
                  width: "auto",
                }}
                src="https://cdn.chotot.com/admincentre/nIzlhaBBTRc1kI2ORAXWq09FAbD6Wq9DQPM1sSTSjPU/preset:raw/plain/bde99245622feb8caa90ba49c2ff9d81-2808379230799729806.jpg"
                alt="s"
              />
              <span
                style={{
                  marginLeft: "8px",
                  color: "#ff833f",
                  fontWeight: 700,
                }}
              >
                Tài khoản doanh nghiệp
              </span>
            </div>
          </div>
        </Row>

        <div className="tintuc">
          <div
            style={{
              width: "1164px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "12px",
            }}
          >
            <h5
              style={{
                marginBottom: "12px",
              }}
            >
              Tin tức bất động sản
            </h5>
            <div
              style={{
                width: "1140px",
                display: "inline-flex",
                flexDirection: "row",
              }}
            >
              <div className="tintuc-noibat">
                <img
                  src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/12/2-1.jpg"
                  alt="s"
                  style={{
                    borderRadius: "5px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirectio: "row",
                    marginTop: "12px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    01
                  </h4>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginLeft: "4px",
                    }}
                  >
                    Bất động sản tại vị trí hiếm: Kênh đầu tứ sáng cho nhà đầu
                    tư?
                  </h4>
                </div>
              </div>
              <div className="tintuc-noibat">
                <img
                  src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/12/tay-bac.jpg"
                  alt="s"
                  style={{
                    borderRadius: "5px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirectio: "row",
                    marginTop: "12px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    02
                  </h4>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginLeft: "4px",
                    }}
                  >
                    Bất động sản Tây Bắc dạy sóng đợt cuối năm 2023
                  </h4>
                </div>
              </div>
              <div className="tintuc-noibat">
                <img
                  src="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/12/tinh-nao-nhieu-khu-cong-nghiep-nhat-viet-nam-2-1.jpg"
                  alt="s"
                  style={{
                    borderRadius: "5px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirectio: "row",
                    marginTop: "12px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    03
                  </h4>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginLeft: "4px",
                    }}
                  >
                    Các doanh nghiệp nói gì về việc thủ tướng Chính Phủ bác bỏ
                    việc giảm thuế đất khu vực III
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tintuc">
          <div
            style={{
              width: "1164px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "12px",
            }}
          >
            <h5
              style={{
                marginBottom: "12px",
              }}
            >
              Hỗ trợ tiện ích
            </h5>
            <div
              style={{
                width: "1140px",
                display: "inline-flex",
                flexDirection: "row",
              }}
            >
              <div className="congcu">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-ying-yang.svg"
                  alt="d"
                />
                <span>Xem tuổi xây nhà</span>
              </div>
              <div className="congcu">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-house.svg"
                  alt="d"
                />
                <span>Chi phí làm nhà</span>
              </div>
              <div className="congcu">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/home/calculator.svg"
                  alt="d"
                />
                <span>Tính lãi suất</span>
              </div>
              <div className="congcu">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-feng-shui.svg"
                  alt="d"
                />
                <span>Tư vấn phong thủy</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tintuc"
          style={{
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "1164px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "12px",
            }}
          >
            <div
              style={{
                width: "1140px",
                display: "inline-flex",
                flexDirection: "row",
              }}
            >
              <div className="congcu2">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"
                  alt="d"
                />
                <span
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 550,
                  }}
                >
                  Bất động sản bán
                </span>
                <span
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn
                  thông qua lượng tin{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    rao lớn
                  </span>
                  , uy tín về các loại hình
                </span>
              </div>
              <div className="congcu2">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg"
                  alt="d"
                />
                <span
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 550,
                  }}
                >
                  Bất động sản cho thuê
                </span>
                <span
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Cập nhật thường xuyên và đầy đủ các loại hình
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {" "}
                    như: thuê phòng trọ, nhà riêng,
                  </span>
                  , kinh doanh giúp bạn nhanh chóng tìm được bất động sản ưng ý.
                </span>
              </div>
              <div className="congcu2">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg"
                  alt="d"
                />
                <span
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 550,
                  }}
                >
                  Đánh giá dự án
                </span>
                <span
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn
                  thông qua lượng tin{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    rao lớn
                  </span>
                  , uy tín về các loại hình
                </span>
              </div>
              <div className="congcu2">
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg"
                  alt="d"
                />
                <span
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 550,
                  }}
                >
                  Wiki BDS
                </span>
                <span
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn
                  thông qua lượng tin{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    rao lớn
                  </span>
                  , uy tín về các loại hình
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home2;
