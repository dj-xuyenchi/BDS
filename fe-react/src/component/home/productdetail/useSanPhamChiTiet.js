import axiosIns from "../../../plugins/axios"

export const useTinChiTiet = {
    actions: {
        async layTinById(
            payload
        ) {
            var url = "/TinBan/laytinbyid?tinBanId=" + payload;

            return await axiosIns.get(url);
        },
    },
}
