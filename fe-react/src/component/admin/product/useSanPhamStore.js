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
        async xoaBDS(payload) {
            var url = "/BatDongSan/xoa?bdsId=" + payload;

            return await axiosIns.get(url);
        },
        async layHinhAnh(payload) {
            var url = "/BatDongSan/layhinhanhbyid?bdsId=" + payload;

            return await axiosIns.get(url);
        },
        async xoaHinhAnh(payload) {
            var url = "/BatDongSan/xoahinhanh?bdsId=" + payload.bdsId + "&hinhAnhId=" + payload.hinhAnhId;

            return await axiosIns.get(url);
        },
        async layDiaChiOption() {
            var url = "/TinBan/laykhuvucfiltermodel";

            return await axiosIns.get(url);
        },
        async themHinhAnh(payload) {
            var url = "/BatDongSan/themhinhanhchobds";

            return await axiosIns.post(url, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
    },
}
