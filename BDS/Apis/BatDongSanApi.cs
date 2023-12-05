using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using Core.Service.BatDongSanService;
using Microsoft.AspNetCore.Mvc;

namespace BDS.Apis
{
    [ApiController]
    [Route("BatDongSan")]
    public class BatDongSanApi : ControllerBase
    {
        private readonly IBatDongSanService _batDongSanService = new BatDongSanService();

        [HttpPost("laybatdongsan")]
        public IActionResult LayHetBatDongSan(
            [FromBody]
            Filter filter
            )
        {
            return Ok(_batDongSanService.LayHetBatDongSan(
               filter));
        }
        [HttpPost("themmoi")]
        public async Task<IActionResult> ThemBDS(
          [FromBody]
            BatDongSanDTO data
          )
        {
            return Ok(await _batDongSanService.ThemBDS(data));
        }
    }
}
