import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Modal, Row, Tag, Tooltip } from "antd";
import { MdDownload } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
function ModalXem({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {" "}
      <Tooltip title="Xem">
        {" "}
        <Button
          style={{ color: "blue" }}
          shape="circle"
          icon={<IoEyeSharp />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        title="Bài học"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        width={768}
        centered
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <iframe
          width="720"
          height="500"
          src={"https://www.youtube.com/embed/" + data.linkBaiHoc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Row>
          <Col
            style={{
              marginTop: "6px",
              display: "flex",
            }}
            span={24}
          >
            <p>
              {data.tenBaiHoc}
              <a
                style={{
                  marginLeft: "12px",
                }}
                href={
                  "https://localhost:44364/BaiHocDaoTao/taifile?fileName=" +
                  data.fileKienThuc
                }
                target="_blank"
              >
                <MdDownload /> Tải tài liệu mềm
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginTop: "6px",
              display: "flex",
            }}
            span={24}
          >
            <div
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  height: "40px",
                  width: "auto",
                }}
                src={data.nguoiTao.hinhDaiDien}
                alt=""
              />
            </div>
            <span
              style={{
                marginLeft: "8px",
                fontWeight: 450,
                display: "flex",
                height: "40px",
                alignItems: "center",
              }}
            >
              {data.nguoiTao.hoTenNguoiDung}
            </span>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalXem;
