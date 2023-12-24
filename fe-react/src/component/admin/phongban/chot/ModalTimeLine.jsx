import "./style.css";
import { FaBusinessTime } from "react-icons/fa6";
import {
  Button,
  Modal,
  Timeline,
  Tooltip,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { fixNgayThang } from "../../../../extensions/fixNgayThang";
import ModalViewBDS from "../ModalViewBDS";
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
