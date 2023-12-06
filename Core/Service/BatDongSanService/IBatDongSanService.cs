using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.BatDongSanService
{
    public interface IBatDongSanService
    {
        IQueryable<BatDongSanDTO> LayHetBatDongSan(Filter filter);
        Task<BatDongSanDTO> ThemBDS(BatDongSanDTO data);
        Task<BatDongSanDTO> XoaBDS(int bdsId);
        Task<BatDongSanDTO> SuaBDS(BatDongSanDTO data);
    }
}
