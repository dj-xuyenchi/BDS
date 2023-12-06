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
                url += url + payload.loaiBaiHoc
            }
            if (payload.nguoiTaoId) {
                url += url + payload.nguoiTaoId
            }
            return await axiosIns.get(url);
        },
    },
}
