import "./style.css";
import { FaBusinessTime } from "react-icons/fa6";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Timeline,
  Tooltip,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fixNgayThang } from "../../../extensions/fixNgayThang";
import ModalView from "../product/ModalView";
import ModalViewBDS from "./ModalViewBDS";
import ModalDanKhach from "./ModalDanKhach";
import ModalSuaNote from "./ModalSuaNote";
function ModalTimeLine({ type = false, data, phieuId, fet }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Tooltip title="Chi tiết dẫn khách">
        {" "}
        <Button
          style={{ color: "blue" }}
          shape="circle"
          icon={<FaBusinessTime />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={700}
        title={"Lịch sử dẫn khách"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        <ModalDanKhach phieuId={phieuId} fet={fet} />
        <Timeline
          style={{
            marginLeft: "-80px",
          }}
          mode="left"
          items={
            data &&
            data.map((item) => {
              return {
                label: fixNgayThang(item.ngayXem),
                children: (
                  <div>
                    <p>{item.note}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ModalViewBDS data={item.batDongSan} />
                      <ModalSuaNote data2={item} fetchData={fet} />
                    </div>
                  </div>
                ),
              };
            })
          }
        />
      </Modal>
    </>
  );
}

export default ModalTimeLine;
