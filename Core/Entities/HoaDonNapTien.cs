using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class HoaDonNapTien : BaseEntity
    {
        public long SoTien { get; set; }
        public int NguoiDungId { get; set; }
        public virtual NguoiDung NguoiDung { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime? NgayThanhToan { get; set; }
        public bool DaThanhToan { get; set; }
    }
}
