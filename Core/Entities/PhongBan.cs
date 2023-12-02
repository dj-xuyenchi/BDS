using Core.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class PhongBan : BaseEntity
    {
        public string TenPhongBan { get; set; }
        public string KhauHieu { get; set; }
        public int TruongPhongId { get; set; }
        [ForeignKey(nameof(TruongPhongId))]
        public virtual NguoiDung TruongPhong { get; set; }
        public string HinhDaiDien { get; set; }
        public int SoLuongNhanVien { get;set; }
        public TrangThaiPhongBan TrangThai { get; set; }
        public virtual IEnumerable<NguoiDung> ThanhVienPhongBan { get; set; }
    }
}
