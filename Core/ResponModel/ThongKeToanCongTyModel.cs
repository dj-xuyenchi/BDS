using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.ResponModel
{
    public class ThongKeToanCongTyModel
    {
        public List<int> SoBDSChot { get; set; }
        public List<int> SoKhachHangMoi { get; set; }
        public List<NguoiDung> TopSeller { get; set; }
        public int SoNhanVien { get; set; }
        public int SoTruongPhong { get; set; }
        public int SoDauChu { get; set; }
    }
}
