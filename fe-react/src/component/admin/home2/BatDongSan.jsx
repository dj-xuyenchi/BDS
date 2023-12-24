import { Button, notification } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { fixDoDai } from "../../../extensions/fixDoDai";
import { fixMoney } from "../../../extensions/fixMoney";
import { tinhThoiGianCachHienTai } from "../../../extensions/fixThoiGian";
import { Link } from "react-router-dom";
function BatDongSan({ data, type = true }) {
  return (
    <>
      <Link to={"/bds/" + data.id}>
        <div
          style={{
            height: "306px",
            borderRadius: "5px",
            width: "260px",
            float: "left",
            marginRight: type ? "0" : "30px",
            boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
            marginBottom: "24px",
            cursor: "pointer",
            color: "black",
          }}
        >
          <div
            style={{
              height: "146px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              style={{
                height: "400px",
                width: "auto",
              }}
              src={data.batDongSan.hinhAnhBatDongSan[0].linkHinhAnh}
              alt="s"
            />
          </div>
          <div
            className="hover"
            style={{
              height: "160px",
              padding: "12px",
            }}
          >
            <p
              style={{
                fontWeight: 550,
                marginBottom: "0",
              }}
            >
              {fixDoDai(data.tieuDe)}
            </p>
            <p
              style={{
                marginTop: "6px",
                color: "red",
                fontSize: "16px",
                fontWeight: 550,
                marginBottom: "0",
              }}
            >
              {fixMoney(data.giaBan)} - {data.batDongSan.dienTich}m<sup>2</sup>
            </p>
            <p
              style={{
                marginTop: "6px",
                marginBottom: "0",
                fontSize: "20px",
              }}
            >
              <CiLocationOn />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "14px",
                }}
              >
                {data.batDongSan.diaChi}
              </span>
            </p>
            <p
              style={{
                marginTop: "6px",
                fontSize: "12px",
                color: "#999",
              }}
            >
              {tinhThoiGianCachHienTai(data.ngayTao)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BatDongSan;
