import { Divider, Row } from "antd";
import "./style.css";
function Footer() {

    return (
        <>
            <Row
                style={{
                    backgroundColor: "#F4F4F4",
                    height: "260px"
                }}>
                <div style={{
                    width: "60%",
                    marginLeft: "20%",
                    display: "flex",
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: "33.33%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "12px"
                    }}>
                        <h4 style={{
                            fontSize: "0.875rem",
                            fontFamily: " Helvetica,Arial,Roboto,sans-serif !important",
                            fontWeight: 700,
                            textTransform: 'capitalize'
                            , marginBottom: "10px"
                        }}>Cam kết với khách hàng</h4>
                        <div style={{
                            marginBottom: "4px"
                        }}>
                            <img
                                style={{
                                    height: "18px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/icons/svg/check.svg"
                                alt="ss"
                            />
                            <span
                                style={{
                                    marginLeft: "4px",
                                    fontSize: "14px",
                                }}
                            >
                                Cam kết bảo mật thông tin
                            </span>
                        </div>
                        <div style={{
                            marginBottom: "4px"
                        }}>
                            <img
                                style={{
                                    height: "18px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/icons/svg/check.svg"
                                alt="ss"
                            />
                            <span
                                style={{
                                    marginLeft: "4px",
                                    fontSize: "14px",
                                }}
                            >
                                Cam kết tin đăng đúng sự thật
                            </span>
                        </div>
                        <div style={{
                            marginBottom: "4px"
                        }}>
                            <img
                                style={{
                                    height: "18px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/icons/svg/check.svg"
                                alt="ss"
                            />
                            <span
                                style={{
                                    marginLeft: "4px",
                                    fontSize: "14px",
                                }}
                            >
                                Cam kết về Môi giới
                            </span>
                        </div>
                    </div>

                    <div style={{
                        width: "33.33%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "12px"
                    }}>
                        <h4 style={{
                            fontSize: "0.875rem",
                            fontFamily: " Helvetica,Arial,Roboto,sans-serif !important",
                            fontWeight: 700,
                            textTransform: 'capitalize'
                            , marginBottom: "10px"
                        }}>Về Nhà Tốt</h4>
                        <div style={{
                            marginBottom: "4px"
                        }}>
                            <span
                                style={{
                                    marginLeft: "4px",
                                    fontSize: "14px",
                                }}
                            >
                                Chính sách
                            </span>
                        </div>
                        <div style={{
                            marginBottom: "4px"
                        }}>

                            <span
                                style={{
                                    marginLeft: "4px",
                                    fontSize: "14px",
                                }}
                            >
                                Về chúng tôi
                            </span>
                        </div>
                        <div style={{
                            marginBottom: "4px"
                        }}>

                            <span
                                style={{
                                    marginLeft: "4px",
                                    fontSize: "14px",
                                }}
                            >
                                Điều khoản sử dụng
                            </span>
                        </div>
                    </div>
                    <div style={{
                        width: "33.33%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "12px"
                    }}>
                        <h4 style={{
                            fontSize: "0.875rem",
                            fontFamily: " Helvetica,Arial,Roboto,sans-serif !important",
                            fontWeight: 700,
                            textTransform: 'capitalize'
                            , marginBottom: "10px"
                        }}>Liên kết</h4>
                        <div style={{
                            marginBottom: "4px"
                        }}>
                            <img
                                style={{
                                    height: "30px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/default/facebook.svg"
                                alt="ss"
                            />
                            <img
                                style={{
                                    height: "30px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/default/youtube.svg"
                                alt="ss"
                            />
                            <img
                                style={{
                                    height: "30px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/default/linkedin.svg"
                                alt="ss"
                            />
                        </div>
                        <h4 style={{
                            fontSize: "0.875rem",
                            fontFamily: " Helvetica,Arial,Roboto,sans-serif !important",
                            fontWeight: 700,
                            textTransform: 'capitalize'
                            , marginBottom: "10px"
                        }}>Chứng nhận</h4>
                        <div style={{
                            marginTop: "10px"
                        }}>
                            <img
                                style={{
                                    height: "40px",
                                    width: "auto",
                                    marginLeft: "6px",
                                    marginRight: "6px",
                                }}
                                src="https://static.chotot.com/storage/default/certificate.webp"
                                alt="ss"
                            />
                        </div>
                    </div>
                </div>
                <Divider style={{
                    marginBottom: "unset"
                }} />
                <div style={{
                    width: "60%",
                    marginLeft: "20%",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    CÔNG TY TNHH CHỢ TỐT - Đại diện pháp luật ĐỖ TIẾN ANH
                </div>

            </Row >
        </>
    );
}

export default Footer;
