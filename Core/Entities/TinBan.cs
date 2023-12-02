using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class TinBan : BaseEntity
    {
        public string TieuDe { get; set; }
        public string MoTa { get; set; }
        public int NguoiDangId { get; set; }
        public virtual NguoiDung NguoiDang { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime NgayCapNhat { get; set; }
        public TrangThaiTinBan TrangThai { get; set; }
    }
}
