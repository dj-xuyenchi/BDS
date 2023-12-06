import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import React, { useEffect, useRef, useState } from "react";
import { useBaiHoc } from "./useSanPhamStore";
import { VscLaw } from "react-icons/vsc";
import { Button, Col, Modal, Row, Tag } from "antd";
import { MdDownload } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import PhanHoc2 from "./PhanHoc2";
import { fixLoaibaiHoc } from "../../../extensions/fixLoaiBaiHoc";
function PhanHoc({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const fetchData = async () => {};
  useEffect(() => {
    // dispath(productSlice.actions.setIsLoading(true));
    // fetchData();
  }, []);
  async function handleTaiFile() {
    const data = await useBaiHoc.actions.taiFile("s");
  }
  return (
    <>
      <div
        style={{
          height: "330px",
          width: "350px",
          float: "left",
          marginLeft: "6px",
          marginRight: "6px",
        }}
        className="item-hover"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12px",
            }}
            span={24}
          >
            <img
              style={{
                borderRadius: "20px",
                height: "180px",
                width: "320px",
              }}
              src={data.linkHinhAnh}
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginTop: "6px",
              marginLeft: "28px",
            }}
            span={24}
          >
            <Tag color="processing">
              <VscLaw />
              <span
                style={{
                  marginLeft: "4px",
                }}
              >
                {fixLoaibaiHoc(data.loaiBaiHoc)}
              </span>
            </Tag>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginTop: "6px",
              marginLeft: "28px",
              maxWidth: "320px",
            }}
            span={24}
          >
            <span
              style={{
                fontWeight: 500,
              }}
            >
              {data.tenBaiHoc}
            </span>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginTop: "6px",
              marginLeft: "28px",
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
      </div>
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
                href="https://localhost:44364/BaiHocDaoTao/taifile?fileName=s"
                target="_blank"
              >
                <MdDownload /> Tải tài liệu mềm
              </a>
              <Button
                onClick={() => {
                  setIsModalOpen2(true);
                }}
                style={{
                  marginLeft: "12px",
                }}
              >
                <IoIosVideocam />
                <span
                  style={{
                    marginLeft: "4px",
                  }}
                >
                  Xem thêm bài học về
                </span>
              </Button>
              <Modal
                title="Bài học liên quan"
                open={isModalOpen2}
                onOk={() => {
                  setIsModalOpen2(false);
                }}
                width={788}
                centered
                onCancel={() => {
                  setIsModalOpen2(false);
                }}
              >
                <PhanHoc2 />
                <PhanHoc2 />
                <PhanHoc2 />
                <PhanHoc2 />
                <PhanHoc2 />
                <PhanHoc2 />
              </Modal>
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

export default PhanHoc;
