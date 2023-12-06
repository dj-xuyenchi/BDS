using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.TinBanService
{
    public interface ITinBanService
    {
        IQueryable<TinBanDTO> LayHetTinBan(Filter filter);
        Task<TinBanDTO> TaoTin(TinBanDTO tinBan);
        Task<TinBanDTO> XoaTin(int tinBanId);
        Task<TinBanDTO> SuaTin(TinBanDTO tinBan);
    }
}
