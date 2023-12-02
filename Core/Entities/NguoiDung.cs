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
        public DateTime NgayThangNamSinh { get; set; }
        public int SoBatDongSanDaBan { get; set; }
        public string HinhDaiDien { get; set; }
        public string SoCanCuoc { get; set; }
        public string DiaChi { get; set; }
        public int RoleId { get; set; }
        public virtual Role Role { get; set; }
        public int PhongBanId { get; set; }
        public virtual PhongBan PhongBan { get; set; }
        public TrangThaiNguoiDung TrangThai { get; set; }
    }
}
