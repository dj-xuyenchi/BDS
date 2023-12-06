import axiosIns from "../../plugins/axios"

export const useLoginStore = {
    actions: {
        async dangNhap(payload) {
            return await axiosIns.post('/NguoiDung/dangnhap', payload)
        },
        async dangKy(payload) {
            return await axiosIns.post(`/NguoiDung/dangky`, payload)
        },
    },
}
