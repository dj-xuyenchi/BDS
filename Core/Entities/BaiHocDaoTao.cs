using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class BaiHocDaoTao : BaseEntity
    {
        public string LinkBaiHoc { get; set; }
        public string MoTa { get; set; }
        public string TenBaiHoc { get; set; }
        public string LinkHinhAnh { get; set; }
        public DateTime NgayTao { get; set; }
        public LoaiBaiHoc LoaiBaiHoc { get; set; }
        public TrangThaiBaiHoc TrangThai { get; set; }
        public int NguoiTaoId { get; set; }
        public virtual NguoiDung NguoiTao { get; set; }
        public string? FileKienThuc { get; set; }
    }
}
