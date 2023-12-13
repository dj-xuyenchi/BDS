import { useSelector } from "react-redux";
import "./style.css";

import { Carousel } from "@trendyol-js/react-carousel";
import Item from "./Item";
import { useTinChiTiet } from "./useSanPhamChiTiet";
import { useEffect, useState } from "react";
function Slide({ tinhCode, id }) {
  const [data, setData] = useState(undefined);
  async function handleLayDuLieu() {
    const data = await useTinChiTiet.actions.laySanPhamTuongTu({
      tinhCode: tinhCode,
    });
    setData(data.data);
  }

  useEffect(() => {
    handleLayDuLieu();
  }, [tinhCode]);
  return (
    <>
      <Carousel show={6} slide={10} swiping={true}>
        {data
          ? data.map((item) => {
              if (item.id == id) {
                return;
              }
              return <Item data={item} />;
            })
          : ""}
      </Carousel>
    </>
  );
}

export default Slide;
