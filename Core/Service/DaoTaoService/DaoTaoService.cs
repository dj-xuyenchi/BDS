using Core.Data;
using Core.DTO;
using Core.Enums;
using Core.plugins;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.DaoTaoService
{
    public class DaoTaoService : IDaoTaoService
    {
        private readonly BDSContext _context = new BDSContext();
        public IQueryable<BaiHocDaoTaoDTO> LayHetBaiHocDaoTao(LoaiBaiHoc? loaiBaiHoc, int? nguoiTaoId)
        {
            var query = _context.BaiHocDaoTao.Include(x => x.NguoiTao).AsNoTracking();
            if (loaiBaiHoc.HasValue)
            {
                query = query.Where(x => x.LoaiBaiHoc == loaiBaiHoc);
            }
            if (nguoiTaoId.HasValue)
            {
                query = query.Where(x => x.NguoiTaoId == nguoiTaoId.Value);
            }
            return query.Select(x => BaiHocDaoTaoDTO.FromEntity(x));
        }

        public async Task<bool> SuaBaiHoc(IFormFile img, IFormFile file, BaiHocDaoTaoDTO baiHoc)
        {
            //
            var baiHocDB = await _context.BaiHocDaoTao.FindAsync(baiHoc.Id);
            string directoryPath = @"D:\uploads";

            if (Directory.Exists(directoryPath))
            {
            }
            else
            {
                try
                {
                    // Tạo thư mục nếu nó chưa tồn tại
                    Directory.CreateDirectory(directoryPath);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Lỗi khi tạo thư mục: {ex.Message}");
                }
            }
            //


            string id = Guid.NewGuid().ToString();
            if (file != null || file.Length != 0)
            {

                id = id + file.FileName;
                var filePath = Path.Combine(directoryPath, id);

                // Lưu file vào đường dẫn
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

            }
            string anhDaiDien = await CloudinaryUpload.UploadFile(img);
            baiHocDB.LinkHinhAnh = anhDaiDien;
            baiHocDB.FileKienThuc = id;
            baiHocDB.TenBaiHoc = baiHoc.TenBaiHoc;
            baiHocDB.MoTa = baiHoc.MoTa;
            baiHocDB.LoaiBaiHoc = (LoaiBaiHoc)baiHoc.LoaiBaiHoc;
            baiHocDB.LinkBaiHoc = baiHoc.LinkBaiHoc;
             _context.Update(baiHocDB);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> ThemBaiHoc(IFormFile img, IFormFile file, BaiHocDaoTaoDTO baiHoc)
        {
            //
            string directoryPath = @"D:\uploads";

            if (Directory.Exists(directoryPath))
            {
            }
            else
            {
                try
                {
                    // Tạo thư mục nếu nó chưa tồn tại
                    Directory.CreateDirectory(directoryPath);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Lỗi khi tạo thư mục: {ex.Message}");
                }
            }
            //


            string id = Guid.NewGuid().ToString();
            if (file != null || file.Length != 0)
            {

                id = id + file.FileName;
                var filePath = Path.Combine(directoryPath, id);

                // Lưu file vào đường dẫn
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

            }
            string anhDaiDien = await CloudinaryUpload.UploadFile(img);
            baiHoc.LinkHinhAnh = anhDaiDien;
            baiHoc.NgayTao = DateTime.Now;
            baiHoc.FileKienThuc = id;
            await _context.AddAsync(baiHoc.ToEntity());
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> XoaBaiHoc(int baiHocId)
        {
            var baiHoc = await _context.BaiHocDaoTao.FindAsync(baiHocId);
            _context.Remove(baiHoc);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
