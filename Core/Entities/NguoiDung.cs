using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class NguoiDung : BaseEntity
    {
        public string TenTaiKhoan { get; set; }
        public string MatKhau { get; set; }
        public string HoTenNguoiDung { get; set; }
        public string? SoDienThoai { get; set; }
        public DateTime NgayThangNamSinh { get; set; }
        public int SoBatDongSanDaBan { get; set; }
        public string HinhDaiDien { get; set; }
        public string SoCanCuoc { get; set; }
        public string DiaChi { get; set; }
        public int? PhongBanId { get; set; }
        public virtual PhongBan? PhongBan { get; set; }
        public TrangThaiNguoiDung TrangThai { get; set; }
        public virtual IEnumerable<HopDongMuaBatDongSan> HopDongMuaBatDongSan { get; set; }
        public virtual IEnumerable<BaiHocDaoTao> BaiHocDaoTao { get; set; }
        public virtual IEnumerable<TinBan> TinBan { get; set; }
        public virtual IEnumerable<NguoiDungRole> NguoiDungRole { get; set; }
        public virtual IEnumerable<BatDongSan> DauChuTao { get; set; }
    }
}
