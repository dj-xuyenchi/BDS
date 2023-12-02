using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class HopDongMuaBatDongSan : BaseEntity
    {
        public double GiaBan { get; set; }
        public string NguoiLamChung { get; set; }
        public string CanCuocNguoiLamChung { get; set; }
        public string NoiCongChung { get; set; }
        public int NguoiChotId { get; set; }
        public virtual NguoiDung NguoiChot { get; set; }
        public int BatDongSanId { get; set; }
        public virtual BatDongSan BatDongSan { get; set; }
        public int PhieuXemNhaId { get; set; }
        public virtual PhieuXemNha PhieuXemNha { get; set; }
        public virtual IEnumerable<HinhAnhHopDong> AnhChupHopDong { get; set; }
    }
}
