﻿using Core.DTO;
using Core.RequestModel;
using Core.Service.NguoiDungService;
using Core.Service.PhongBanService;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
        [HttpGet("laykhachhang")]
        public IActionResult LayKhachHang(
            [FromQuery] int nhanVienId
            )
        {
            return Ok(_phongBanService.LayKhachHangByNVId(nhanVienId));
        }
        [HttpPost("suaphieu")]
        public async Task<IActionResult> SuaPhieu(
           [FromBody] PhieuXemNhaBatDongSanDTO phieu
           )
        {
            return Ok(await _phongBanService.SuaNote(phieu));
        }
        [HttpPost("themphieu")]
        public async Task<IActionResult> ThemPhieu(
           [FromBody] PhieuXemNhaBatDongSanDTO phieu
           )
        {
            return Ok(await _phongBanService.TaoNote(phieu));
        }

        [HttpPost("themkhach")]
        public async Task<IActionResult> ThemKhach(
          [FromBody] PhieuXemNhaDTO phieu
          )
        {
            return Ok(await _phongBanService.TaoMoiKhachHang(phieu));
        }
        [HttpPost("suakhach")]
        public async Task<IActionResult> SuaKhach(
        [FromBody] PhieuXemNhaDTO phieu
        )
        {
            return Ok(await _phongBanService.SuaKhachHang(phieu));
        }
        [HttpGet("xoakhach")]
        public async Task<IActionResult> XoaKhach(
       [FromQuery] int phieuId
       )
        {
            return Ok(await _phongBanService.XoaKhachHang(phieuId));
        }

        [HttpPost("chotnha")]
        public async Task<IActionResult> TaoTinDang([FromForm] List<IFormFile> file, [FromForm] string data)
        {
            HopDongMuaBatDongSanDTO bh = JsonConvert.DeserializeObject<HopDongMuaBatDongSanDTO>(data);
            return Ok(await _phongBanService.TaoHopDong(bh, file));
        }
    }
}
