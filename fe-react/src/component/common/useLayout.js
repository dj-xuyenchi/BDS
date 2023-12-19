import axiosIns from "../../plugins/axios";

export const useLayout = {
  actions: {
    async taoTin(payload) {
      var url = "/ThanhToan/taotin";

      return await axiosIns.post(url, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  },
};
