import axiosIns from "../../../plugins/axios"

export const useTinBan = {
    actions: {
        async layBatDongSan(
            payload
        ) {
            var url = "/BatDongSan/laybatdongsan";

            return await axiosIns.post(url, payload);
        },
        async layTinBan(
            payload
        ) {
            var url = "/TinBan/laytinban";

            return await axiosIns.post(url, payload);
        },
        async taoTin(
            payload
        ) {
            var url = "/TinBan/taotin";

            return await axiosIns.post(url, payload);
        },
        async xoaTin(
            payload
        ) {
            var url = "/TinBan/xoatin?tinBanId=" + payload;

            return await axiosIns.get(url);
        },
        async suaTin(
            payload
        ) {
            var url = "/TinBan/suatin";

            return await axiosIns.post(url, payload);
        },
    },
}
