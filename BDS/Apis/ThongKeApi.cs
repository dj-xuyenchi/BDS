using Core.RequestModel;
using Core.Service.ThongKeService;
using Core.Service.TinBanService;
using Microsoft.AspNetCore.Mvc;

namespace BDS.Apis
{
    [ApiController]
    [Route("ThongKe")]
    public class ThongKeApi : ControllerBase
    {
        private readonly IThongKe _thongKe = new ThongKe();

        [HttpGet("thongkecty")]
        public async Task<IActionResult> LayThongKeCty([FromQuery] int nam)
        {
            return Ok(await _thongKe.LayThongKeCty(nam));
        }
    }
}
