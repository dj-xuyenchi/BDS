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
function ModalTimeLine({ type = false, data }) {
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
          mode="left"
          items={
            data &&
            data.map((item) => {
              return {
                label: fixNgayThang(item.ngayXem),
                children: <span>{item.note}</span>,
              };
            })
          }
        />
      </Modal>
    </>
  );
}

export default ModalTimeLine;
