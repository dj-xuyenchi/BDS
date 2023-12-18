using Core.ResponModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.ThongKeService
{
    public interface IThongKe
    {
        public Task<ThongKeModel> LayThongKe(int nam);
        public Task<ThongKeToanCongTyModel> LayThongKeCty(int nam);
    }
}
