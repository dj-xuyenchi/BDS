import "./style.css";
import { FaBusinessTime } from "react-icons/fa6";
import { Button, Image, Modal, Timeline, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FaImages } from "react-icons/fa";
function ModalAnhHopDong({ listAnh }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Tooltip title="Ảnh hợp đồng">
        {" "}
        <Button
          style={{ color: "blue" }}
          shape="circle"
          icon={<FaImages />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        width={800}
        title={"Ảnh hợp đồng"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        {listAnh.map((item) => {
          return (
            <Image
              src={item.linkHinhAnh}
              style={{
                height: "120px",
                width: "auto",
                marginRight: "12px",
              }}
            />
          );
        })}
      </Modal>
    </>
  );
}

export default ModalAnhHopDong;
