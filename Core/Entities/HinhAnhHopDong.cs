using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class HinhAnhHopDong : BaseEntity
    {
        public int HopDongId { get; set; }
        public virtual HopDongMuaBatDongSan HopDong { get; set; }
        public DateTime NgayTao { get; set; }

    }
}
