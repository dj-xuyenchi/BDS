import { Button, Dropdown, Input, Space } from "antd";
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
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
];
function Home2() {
  const [data, setData] = useState(undefined);
  async function handleLayDuLieu() {
    const data = await useSanPhamStore.actions.fetchSanPham({});
    setData(data.data);
  }
  useEffect(() => {
    handleLayDuLieu();
  }, []);
  return (
    <>
      <Header />
      <div className="body">
        <div
          style={{
            marginTop: "24px",
            width: "945px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#666666",
              height: "128px",
              borderRadius: "5px",
              padding: "16px",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                height: "48px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                {" "}
                <Dropdown
                  menu={{
                    items,
                  }}
                >
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
                  </div>
                </Dropdown>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Input
                  placeholder="Tìm nhanh"
                  style={{
                    border: "none",
                    borderRadius: "0",
                    height: "48px",
                    width: "600px",
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
                  }}
                >
                  <Button
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
              <div
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

        <div className="sanpham">
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
      </div>
      <Footer />
    </>
  );
}

export default Home2;
