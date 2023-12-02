using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class HinhAnhHopDongXemNha : BaseEntity
    {
        public string LinkHinhAnh { get; set; }
        public int PhieuXemId { get; set; }
        public virtual PhieuXemNha PhieuXem { get; set; }
        public DateTime NgayTao { get; set; }
    }
}
