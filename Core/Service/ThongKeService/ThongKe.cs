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
        public async Task<ThongKeModel> LayThongKe(int nam)
        {
            ThongKeModel thongKe = new ThongKeModel();

            return thongKe;
        }
    }
}
