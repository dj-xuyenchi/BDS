import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../language/selectLanguage";
import { Card, Drawer } from "antd";
import { useState } from "react";
function TinDang({ data }) {
    const language = useSelector(selectLanguage);
    const [placement, setPlacement] = useState("right");
    return (
        <>
            <div
                style={{
                    width: "200px",
                    height: "240px",
                    border: '1px solid #F4F4F4',
                    borderRadius: "5px",
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "4px"
                }}
            >
                <div style={{
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center"
                    , position: 'relative'
                }}>
                    <div style={{
                        overflow: 'hidden', height: '80px', display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>

                        <img style={{
                            height: "200px",
                            width: "auto"
                        }} src="https://thanhnien.mediacdn.vn/Uploaded/phucndh/2022_03_22/275784117-1003059813954227-2905016888780054136-n-9366.jpg" alt="" />
                    </div>

                    <div style={{
                        border: "1px solid black",
                        height: "48px",
                        width: "48px",
                        borderRadius: "50%",
                        overflow: 'hidden',
                        position: "absolute",
                        bottom: "-20px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img style={{
                            height: "48px",
                            width: 'auto'
                        }} src="https://filesdata.cadn.com.vn//filedatacadn/media/800/2023/1/21/1-hoa-hau-1-1.jpg" alt="ss" />
                    </div>
                </div>
                <div style={{
                    marginTop: "20px"
                }}>
                    <p style={{
                        fontWeight: 700,
                        textAlign: 'center'
                    }}>Đỗ Tiến Anh - Kim Cương</p>
                    <p style={{
                        textAlign: 'center'
                    }}>Chuyên viên tư vấn BDS Hà Nội</p>
                </div>
            </div>
        </>
    );
}

export default TinDang;
