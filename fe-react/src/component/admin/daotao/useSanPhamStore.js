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
    },
}
