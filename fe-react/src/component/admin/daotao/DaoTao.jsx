import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import React, { useEffect, useRef, useState } from "react";
import PhanHoc from "./PhanHoc";
import { useBaiHoc } from "./useSanPhamStore";
function DaoTao() {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(undefined);

  const fetchData = async () => {
    const data = await useBaiHoc.actions.layBaiHoc({});
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Header />
        <MenuAdmin />
        <div className="body-container">
          <div className="content">
            <div className="table-sanpham background-color">
              <div style={{}}>
                {data &&
                  data.map((item) => {
                    return <PhanHoc data={item} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DaoTao;
