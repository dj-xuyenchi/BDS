import axiosIns from "../../../plugins/axios"

export const useDashBoardStore = {
    actions: {
        async taiBaoCao() {
            return axiosIns.get('/api/file/baocao')
        },
        async thongKe(payload) {
            return axiosIns.get('/ThongKe/thongkecty?nam='+payload)
        },
    },
}
