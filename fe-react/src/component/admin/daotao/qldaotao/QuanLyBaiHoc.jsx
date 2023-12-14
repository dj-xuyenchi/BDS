import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../layout/header/Header";
import MenuAdmin from "../../layout/menu/MenuAdmin";
import { selectLanguage } from "../../../../language/selectLanguage";
import { useBaiHoc } from "../useSanPhamStore";
import ModalThem from "./ModalThem";
import { Image, Table, Tag } from "antd";
import { fixNgayThang } from "../../../../extensions/fixNgayThang";
import { fixLoaibaiHoc } from "../../../../extensions/fixLoaiBaiHoc";
import ModalXem from "./ModalXem";
import ModalXoaBaiHoc from "./ModalXoaBaiHoc";
import ModalSua from "./ModalSua";
import { checkRole } from "../../../../extensions/checkRole";
function QuanLyBaiHoc() {
  const language = useSelector(selectLanguage);
  const dispath = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(undefined);

  const fetchData = async () => {
    const data = await useBaiHoc.actions.layBaiHoc({});
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "linkHinhAnh",
      key: "linkHinhAnh",
      width: "10%",
      render: (linkHinhAnh) => (
        <>
          <Image
            src={linkHinhAnh}
            style={{ width: "180px", height: "170px" }}
          />
        </>
      ),
    },
    {
      title: "Tên bài học",
      dataIndex: "tenBaiHoc",
      key: "tenBaiHoc",
      width: "10%",
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
      width: "10%",
      render: (ngayTao) => (
        <>
          <span>{fixNgayThang(ngayTao)}</span>
        </>
      ),
    },
    {
      title: "Dạng bài học",
      dataIndex: "loaiBaiHoc",
      key: "loaiBaiHoc",
      width: "10%",
      render: (loaiBaiHoc) => (
        <>
          <Tag color="processing">
            <span>{fixLoaibaiHoc(loaiBaiHoc)}</span>{" "}
          </Tag>
        </>
      ),
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
      width: "10%",
      render: (nguoiTao) => (
        <>
          <span>{nguoiTao.hoTenNguoiDung}</span>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
      width: "10%",
      render: (nguoiTao, record) => (
        <>
          <ModalXem data={record} />
          {checkRole(user.nguoiDungRole, ["ADMIN", "LEAD"]) && (
            <>
              <ModalSua data2={record} fetchData={fetchData} />
              <ModalXoaBaiHoc baiHocId={record.id} fetData={fetchData} />
            </>
          )}
        </>
      ),
    },
  ];
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div>
        <Header />
        <MenuAdmin />
        <div className="body-container">
          <div className="content">
            <div className="table-sanpham background-color">
              {checkRole(user.nguoiDungRole, ["ADMIN", "LEAD"]) && (
                <ModalThem fetchData={fetchData} />
              )}

              <div className="table-sanpham background-color">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{
                    position: ["bottomRight"],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuanLyBaiHoc;
