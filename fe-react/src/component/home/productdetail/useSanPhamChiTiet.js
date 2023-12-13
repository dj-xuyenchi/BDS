import axiosIns from "../../../plugins/axios"

export const useTinChiTiet = {
    actions: {
        async layTinById(
            payload
        ) {
            var url = "/TinBan/laytinbyid?tinBanId=" + payload;

            return await axiosIns.get(url);
        },
        async laySanPhamTuongTu(
            payload
        ) {
            var url = "/TinBan/laytinban";

            return await axiosIns.post(url, payload);
        },
    },
}
