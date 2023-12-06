using Core.Data;
using Core.DTO;
using Core.RequestModel;
using Microsoft.AspNetCore.Http.Features;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.NguoiDungService
{
    public class NguoiDungService : INguoiDungService
    {
        private readonly BDSContext _context = new BDSContext();
        public async Task<NguoiDungDTO> DangKy(NguoiDungDTO nguoiDungDTO)
        {
            if(_context.NguoiDung.Any(x=>x.TenTaiKhoan == nguoiDungDTO.TenTaiKhoan))
            {
                return null;
            }
            nguoiDungDTO.TrangThai = Enums.TrangThaiNguoiDung.LOCK;
            nguoiDungDTO.MatKhau = BCrypt.Net.BCrypt.HashPassword(nguoiDungDTO.MatKhau);
            nguoiDungDTO.NgayTao = DateTime.Now;
            await _context.AddAsync(nguoiDungDTO.ToEntity());
            await _context.SaveChangesAsync();
            return nguoiDungDTO;
        }

        public async Task<NguoiDungDTO> DangNhap(DangNhapRequest nguoiDungDTO)
        {
            var nguoiDung = _context.NguoiDung.Where(x => x.TenTaiKhoan == nguoiDungDTO.TaiKhoan).FirstOrDefault();
            if(nguoiDung == null)
            {
                return null;
            }
            if (BCrypt.Net.BCrypt.Verify(nguoiDungDTO.MatKhau, nguoiDung.MatKhau))
            {
                nguoiDung.MatKhau = "";
                return NguoiDungDTO.FromEntity(nguoiDung);
            }
            else
            {
                return null;
            }
        }

        public async Task<NguoiDungDTO> TaoNguoiDung(NguoiDungDTO nguoiDungDTO)
        {
            if (_context.NguoiDung.Any(x => x.TenTaiKhoan == nguoiDungDTO.TenTaiKhoan))
            {
                return null;
            }
            nguoiDungDTO.MatKhau = BCrypt.Net.BCrypt.HashPassword(nguoiDungDTO.MatKhau);
            nguoiDungDTO.NgayTao = DateTime.Now;
            await _context.AddAsync(nguoiDungDTO.ToEntity()); await _context.SaveChangesAsync();
            return nguoiDungDTO;
        }
    }
}
