using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using Core.Service.BatDongSanService;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
        [HttpPost("suabds")]
        public async Task<IActionResult> SuaBDS(
       [FromBody]
            BatDongSanDTO data
       )
        {
            return Ok(await _batDongSanService.SuaBDS(data));
        }
        [HttpGet("xoa")]
        public async Task<IActionResult> XoaBDS(
     [FromQuery]
            int  bdsId
     )
        {
            return Ok(await _batDongSanService.XoaBDS(bdsId));
        }

        [HttpGet("layhinhanhbyid")]
        public async Task<IActionResult> LayHinhAnhBDSById(
  [FromQuery]
            int  bdsId
  )
        {
            return Ok(_batDongSanService.LayHinhAnhCuaBDSById(bdsId));
        }
        [HttpPost("themhinhanhchobds")]
        public async Task<IActionResult> ThemHinhAnh([FromForm] IFormFile img, [FromForm] int data)
        {
            return Ok(await _batDongSanService.ThemHinhAnhChoBDS(img, data));
        }
        [HttpGet("xoahinhanh")]
        public async Task<IActionResult> XoaHinhAnh([FromQuery] int hinhAnhId, [FromQuery] int bdsId)
        {
            return Ok(await _batDongSanService.XoaHinhAnhById(hinhAnhId, bdsId));
        }
    }
}
