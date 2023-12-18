using Core.Entities;
using Core.Enums;

namespace Core.DTO
{
    public class PhieuXemNhaDTO
    {
        public int Id { get; set; }
        public int NhanVienDanKhachId { get; set; }
        public virtual NguoiDung? NhanVienDanKhach { get; set; }
        public string TenKhachHang { get; set; }
        public string SoCanCuocKhachHang { get; set; }
        public string GhiChu { get; set; }
        public string? SoDienThoai { get; set; }
        public string? Facebook { get; set; }
        public DateTime NgayTao { get; set; }
        public TrangThaiPhieuXemNha TrangThai { get; set; }
        public virtual IEnumerable<PhieuXemNhaBatDongSan>? PhieuXemNhaBatDongSan { get; set; }
        public virtual IEnumerable<HopDongMuaBatDongSan>? HopDongMuaBatDongSan { get; set; }
        public virtual IEnumerable<HinhAnhHopDongXemNha>? HinhAnhHopDongXemNha { get; set; }
        public static PhieuXemNhaDTO FromEntity(PhieuXemNha entity)
        {
            return new PhieuXemNhaDTO()
            {
                Id = entity.Id,
                NhanVienDanKhach = entity.NhanVienDanKhach,
                NhanVienDanKhachId = entity.NhanVienDanKhachId,
                TenKhachHang = entity.TenKhachHang,
                SoCanCuocKhachHang = entity.SoCanCuocKhachHang,
                GhiChu = entity.GhiChu,
                SoDienThoai = entity.SoDienThoai,
                Facebook = entity.Facebook,
                NgayTao = entity.NgayTao,
                TrangThai = entity.TrangThai,
            };
        }
        public PhieuXemNha ToEntity()
        {
            return new PhieuXemNha()
            {
                Id = this.Id,
                NhanVienDanKhach = this.NhanVienDanKhach,
                NhanVienDanKhachId = this.NhanVienDanKhachId,
                TenKhachHang = this.TenKhachHang,
                SoCanCuocKhachHang = this.SoCanCuocKhachHang,
                GhiChu = this.GhiChu,
                SoDienThoai = this.SoDienThoai,
                Facebook = this.Facebook,
                NgayTao = this.NgayTao,
                TrangThai = this.TrangThai,
            };
        }
    }
}
