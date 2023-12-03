export const tinhThoiGianCachHienTai = (thoiDiem) => {
    // Chuyển đổi thời điểm đầu vào thành đối tượng Date
    const thoiDiemNhap = new Date(thoiDiem);

    // Lấy thời điểm hiện tại
    const thoiDiemHienTai = new Date();

    // Tính khoảng cách thời gian
    const khoangCachThoiGian = thoiDiemNhap - thoiDiemHienTai;

    // Chuyển đổi khoảng cách thời gian thành mili giây
    const miliGiay = Math.abs(khoangCachThoiGian);

    // Tính số ngày, giờ, phút và giây
    const ngay = Math.floor(miliGiay / (24 * 60 * 60 * 1000));
    const gio = Math.floor((miliGiay % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const phut = Math.floor((miliGiay % (60 * 60 * 1000)) / (60 * 1000));
    const giay = Math.floor((miliGiay % (60 * 1000)) / 1000);

    // Tạo chuỗi kết quả
    let ketQua = '';
    if (ngay > 0) {
        return ketQua += ngay + ' ngày trước';
    }

    if (gio > 0) {
        return ketQua += gio + ' giờ trước';
    }

    if (phut > 0) {
        return ketQua += phut + ' phút trước';
    }

    if (giay > 0) {
        return ketQua += giay + ' giây trước';
    }
    return "Không có dữ liệu";
}