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
        public IActionResult TaoTin([FromBody] TinBanDTO tinBan)
        {
            return Ok(_tinBan.TaoTin(tinBan));
        }
       
    }
}
