import axiosIns from "../../../../plugins/axios";

export const useSanPhamStore = {
    actions: {
        async fetchSanPham(
            giaBan,
            tinhCode,
            huyenCode,
            namXayDung,
            dienTich,
            soPhongNgu,
            soPhongVeSinh,
            chieuNgang,
            chieuDai,
            dienTichSuDung,
            loaiBatDongSan,
            trangThai,
            keyword
        ) {
            var url = "/TinBan/laytinban?";
            if (giaBan) {
                url += "giaBan=" + giaBan + "&";
            }
            if (tinhCode) {
                url += "tinhCode=" + tinhCode + "&";
            }
            if (huyenCode) {
                url += "huyenCode=" + huyenCode + "&";
            }
            if (namXayDung) {
                url += "namXayDung=" + namXayDung + "&";
            }
            if (dienTich) {
                url += "dienTich=" + dienTich + "&";
            }
            if (soPhongNgu) {
                url += "soPhongNgu=" + soPhongNgu + "&";
            }
            if (soPhongVeSinh) {
                url += "soPhongVeSinh=" + soPhongVeSinh + "&";
            }
            if (chieuNgang) {
                url += "chieuNgang=" + chieuNgang + "&";
            }
            if (chieuDai) {
                url += "chieuDai=" + chieuDai + "&";
            }
            if (dienTichSuDung) {
                url += "dienTichSuDung=" + dienTichSuDung + "&";
            }
            if (loaiBatDongSan) {
                url += "loaiBatDongSan=" + loaiBatDongSan + "&";
            }
            if (trangThai) {
                url += "trangThai=" + trangThai + "&";
            }
            if (keyword) {
                url += "keyword=" + keyword + "&";
            }
            return await axiosIns.get(url);
        },
    },
};
