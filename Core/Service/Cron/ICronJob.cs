using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.Cron
{
    public interface ICronJob
    {
        void KiemTraTinDangHetHan();
        void GuiBaoCaoChoTruongPhong();
    }
}
