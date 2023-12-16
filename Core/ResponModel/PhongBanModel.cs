using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.ResponModel
{
    public class PhongBanModel
    {
        public string TenPhong { get; set; }
        public List<int> ThongKeBDS { get; set; }
        public List<int> SoKhach { get; set; }
        public List<ThanhVienPhongBan> ThanhVien { get; set; }

    }
}
