import { useSelector } from "react-redux";
import "./style.css";

function Item({ data }) {
  return (
    <>
      <div
        style={{
          height: "280px",
          width: "300px",
          backgroundColor: "red",
        }}
      >
        {data.diaChi}
      </div>
    </>
  );
}

export default Item;
