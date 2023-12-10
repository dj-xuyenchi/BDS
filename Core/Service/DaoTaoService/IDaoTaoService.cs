using Core.DTO;
using Core.Entities;
using Core.Enums;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.DaoTaoService
{
    public interface IDaoTaoService
    {
        IQueryable<BaiHocDaoTaoDTO> LayHetBaiHocDaoTao(
            LoaiBaiHoc? loaiBaiHoc,
            int? nguoiTaoId
            );
        Task<bool> ThemBaiHoc(IFormFile img, IFormFile file, BaiHocDaoTaoDTO baiHoc);
        Task<bool> SuaBaiHoc(IFormFile img, IFormFile file, BaiHocDaoTaoDTO baiHoc);
        Task<bool> XoaBaiHoc(int baiHocId);
    }
}
