import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import Fillter from "./filter/Filter";
import Product from "./product/Product";
import userSlice from "../../login/userSlice";
import { useFilterStore } from "./filter/useFilter";
import productSlice from "./product/productSlice";
import { useState } from "react";
import { Carousel, Pagination, Row } from "antd";
import { selectProduct } from "./product/selectProduct";
import { useSanPhamStore } from "./product/useSanPhamStore";
import { useEffect } from "react";
import MoiGioi from "./MoiGioi";
import TinDang from "./TinDang";
function Body() {
  const language = useSelector(selectLanguage);
  const product = useSelector(selectProduct);
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };
  const disPath = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [tinhHuyen, setTinhHuyen] = useState(undefined);
  async function handleFilter(payload) {
    disPath(productSlice.actions.setIsLoading(true));
    const data = await useFilterStore.actions.filter({
      page: payload.page,
      pageSize: payload.pageSize,
      filter: payload.filter,
    });
    disPath(productSlice.actions.setSanPham(data));
    disPath(productSlice.actions.setIsLoading(false));
  }
  const [data, setData] = useState(undefined);
  async function handleLayDuLieu(payload) {
    const data = await useSanPhamStore.actions.fetchSanPham(
      payload ? payload : {}
    );
    setData(data.data);
  }

  useEffect(() => {
    handleLayDuLieu(null);
  }, []);

  return (
    <>
      <div className="header-banner">
        <Carousel autoplay>
          <div className="caro">
            <img
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FUcvcfUTYee0oRvekvI9K8zaCMCuJU3JE1G96GzRY2JU%2Fpreset%3Araw%2Fplain%2Fa9ad0f1e7102ae6b4e9ddc12cb6a9620-2828674230988306341.jpg&w=3840&q=90"
              alt="hinhanh"
            />
          </div>
          <div className="caro">
            <img
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FUcvcfUTYee0oRvekvI9K8zaCMCuJU3JE1G96GzRY2JU%2Fpreset%3Araw%2Fplain%2Fa9ad0f1e7102ae6b4e9ddc12cb6a9620-2828674230988306341.jpg&w=3840&q=90"
              alt="hinhanh"
            />
          </div>
          <div className="caro">
            <img
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FUcvcfUTYee0oRvekvI9K8zaCMCuJU3JE1G96GzRY2JU%2Fpreset%3Araw%2Fplain%2Fa9ad0f1e7102ae6b4e9ddc12cb6a9620-2828674230988306341.jpg&w=3840&q=90"
              alt="hinhanh"
            />
          </div>
          <div className="caro">
            <img
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FUcvcfUTYee0oRvekvI9K8zaCMCuJU3JE1G96GzRY2JU%2Fpreset%3Araw%2Fplain%2Fa9ad0f1e7102ae6b4e9ddc12cb6a9620-2828674230988306341.jpg&w=3840&q=90"
              alt="hinhanh"
            />
          </div>
        </Carousel>
      </div>
      <div className="header-title">
        <h3>{language.header.title}</h3>
      </div>
      <div className="body-home-container">
        <Fillter
          handleLayDuLieu={handleLayDuLieu}
          page={current}
          pageSize={20}
          tinhHuyen={tinhHuyen}
        />
        <Product
          data={data}
          tinhHuyen={tinhHuyen}
          setTinhHuyen={setTinhHuyen}
        />
      </div>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          current={current}
          onChange={onChange}
          pageSize={20}
          total={product.pageTotal}
        />
      </Row>
      <Row
        style={{
          width: "60%",
          marginLeft: "20%",
          padding: "12px",
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
        <Row style={{
          width: "100%",
          overflow: "hidden",
          display: 'flex',
          flexDirection: "row"
        }}>
          <TinDang />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
        </Row>
      </Row>
      <Row
        style={{
          width: "60%",
          marginLeft: "20%",
          padding: "12px",
        }}
      >
        <Row
          style={{
            width: "100%",
            marginBottom: "12px",
          }}
        >
          <h5>Chuyên gia môi giới BDS</h5>
        </Row>
        <Row style={{
          width: "100%",
          overflow: "hidden",
          display: 'flex',
          flexDirection: "row"
        }}>
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
          <MoiGioi />
        </Row>
      </Row>

      <Row
        style={{
          width: "60%",
          marginLeft: "20%",
          padding: "12px",
        }}
      >
        <div>
          <img
            src="https://cdn.chotot.com/admincentre/-qh1VBGLyzy32EqV2OrQiAHtFlVHJpmBKREXUSklPmA/preset:raw/plain/e3bc34302544e429bdbd6372b3ebd42b-2811454364981615492.jpg"
            alt="s"
          />
        </div>
      </Row>
      <Row
        style={{
          width: "60%",
          marginLeft: "20%",
          padding: "12px",
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
      <Row
        style={{
          width: "60%",
          marginLeft: "20%",
        }}
      >
        <div
          style={{
            padding: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#F4F4F4",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: "33.33%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                marginBottom: "8px",
              }}
            >
              Bất động sản phổ biến
            </h5>
            <p>Mua bán BDS TP.Hà Nội</p>
            <p>Mua bán BDS TP.Hồ Chí Minh</p>
            <p>Mua bán BDS TP.Cần Thơ</p>
            <p>Mua bán BDS TP.Hải Phòng</p>
          </div>
          <div
            style={{
              width: "33.33%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                marginBottom: "8px",
              }}
            >
              Nhanh chóng trên Nhà Tốt
            </h5>
            <p>Đăng tin tiếp cận</p>
            <p>Nền tảng kết nối chủ nhà và khách hàng</p>
          </div>
          <div
            style={{
              width: "33.33%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                marginBottom: "8px",
              }}
            >
              Chính sách đảm bảo
            </h5>
            <p>Bảo vệ người dùng và khách hàng</p>
            <p>Thông tin minh bạch</p>
            <p>Được xác nhận bởi bộ Công Thương</p>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Body;
