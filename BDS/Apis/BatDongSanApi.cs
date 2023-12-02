using Core.Enums;
using Core.Service.BatDongSanService;
using Microsoft.AspNetCore.Mvc;

namespace BDS.Apis
{
    [ApiController]
    [Route("BatDongSan")]
    public class BatDongSanApi : ControllerBase
    {
        private readonly IBatDongSanService _batDongSanService = new BatDongSanService();

        [HttpGet("laybatdongsan")]
        public IActionResult LayHetBatDongSan(
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
            return Ok(_batDongSanService.LayHetBatDongSan(
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
