import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import { useDispatch } from "react-redux";
import languageSlice from "./language/languageSlice";
import { vi } from "./language/vi";
import { en } from "./language/en";
import NotFound from "./component/notfound/NotFound";
import HomePage from "./component/home/HomePage";
import DashBoard from "./component/admin/dashboard/DashBoard";
import ProductDetail from "./component/home/productdetail/ProductDetail";
import userSlice from "./component/login/userSlice";
import { useEffect } from "react";
import Product from "./component/admin/product/Product";
import Profile from "./component/home/profile/Profile";
import DangTin from "./component/admin/dangtin/DangTin";
import DaoTao from "./component/admin/daotao/DaoTao";
import QuanLyBaiHoc from "./component/admin/daotao/qldaotao/QuanLyBaiHoc";
import KyGui from "./component/admin/kygui/KyGui";
import NguoiDung from "./component/admin/nguoidung/KyGui";
function App() {
  const dispath = useDispatch();
  const disPath = useDispatch();
  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language === null) {
      language = "vi";
      dispath(languageSlice.actions.setLanguage(vi));
      localStorage.setItem("language", "vi");
    } else {
      switch (language) {
        case "vi":
          dispath(languageSlice.actions.setLanguage(vi));
          break;
        case "en":
          dispath(languageSlice.actions.setLanguage(en));
          break;
        default:
      }
    }
    const user = localStorage.getItem("user");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dangtin" element={<DangTin />} />
        <Route path="/bds/:id" element={<ProductDetail />} />
        <Route path="/admin/daotao" element={<DaoTao />} />
        <Route path="/admin/quanlydaotao" element={<QuanLyBaiHoc />} />
        <Route path="/admin/sanpham" element={<Product />} />
        <Route path="/admin/kygui" element={<KyGui />} />
        <Route path="/admin/nguoidung" element={<NguoiDung />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
