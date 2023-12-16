using Core.DTO;
using Core.Service.NguoiDungService;
using Core.Service.PhongBanService;
using Microsoft.AspNetCore.Mvc;

namespace BDS.Apis
{
    [ApiController]
    [Route("PhongBan")]
    public class PhongBanApi : ControllerBase
    {
        private readonly IPhongBanService _phongBanService = new PhongBanService();
        private readonly INguoiDungService _nguoiDungSerive = new NguoiDungService();
        [HttpGet("layhetphongban")]
        public IActionResult LayHetPhongBan()
        {
            return Ok(_phongBanService.LayHetPhongBan());
        }
        [HttpGet("phongbancuatoi")]
        public async Task<IActionResult> LayPhongBan(
            [FromQuery] int phongBanId,
            [FromQuery] int year
            )
        {
            return Ok(await _phongBanService.LyaPhongBanCuaToi(phongBanId, year));
        }
    }
}
