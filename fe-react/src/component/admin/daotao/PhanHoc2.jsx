import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Header from "../layout/header/Header";
import MenuAdmin from "../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../language/selectLanguage";
import React, { useEffect, useRef, useState } from "react";
import { useSanPhamStore } from "./useSanPhamStore";
import { VscLaw } from "react-icons/vsc";
import { Button, Col, Modal, Row, Tag } from "antd";
import { MdDownload } from "react-icons/md";
function PhanHoc2() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)

    const fetchData = async () => {
        const data = await useSanPhamStore.actions.fetchSanPham({});
    };
    useEffect(() => {
        // dispath(productSlice.actions.setIsLoading(true));
        // fetchData();
    }, []);
    return (
        <>
            <div style={{
                height: "330px",
                width: "350px",
                float: 'left',
                marginLeft: "6px",
                marginRight: "6px"
            }}
                className="item-hover"
                onClick={() => {
                    setIsModalOpen(true)
                }}
            >
                <Row >
                    <Col style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: "12px"
                    }} span={24}>
                        <img style={{
                            borderRadius: '20px',
                            height: "180px",
                            width: "320px"
                        }} src="https://i.ytimg.com/vi/sH7GdUY0YPU/maxresdefault.jpg" alt="" />
                    </Col>
                </Row>
                <Row >
                    <Col style={{
                        marginTop: "6px",
                        marginLeft: "28px"
                    }} span={24}>
                        <Tag color="processing"><VscLaw /><span style={{
                            marginLeft: "4px"
                        }}>Luật</span></Tag>
                    </Col>
                </Row>
                <Row >
                    <Col style={{
                        marginTop: "6px",
                        marginLeft: "28px"
                        , maxWidth: "320px"
                    }} span={24}>
                        <span style={{
                            fontWeight: 500
                        }}>Luật đất đai sửa đổi năm 2023 những điều cần chú ý quân tâm khi tư vấn cho khách</span>
                    </Col>
                </Row>
                <Row >
                    <Col style={{
                        marginTop: "6px",
                        marginLeft: "28px",
                        display: 'flex'
                    }} span={24}>
                        <div style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: "50%",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: "hidden"
                        }}>
                            <img style={{
                                height: '40px',
                                width: 'auto'
                            }} src="https://images2.thanhnien.vn/528068263637045248/2023/3/10/01-16784216317551521798726.jpeg" alt="" />

                        </div>
                        <span style={{
                            marginLeft: "8px",
                            fontWeight: 450,
                            display: 'flex',
                            height: '40px',
                            alignItems: "center"
                        }}>Taylor</span>
                    </Col>
                </Row>

            </div>
            <Modal title="Bài học" open={isModalOpen} onOk={() => {
                setIsModalOpen(false)
            }}
                width={768}
                centered
                onCancel={() => {
                    setIsModalOpen(false)
                }
                }>
                <iframe width="720" height="500" src="https://www.youtube.com/embed/eRllcUtAl54?si=taG3pLTOKHm0pi3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Row >
                    <Col style={{
                        marginTop: "6px",
                        display: 'flex'
                    }} span={24}>
                        <p>Luật đất đai sửa đổi  <Button style={{
                            marginLeft: "12px"
                        }}>
                            <MdDownload />
                            <span style={{
                                marginLeft: "4px"
                            }}>Tải tài liệu mềm</span></Button>
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col style={{
                        marginTop: "6px",
                        display: 'flex'
                    }} span={24}>
                        <div style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: "50%",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: "hidden"
                        }}>
                            <img style={{
                                height: '40px',
                                width: 'auto'
                            }} src="https://images2.thanhnien.vn/528068263637045248/2023/3/10/01-16784216317551521798726.jpeg" alt="" />

                        </div>
                        <span style={{
                            marginLeft: "8px",
                            fontWeight: 450,
                            display: 'flex',
                            height: '40px',
                            alignItems: "center"
                        }}>Taylor</span>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default PhanHoc2;
