import axiosIns from "../../../plugins/axios"

export const useNguoiDung = {
    actions: {
        async layNguoiDung() {
            var url = "/NguoiDung/laynguoidung";

            return await axiosIns.get(url);
        },
        async layPhongBan() {
            var url = "/PhongBan/layhetphongban";

            return await axiosIns.get(url);
        },
        async themNguoiDung(payload) {
            var url = "/NguoiDung/taonguoidung";

            return await axiosIns.post(url, payload);
        }, 
        async suaNguoiDung(payload) {
            var url = "/NguoiDung/suanguoidung";

            return await axiosIns.post(url, payload);
        },
    },
}
