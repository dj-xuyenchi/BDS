using Core.DTO;
using Core.RequestModel;
using Core.Service.BatDongSanService;
using Core.Service.NguoiDungService;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BDS.Apis
{
    [ApiController]
    [Route("NguoiDung")]
    public class NguoiDungApi : ControllerBase
    {
        private readonly INguoiDungService nguoiDungService = new NguoiDungService();

        [HttpPost("dangky")]
        public async Task<IActionResult> DangKy([FromBody] NguoiDungDTO nguoiDungDTO)
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
        [HttpPost("suanguoidung")]
        public async Task<IActionResult> SuaNguoiDung(
          [FromBody]
          NguoiDungDTO nguoiDungDTO
          )
        {
            return Ok(await nguoiDungService.SuaNguoiDung(
               nguoiDungDTO));
        }
        [HttpGet("laynguoidung")]
        public IActionResult LayHetNguoiDung()
        {
            return Ok(nguoiDungService.LayHetNguoiDung());
        }
        [HttpGet("laynguoidung10")]
        public IActionResult LayHetNguoiDung10()
        {
            return Ok(nguoiDungService.LayNguoiDungTop());
        }
        [HttpGet("thongtincanhan")]
        public async Task<IActionResult> LayThongTinCaNhan([FromQuery] int nguoiDungId)
        {
            return Ok(await nguoiDungService.LayNguoiDung(nguoiDungId));
        }
        [HttpPost("thongtincanhan")]
        public async Task<IActionResult> CapNhat([FromForm] IFormFile? file, [FromForm] string data)
        {
            NguoiDungDTO bh = JsonConvert.DeserializeObject<NguoiDungDTO>(data);
            return Ok(await nguoiDungService.CapNhatThongTin(bh, file));
        }
        [HttpPost("doimatkhau")]
        public async Task<IActionResult> DoiMatKhau([FromBody] DoiMatKhau doiMatKhau)
        {
            return Ok(await nguoiDungService.DoiMatKhau(doiMatKhau));
        }
        [HttpGet("taoyeucau")]
        public async Task<IActionResult> TaoYeuCau([FromQuery] string email)
        {
            return Ok(await nguoiDungService.QuenMatKhau(email));
        }
        [HttpGet("xacnhandoi")]
        public async Task<IActionResult> XacNhanDoi([FromQuery] string code, [FromQuery] string matKhauMoi)
        {
            return Ok(await nguoiDungService.XacNhanMatKhau(code, matKhauMoi));
        }
    }
}
