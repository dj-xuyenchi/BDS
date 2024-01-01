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
        public IActionResult LayHetTinBan([FromBody] Filter filter)
        {
            return Ok(_tinBan.LayHetTinBan(filter));
        }
        [HttpPost("taotin")]
        public async Task<IActionResult> TaoTin([FromBody] TinBanDTO tinBan)
        {
            return Ok(await _tinBan.TaoTin(tinBan));
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
        [HttpGet("laytinbankhach")]
        public IActionResult LayTinBanWeb()
        {
            return Ok(_tinBan.LayHetTinBanWeb());
        }
        [HttpGet("laytinbanxetduyet")]
        public IActionResult LayTinBanChoXetDuyet()
        {
            return Ok(_tinBan.LayHetTinBanWebChoXetDuyet());
        }
        [HttpGet("laybaidangbyid")]
        public IActionResult LayBaiDangById([FromQuery] int nguoiDungId)
        {
            return Ok(_tinBan.LayBaiDangById(nguoiDungId));
        }
        [HttpGet("xacnhantin")]
        public async Task<IActionResult> XacNhanTin([FromQuery] int tinBanId)
        {
          await  _tinBan.XacNhanTin(tinBanId);
            return Ok("");
        }
        [HttpGet("thuedang")]
        public async Task<IActionResult> ThueDangTin(
            [FromQuery] int tinBanId,
               [FromQuery] int nguoiDungId,
                  [FromQuery] string ngayHet
            )
        {
            string[] ngay = ngayHet.Split("-");
            return Ok(await _tinBan.ThueDangBai(tinBanId, nguoiDungId, new DateTime(int.Parse(ngay[0]), int.Parse(ngay[1]), int.Parse(ngay[2]))));
        }
    }
}
