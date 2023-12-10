using Core.Data;
using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using Core.Service.BatDongSanService;
using Core.Service.DaoTaoService;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;

namespace BDS.Apis
{
    [ApiController]
    [Route("BaiHocDaoTao")]
    public class BaiHocDaoTaoApi : ControllerBase
    {
        private readonly IDaoTaoService _daoTao = new DaoTaoService();
        private readonly BDSContext _context = new BDSContext();
        [HttpGet("layhetbaihoc")]
        public IActionResult layhetbaihoc(
        [FromQuery] int? loaiBaiHoc,
        [FromQuery] int? nguoiTaoId
            )
        {
            return Ok(_daoTao.LayHetBaiHocDaoTao(
                  (LoaiBaiHoc?)loaiBaiHoc,
          nguoiTaoId
              ));
        }
        [HttpGet("taifile")]
        public IActionResult DownloadFile([FromQuery] string fileName)
        {
            string directoryPath = @"D:\uploads";
            // Đường dẫn tới file cần tải
            //   string filePath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", fileName);
            string filePath = Path.Combine(directoryPath, fileName);

            // Kiểm tra xem file có tồn tại không
            if (System.IO.File.Exists(filePath))
            {
                // Tạo FileStreamResult để trả về file
                var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
                return File(fileStream, "application/octet-stream", Path.GetFileName(filePath));
            }
            else
            {
                // Trả về lỗi nếu file không tồn tại
                return NotFound("File not found");
            }
        }
       
        [HttpPost("thembaihoc")]
        public async Task<IActionResult> ThemBaiHoc([FromForm] List<IFormFile> file, [FromForm] string data)
        {
            BaiHocDaoTaoDTO bh = JsonConvert.DeserializeObject<BaiHocDaoTaoDTO>(data);
            return Ok(await _daoTao.ThemBaiHoc(file[0], file[1],bh));
        }


        [HttpGet("xoabaihoc")]
        public async Task<IActionResult> XoaBaiHoc(int baiHocId)
        {
            return Ok(await _daoTao.XoaBaiHoc(baiHocId));
        }
        [HttpPost("suabaihoc")]
        public async Task<IActionResult> SuaBaiHoc([FromForm] List<IFormFile> file, [FromForm] string data)
        {
            BaiHocDaoTaoDTO bh = JsonConvert.DeserializeObject<BaiHocDaoTaoDTO>(data);
            return Ok(await _daoTao.SuaBaiHoc(file[0], file[1], bh));
        }
    }
}
