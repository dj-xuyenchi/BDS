export const fixTrangThaiNguoiDung = (input) => {
    switch (input) {
        case 1:
            return "Chờ xác nhận";
        case 2:
            return "Đang làm việc";
        case 3:
            return "Đã khóa";
        case 4:
            return "Chờ xác nhận";
        default:
            return "Không rõ"

    }
}