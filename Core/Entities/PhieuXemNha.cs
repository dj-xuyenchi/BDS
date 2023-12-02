using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    /// <summary>
    /// 1 phiếu xem nhà có thể dùng để dẫn khách xem nhiều nhà
    /// </summary>
    public class PhieuXemNha : BaseEntity
    {
        public int NhanVienDanKhachId { get; set; }
        public virtual NguoiDung NhanVienDanKhach { get; set; } 
        public string TenKhachHang { get; set; }
        public string SoCanCuocKhachHang { get; set; }
        public string GhiChu { get; set; }
        public DateTime NgayTao { get; set; }
        public TrangThaiPhieuXemNha TrangThai { get; set; }
        public virtual IEnumerable<PhieuXemNhaBatDongSan> PhieuXemNhaBatDongSan { get; set; }
        public virtual IEnumerable<HopDongMuaBatDongSan> HopDongMuaBatDongSan { get; set; }
        public virtual IEnumerable<HinhAnhHopDongXemNha> HinhAnhHopDongXemNha { get; set; }
    }
}
