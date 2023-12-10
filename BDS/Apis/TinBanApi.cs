using Core.DTO;
using Core.Enums;
using Core.RequestModel;
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

        [HttpPost("laytinban")]
        public IActionResult LayHetTinBan([FromBody]Filter filter)
        {
            return Ok(_tinBan.LayHetTinBan(filter));
        }
        [HttpPost("taotin")]
        public async Task<IActionResult> TaoTin([FromBody] TinBanDTO tinBan)
        {
            return Ok( await _tinBan.TaoTin(tinBan));
        }
        [HttpPost("suatin")]
        public async Task<IActionResult> SuaTin([FromBody] TinBanDTO tinBan)
        {
            return Ok(await _tinBan.SuaTin(tinBan));
        }
        [HttpGet("xoatin")]
        public async Task<IActionResult> XoaTin([FromQuery] int tinBanId)
        {
            return Ok(await _tinBan.XoaTin(tinBanId));
        }
        [HttpGet("laytinbyid")]
        public async Task<IActionResult> LayTin([FromQuery] int tinBanId)
        {
            return Ok(await _tinBan.LayTinById(tinBanId));
        }
        [HttpGet("laykhuvucfiltermodel")]
        public async Task<IActionResult> LayKhuVucFilter()
        {
            return Ok(await _tinBan.LayKhuVucFilterModel());
        }
    }
}
