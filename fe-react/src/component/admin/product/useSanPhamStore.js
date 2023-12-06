import axiosIns from "../../../plugins/axios"

export const useSanPhamStore = {
    actions: {
        async fetchSanPham(
            payload
        ) {
            var url = "/BatDongSan/laybatdongsan";

            return await axiosIns.post(url, payload);
        },
        async theMoi(
            payload
        ) {
            var url = "/BatDongSan/themmoi";

            return await axiosIns.post(url, payload);
        }, 
        async suaBDS(
            payload
        ) {
            var url = "/BatDongSan/suabds";

            return await axiosIns.post(url, payload);
        },
        async xoaBDS(
            payload
        ) {
            var url = "/BatDongSan/xoa?bdsId=" + payload;

            return await axiosIns.get(url);
        },
    },
}
