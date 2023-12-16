using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.ResponModel
{
    public class ThanhVienPhongBan
    {
        public int Id { get; set; }
        public string HoTen { get; set; }
        public string SoDienThoai { get; set; }
        public int SoKhach { get; set; }
        public string DiaChi { get; set; }
        public NguoiDung Data { get; set; }
        public List<NguoiDungRole> Role { get; set; }

        public List<PhieuXemNha> LichSuXem { get; set; }
    }
}
