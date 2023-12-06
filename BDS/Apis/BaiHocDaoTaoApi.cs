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
        public IActionResult DownloadFile()
        {
            // Đường dẫn tới file cần tải
            string filePath = "D:\\excel2.xlsx";

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
        public async Task<IActionResult> UploadFile([FromForm] IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded");
            }

            // Lấy tên file và đường dẫn lưu trữ (có thể thay đổi tùy theo yêu cầu của bạn)
            var fileName = file.FileName;
            var filePath = "C:";

            // Lưu file vào đường dẫn
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok("File uploaded successfully");
        }
    }
}
