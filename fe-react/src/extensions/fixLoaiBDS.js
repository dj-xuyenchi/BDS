export const fixLoaiBDS = (input) => {
    switch (input) {
        case 1:
            return "Nhà phố";
        case 2:
            return "Đất thổ cư";
        case 3:
            return "Đất nền";
        case 4:
            return "Chung cư";
        default:
            return "Không rõ"

    }
}