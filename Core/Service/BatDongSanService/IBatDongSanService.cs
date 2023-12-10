using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using Microsoft.AspNetCore.Http;
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
        IQueryable<HinhAnhBDSDTO> LayHinhAnhCuaBDSById(int bdsId);
        Task<bool> XoaHinhAnhById(int hinhAnhId, int bdsId);
        Task<bool> ThemHinhAnhChoBDS(IFormFile img, int bdsId);
    }
}
