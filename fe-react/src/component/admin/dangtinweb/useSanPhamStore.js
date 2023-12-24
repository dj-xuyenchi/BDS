import axiosIns from "../../../plugins/axios"

export const useTinBan = {
    actions: {
        async layTinKhach(
        ) {
            var url = "/TinBan/laytinbankhach";
            return await axiosIns.get(url);
        },
        async xoaTin(
            payload
        ) {
            var url = "/TinBan/xoatin?tinBanId=" + payload;
            return await axiosIns.get(url);
        },
    },
}
