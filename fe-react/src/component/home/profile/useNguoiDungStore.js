import axiosIns from "../../../plugins/axios";

export const useNguoiDungStore = {
  actions: {
    async layThongTinNguoiDung(payload) {
      const response = await axiosIns.get(
        `/NguoiDung/thongtincanhan?nguoiDungId=${payload}`
      );
      return response;
    },
    async capNhatThongTin(payload) {
      const response = await axiosIns.post(
        `/NguoiDung/thongtincanhan`,
        payload
      );
      return response;
    },
    async doiMatKhau(payload) {
      const response = await axiosIns.post(
        `/api/nguoidung/doimatkhau`,
        payload
      );
      return response;
    },
  },
};
