import axiosIns from "../../../plugins/axios"

export const useBaiHoc = {
    actions: {
        async taiFile(
            payload
        ) {
            var url = "/BaiHocDaoTao/taifile?fileName=" + payload;

            return await axiosIns.get(url);
        },
        async layBaiHoc(
            payload
        ) {
            var url = "/BaiHocDaoTao/layhetbaihoc?";
            if (payload.loaiBaiHoc) {
                url +="loaiBaiHoc=" + payload.loaiBaiHoc
            }
            if (payload.nguoiTaoId) {
                url +=  payload.nguoiTaoId
            }
            return await axiosIns.get(url);
        },
        async themBaiHoc(payload) {
            var url = "/BaiHocDaoTao/thembaihoc";

            return await axiosIns.post(url, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        async suaBaiHoc(payload) {
            var url = "/BaiHocDaoTao/suabaihoc";

            return await axiosIns.post(url, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        async xoaBaiHoc(payload) {
            var url = "/BaiHocDaoTao/xoabaihoc?baiHocId=" + payload;

            return await axiosIns.get(url);
        },
    },
}
