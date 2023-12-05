import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../../language/selectLanguage";
import { Select, Spin } from "antd";
import { selectProduct } from "./selectProduct";
import ProductItem from "./productitem/ProductItem";
import { useEffect } from "react";
import { useSanPhamStore } from "./useSanPhamStore";
import productSlice from "./productSlice";
import { useState } from "react";
function Product({data}) {
  const language = useSelector(selectLanguage);
  
  return (
    <>
      <div className="product-container">
        <div className="sub-filter">
          <div className="total">
            {"20 " + language.body.product.subFilter.sort.total}
          </div>
          <div style={{ paddingRight: "10px" }}>
            <span className="title">
              {language.body.product.subFilter.sort.title}
            </span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder={language.body.product.subFilter.sort.select.title}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
              ]}
            />
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
