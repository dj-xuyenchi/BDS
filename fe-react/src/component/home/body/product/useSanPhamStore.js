import axiosIns from "../../../../plugins/axios";

export const useSanPhamStore = {
    actions: {
        async fetchSanPham(
            payload
        ) {
            var url = "/TinBan/laytinban";

            return await axiosIns.post(url, payload);
        },
        async layKhuVucFilter(
        ) {
            var url = "/TinBan/laykhuvucfiltermodel";
            return await axiosIns.get(url);
        },
        async layNguoiDung(
        ) {
            var url = "/NguoiDung/laynguoidung10";
            return await axiosIns.get(url);
        },
    },
};
