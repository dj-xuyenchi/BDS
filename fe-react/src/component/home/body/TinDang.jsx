import "./style.css";
import { Image } from "antd";
import { fixMoney } from "../../../extensions/fixMoney";
import { tinhThoiGianCachHienTai } from "../../../extensions/fixThoiGian";
function TinDang({ data }) {
    return (
        <>
            <div className="tinban"
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
                    height: '120px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <img style={{
                        height: "120px",
                        marginTop: "12px",
                        width: "auto"
                    }} src="https://thanhnien.mediacdn.vn/Uploaded/phucndh/2022_03_22/275784117-1003059813954227-2905016888780054136-n-9366.jpg" alt="" />
                </div>
                <div style={{
                    marginTop: "12px"
                }}>
                    <p style={{
                        marginLeft: "8px",
                        marginBottom: "0px"
                    }}>Hoa khôi Đại Bản 44m2 siêu phẩm cực đẹp</p>
                    <p style={{
                        fontSize: '14px',
                        marginLeft: "8px",
                        color: '#9b9b9b',
                        marginBottom: "0px"
                    }}>60m2 - 6PN</p>
                    <p style={{
                        fontSize: '14px',
                        marginLeft: "8px",
                        color: 'red',
                        marginBottom: "0px"
                    }}>{fixMoney(200000000000)}</p>
                    <div style={{
                        marginLeft: "8px",
                        display: 'flex',
                        flexDirection: "row"
                    }}>
                        <img src="https://thanhnien.mediacdn.vn/Uploaded/phucndh/2022_03_22/275784117-1003059813954227-2905016888780054136-n-9366.jpg" alt="s" style={{
                            height: "16px",
                            width: "16px",
                            borderRadius: "50%"
                        }} />
                        <span style={{
                            lineHeight: "16px",
                            color: "#9b9b9b",
                            fontSize: "11px",
                            marginLeft: "4px"
                        }}> - {tinhThoiGianCachHienTai("2019-2-2")} . TP Hà Nội</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TinDang;
