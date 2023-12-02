using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class NhoBanBDS : BaseEntity
    {
        public string HoTen { get; set; }
        public string SoDienThoai { get; set; }
        public string Email { get; set; }
        public string HinhAnh1 { get;set; }
        public string HinhAnh2 { get;set; }
        public DateTime NgayTao { get;set; }
        public string MoTa { get; set; }
        public TrangThaiNhoBanBDS TrangThai { get; set; }
    }
}
