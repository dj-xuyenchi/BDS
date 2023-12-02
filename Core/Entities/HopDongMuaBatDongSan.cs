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
        public virtual IEnumerable<HinhAnhHopDong> AnhChupHopDong { get; set; }
    }
}
