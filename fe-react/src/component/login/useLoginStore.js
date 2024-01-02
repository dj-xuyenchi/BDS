import axiosIns from "../../plugins/axios"

export const useLoginStore = {
    actions: {
        async dangNhap(payload) {
            return await axiosIns.post('/NguoiDung/dangnhap', payload)
        },
        async dangKy(payload) {
            return await axiosIns.post(`/NguoiDung/dangky`, payload)
        },
        async taoYeuCau(payload) {
            return await axiosIns.get(`/NguoiDung/taoyeucau?email=` + payload)
        },
        async xacNhanDoi(payload) {
            return await axiosIns.get(`/NguoiDung/xacnhandoi?code=` + payload.code + "&matKhauMoi=" + payload.matKhauMoi)
        },
    },
}
