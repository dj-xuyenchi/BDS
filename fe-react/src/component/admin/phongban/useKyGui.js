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
        async themKhach(payload) {
            var url = "/PhongBan/themkhach";
            return await axiosIns.post(url, payload);
        },
        async suakhach(payload) {
            var url = "/PhongBan/suakhach";
            return await axiosIns.post(url, payload);
        },
        async xoakhach(payload) {
            var url = "/PhongBan/xoakhach?phieuId=" + payload;
            return await axiosIns.get(url);
        },
        async chotKhach(payload) {
            var url = "/PhongBan/chotnha";
            return await axiosIns.post(url, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
    },
}
