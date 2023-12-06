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
function Body() {
  const language = useSelector(selectLanguage);

  const product = useSelector(selectProduct);
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };
  const disPath = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

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
        />
        <Product data={data} />
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
    </>
  );
}

export default Body;
