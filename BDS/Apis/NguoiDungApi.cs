using Core.DTO;
using Core.RequestModel;
using Core.Service.BatDongSanService;
using Core.Service.NguoiDungService;
using Microsoft.AspNetCore.Mvc;

namespace BDS.Apis
{
    [ApiController]
    [Route("NguoiDung")]
    public class NguoiDungApi : ControllerBase
    {
        private readonly INguoiDungService nguoiDungService = new NguoiDungService();

        [HttpPost("dangky")]
        public async Task<IActionResult> DangKy(
            [FromBody]
          NguoiDungDTO nguoiDungDTO
            )
        {
            return Ok(await nguoiDungService.DangKy(
               nguoiDungDTO));
        }
        [HttpPost("dangnhap")]
        public async Task<IActionResult> DangNhap(
           [FromBody]
          DangNhapRequest nguoiDungDTO
           )
        {
            return Ok(await nguoiDungService.DangNhap(
               nguoiDungDTO));
        }
        [HttpPost("taonguoidung")]
        public async Task<IActionResult> TaoNguoiDung(
           [FromBody]
          NguoiDungDTO nguoiDungDTO
           )
        {
            return Ok(await nguoiDungService.TaoNguoiDung(
               nguoiDungDTO));
        }
    }
}
