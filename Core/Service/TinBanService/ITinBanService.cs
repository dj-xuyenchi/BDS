using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using Core.ResponModel;
using Microsoft.AspNetCore.Http;
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
        IQueryable<TinBanDTO> LayHetTinBanWeb();
        Task<TinBanDTO> TaoTin(TinBanDTO tinBan);
        Task<TinBanDTO> XoaTin(int tinBanId);
        Task<TinBanDTO> SuaTin(TinBanDTO tinBan);
        Task<TinBanDTO> LayTinById (int tinBanId);
        Task<KhuVucFilterModel> LayKhuVucFilterModel();
        Task<int> DangTinBanKhachNgoai(TaoTinKhachNgoai tinMoi, List<IFormFile> file);
    }
}
