using Core.DTO;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.TinBanService
{
    public interface ITinBanService
    {
        IQueryable<TinBanDTO> LayHetTinBan(
             double? giaBan,
            string? tinhCode,
            string? huyenCode,
            int? namXayDung,
            double? dienTich,
            int? soPhongNgu,
            int? soPhongVeSinh,
            double? chieuNgang,
            double? chieuDai,
            double? dienTichSuDung,
            LoaiBatDongSan? loaiBatDongSan,
            TrangThaiBatDongSan? trangThai,
            string? keyword
            );
    }
}
