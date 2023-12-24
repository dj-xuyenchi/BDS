import axiosIns from "../../../plugins/axios"

export const usePhongBanAdmin = {
    actions: {
        async layPhongBan() {
            var url = "/PhongBan/layhetphongban";
            return await axiosIns.get(url);
        },
        async layNhanVienKhongPhaiTruongPhong() {
            var url = "/PhongBan/layhetnhanvienkhongphaitruongphong";
            return await axiosIns.get(url);
        },
        async taoPhongBan(payload) {
            var url = "/PhongBan/taomoi";
            return await axiosIns.post(url, payload);
        },
        async suaPhongBan(payload) {
            var url = "/PhongBan/capnhat";
            return await axiosIns.post(url, payload);
        },
        async xoaPhongBan(payload) {
            var url = "/PhongBan/xoaphongban?phongBanId=" + payload;
            return await axiosIns.get(url);
        },
    },
}
