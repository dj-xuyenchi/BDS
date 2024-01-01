import axiosIns from "../../../plugins/axios"

export const useTinBan = {
    actions: {
        async layTinKhachChoXet(
        ) {
            var url = "/TinBan/laytinbanxetduyet";
            return await axiosIns.get(url);
        },
        async xacNhanTin(payload
        ) {
            var url = "/TinBan/xacnhantin?tinBanId=" + payload;
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
