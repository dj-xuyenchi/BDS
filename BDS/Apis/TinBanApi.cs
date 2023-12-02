using Core.Enums;
using Core.Service.BatDongSanService;
using Core.Service.TinBanService;
using Microsoft.AspNetCore.Mvc;

namespace BDS.Apis
{
    [ApiController]
    [Route("TinBan")]
    public class TinBanApi : ControllerBase
    {
        private readonly ITinBanService _tinBan = new TinBanService();

        [HttpGet("laytinban")]
        public IActionResult LayHetTinBan(
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
            )
        {
            return Ok(_tinBan.LayHetTinBan(
                giaBan,
                tinhCode,
                huyenCode,
                namXayDung,
                dienTich,
                soPhongNgu,
                soPhongVeSinh,
                chieuNgang,
                chieuDai,
                dienTichSuDung,
                loaiBatDongSan,
                trangThai,
                keyword
                ));
        }
    }
}
