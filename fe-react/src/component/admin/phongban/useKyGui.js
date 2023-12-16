import axiosIns from "../../../plugins/axios"

export const usePhongBan = {
    actions: {
        async layPhongBan(payload) {
            var url = "/PhongBan/phongbancuatoi?phongBanId=" + payload.phongBanId + "&year=" + payload.year;

            return await axiosIns.get(url);
        },
    },
}
