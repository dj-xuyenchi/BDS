export const content = (bds) => {
    if (!bds) {
        return `lỗi`
    }
    return `
đây là thông số nhà giá ${bds.giaBan} năm xây dựng  ${bds.namXayDung} diện tích ${bds.dienTich} m2 số phòng ngủ  ${bds.soPhongNgu} nhà vệ sinh ${bds.soPhongVeSinh} mặt tiền ${bds.chieuNgang}m chiều dài ${bds.chieuDai}m diện tích sử dụng ${bds.dienTichSuDung}m2 hãy viết cho tôi mô tả căn nhà này để có thể đăng bán
`
}