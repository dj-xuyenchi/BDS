import axiosIns from "../../../plugins/axios"

export const useNguoiDung = {
    actions: {
        async suaTin(payload) {
            var url = "/TinBan/suatin";

            return await axiosIns.post(url, payload);
        },
    },
}
