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
        `/NguoiDung/doimatkhau`,
        payload
      );
      return response;
    },
    async doiMatKhau(payload) {
      const response = await axiosIns.post(
        `/NguoiDung/doimatkhau`,
        payload
      );
      return response;
    },
    async layBaiDangById(payload) {
      const response = await axiosIns.get(
        `/TinBan/laybaidangbyid?nguoiDungId=` + payload
      );
      return response;
    },
    async napTien(payload) {
      const response = await axiosIns.post(
        `/ThanhToan/naptien?nguoiDungId=` + payload.nguoiDungId + "&amount=" + payload.soTien
      );
      return response;
    },
    async xacNhan(payload) {
      const response = await axiosIns.post(
        `/ThanhToan/xacnhan?hoaDonId=` + payload.hoaDonId + "&status=" + payload.status
      );
      return response;
    },
    async giaHan(payload) {
      const response = await axiosIns.get(
        `/TinBan/thuedang?tinBanId=` + payload.tinBanId + "&nguoiDungId=" + payload.nguoiDungId + "&ngayHet=" + payload.ngayHet
      );
      return response;
    },
  },
};
