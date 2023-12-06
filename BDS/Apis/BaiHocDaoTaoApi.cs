using Core.Data;
using Core.DTO;
using Core.Enums;
using Core.RequestModel;
using Core.Service.BatDongSanService;
using Core.Service.DaoTaoService;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult LayHetBatDongSan(
            LoaiBaiHoc? loaiBaiHoc,
            int? nguoiTaoId
            )
        {
            return Ok(_daoTao.LayHetBaiHocDaoTao(
                  loaiBaiHoc,
          nguoiTaoId
              ));
        }
        [HttpGet("taifile")]
        public IActionResult DownloadFile([FromQuery] string fileName)
        {
            // Đường dẫn tới file cần tải
         //   string filePath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", fileName);
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "luat.pdf");

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
        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromForm] IFormFile file, [FromForm] BaiHocDaoTaoDTO baiHocDaoTao)
        {
            string id = Guid.NewGuid().ToString();
            if (file == null || file.Length == 0)
            {

                id = id+ file.FileName;
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", id);

                // Lưu file vào đường dẫn
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

            }
            baiHocDaoTao.FileKienThuc = id;
            await _context.AddAsync(baiHocDaoTao.ToEntity());


            return Ok("File uploaded successfully");
        }
    }
}
