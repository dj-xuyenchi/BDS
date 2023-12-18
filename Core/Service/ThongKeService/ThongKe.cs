using Core.Data;
using Core.ResponModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.ThongKeService
{
    public class ThongKe : IThongKe
    {
        private readonly BDSContext _context = new BDSContext();
        public async Task<ThongKeModel> LayThongKe(int nam)
        {
            ThongKeModel thongKe = new ThongKeModel();

            return thongKe;
        }

        public async Task<ThongKeToanCongTyModel> LayThongKeCty(int nam)
        {
            ThongKeToanCongTyModel thongKe = new ThongKeToanCongTyModel(); List<int> soBdsMoi = new List<int>();
            List<int> soBdsChot = new List<int>();
            var bds = _context.BatDongSan.Where(x=>x.NgayTao.Year == nam).ToList(); 
            for(var i = 0; i < bds.Count; i++)
            {

            }
           
            return thongKe;
        }
    }
}
