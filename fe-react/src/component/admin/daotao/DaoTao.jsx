import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import React, { useEffect, useRef, useState } from "react";
import { useSanPhamStore } from "./useSanPhamStore";
import PhanHoc from "./PhanHoc";
function DaoTao() {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");


  const fetchData = async () => {
    const data = await useSanPhamStore.actions.fetchSanPham({});
  };
  useEffect(() => {
    // dispath(productSlice.actions.setIsLoading(true));
    // fetchData();
  }, []);
  return (
    <>
      <div>
        <Header />
        <MenuAdmin />
        <div className="body-container">
          <div className="content">
            <div className="table-sanpham background-color">
              <div style={{
              }}>
                <PhanHoc />
                <PhanHoc />
                <PhanHoc />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DaoTao;
