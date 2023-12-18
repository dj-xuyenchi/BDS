using Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.Cron
{
    public class CronService : ICronJob
    {
        private readonly BDSContext _context = new BDSContext();
        public void GuiBaoCaoChoTruongPhong()
        {
            Console.WriteLine(123);
        }

        public  void KiemTraTinDangHetHan()
        {
            var tinBan = _context.TinBan.Where(x => x.TinCuaCongTy == false).ToList();
            foreach ( var t in tinBan )
            {
                if(t.NgayHetHan.Value < DateTime.Now)
                {
                    t.TrangThai = Enums.TrangThaiTinBan.DAKHOA;
                }
            }
            _context.UpdateRange(tinBan);
             _context.SaveChanges();
        }
    }
}
