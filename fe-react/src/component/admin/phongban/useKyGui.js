import axiosIns from "../../../plugins/axios"

export const usePhongBan = {
    actions: {
        async layPhongBan(payload) {
            var url = "/PhongBan/phongbancuatoi?phongBanId=" + payload.phongBanId + "&year=" + payload.year;

            return await axiosIns.get(url);
        },
        async layKhachHang(payload) {
            var url = "/PhongBan/laykhachhang?nhanVienId=" + payload;
            return await axiosIns.get(url);
        },
        async themDanKhach(payload) {
            var url = "/PhongBan/themphieu";
            return await axiosIns.post(url, payload);
        },
        async suaDanKhach(payload) {
            var url = "/PhongBan/suaphieu";
            return await axiosIns.post(url, payload);
        },
    },
}
