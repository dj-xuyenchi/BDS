using Core.Entities;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class PhongBanDTO
    {
        public int Id { get; set; }
        public string TenPhongBan { get; set; }
        public string KhauHieu { get; set; }
        public int TruongPhongId { get; set; }
        public virtual NguoiDung? TruongPhong { get; set; }
        public string HinhDaiDien { get; set; }
        public int SoLuongNhanVien { get; set; }
        public DateTime NgayTao { get; set; }
        public TrangThaiPhongBan TrangThai { get; set; }
        public virtual IEnumerable<NguoiDung>? ThanhVienPhongBan { get; set; }
        public static PhongBanDTO FromEntity(PhongBan entity)
        {
            return new PhongBanDTO()
            {
                Id = entity.Id,
                TenPhongBan = entity.TenPhongBan,
                KhauHieu = entity.KhauHieu,
                TruongPhong = entity.TruongPhong,
                TruongPhongId = entity.TruongPhongId,
                HinhDaiDien = entity.HinhDaiDien,
                SoLuongNhanVien = entity.ThanhVienPhongBan.Count(),
                TrangThai = entity.TrangThai,
                ThanhVienPhongBan = entity.ThanhVienPhongBan,
                NgayTao = entity.NgayTao
            };
        }
        public PhongBan ToEntity()
        {
            return new PhongBan()
            {
                Id = this.Id,
                TenPhongBan = this.TenPhongBan,
                KhauHieu = this.KhauHieu,
                TruongPhong = this.TruongPhong,
                TruongPhongId = this.TruongPhongId,
                HinhDaiDien = this.HinhDaiDien,
                SoLuongNhanVien = this.SoLuongNhanVien,
                TrangThai = this.TrangThai,
                NgayTao = this.NgayTao
            };
        }
    }
}
