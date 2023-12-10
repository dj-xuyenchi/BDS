import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../../language/selectLanguage";
import { Select, Spin } from "antd";
import ProductItem from "./productitem/ProductItem";
import { useEffect, useState } from "react";
import { useSanPhamStore } from "./useSanPhamStore";
import productSlice from "./productSlice";
function Product({ data, tinhHuyen, setTinhHuyen }) {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();
  const [filterModel, setFilterModel] = useState(undefined);
  const [huyen, setHuyen] = useState(undefined);
  async function handleLayModel() {
    const data = await useSanPhamStore.actions.layKhuVucFilter();
    setFilterModel(data.data);
  }
  useEffect(() => {
    handleLayModel();
  }, []);

  return (
    <>
      <div className="product-container">
        <div className="sub-filter">
          <div className="total">
            <span>Khu vực</span>
            <div>
              <Select
                showSearch
                style={{ width: 200 }}
                defaultValue={"Tất cả"}
                onChange={(e) => {
                  console.log(e);
                  setHuyen(
                    filterModel.districts.filter((item) => {
                      return item.province_code === e;
                    })
                  );
                  setTinhHuyen({
                    ...tinhHuyen,
                    tinhCode: e,
                  });
                }}
                optionFilterProp="children"
                options={
                  filterModel &&
                  filterModel.provinces.map((item) => {
                    return {
                      value: item.code,
                      label: item.full_name,
                    };
                  })
                }
              />
              <Select
                showSearch
                style={{ width: 200, marginLeft: "4px" }}
                defaultValue={"Tất cả"}
                optionFilterProp="children"
                onChange={(e) => {
                  setTinhHuyen({
                    ...tinhHuyen,
                    huyenCode: e,
                  });
                }}
                options={
                  huyen &&
                  huyen.map((item) => {
                    return {
                      value: item.code,
                      label: item.full_name,
                    };
                  })
                }
              />
            </div>
          </div>
          <div style={{ paddingRight: "10px" }}>
            <span className="title"></span>
          </div>
        </div>
        <div className="product">
          {!data ? (
            <div className="loading">
              <Spin size="large"></Spin>
            </div>
          ) : (
            data.map((item, index) => {
              return <ProductItem key={index} item={item} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
