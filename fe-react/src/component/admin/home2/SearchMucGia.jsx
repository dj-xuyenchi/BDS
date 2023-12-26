import { InputNumber } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
function SearchMucGia({ searchParam, setSearchParam }) {
  return (
    <>
      <h6
        style={{
          marginBottom: "4px",
          fontSize: "14px",
        }}
      >
        Từ
      </h6>
      <InputNumber
        style={{
          width: "200px",
        }}
        value={searchParam.min ? searchParam.min : 0}
        min={1000000}
        formatter={(value) =>
          `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
        onChange={(e) => {
          setSearchParam({
            ...searchParam,
            min: e,
          });
        }}
      />
      <h6
        style={{
          marginBottom: "4px",
          fontSize: "14px",
          marginTop: "8px",
        }}
      >
        Đến
      </h6>
      <InputNumber
        style={{
          width: "200px",
        }}
        min={1000000}
        max={100000000000}
        value={searchParam.max ? searchParam.max : 0}
        formatter={(value) =>
          `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
        onChange={(e) => {
          setSearchParam({
            ...searchParam,
            max: e,
          });
        }}
      />
    </>
  );
}

export default SearchMucGia;
