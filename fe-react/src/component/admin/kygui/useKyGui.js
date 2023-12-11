import axiosIns from "../../../plugins/axios"

export const useKyGui = {
    actions: {
        async suaTin(payload) {
            var url = "/TinBan/suatin";

            return await axiosIns.post(url, payload);
        },
    },
}
