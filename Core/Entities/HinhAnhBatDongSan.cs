using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class HinhAnhBatDongSan : BaseEntity
    {
        public int BatDongSanId { get; set; }
        public virtual BatDongSan BatDongSan { get; set; }
        public DateTime NgayTao { get; set; }
    }
}
