using Core.Data;
using Core.DTO;
using Core.Entities;
using Core.plugins;
using Core.RequestModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
            if (_context.NguoiDung.Any(x => x.TenTaiKhoan == nguoiDungDTO.TenTaiKhoan))
            {
                return null;
            }
            nguoiDungDTO.HinhDaiDien = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png";
            nguoiDungDTO.TrangThai = Enums.TrangThaiNguoiDung.DANGHOATDONG;
            nguoiDungDTO.MatKhau = BCrypt.Net.BCrypt.HashPassword(nguoiDungDTO.MatKhau);
            nguoiDungDTO.NgayTao = DateTime.Now;
            var nguoiDung = nguoiDungDTO.ToEntity();
            await _context.AddAsync(nguoiDung);
            NguoiDungRole nr = new NguoiDungRole();
            nr.NguoiDungId = nguoiDung.Id;
            nr.RoleId = 5;
            /// Khach ngoài
            nr.NgayTao = DateTime.Now;
            await _context.SaveChangesAsync();
            return nguoiDungDTO;
        }

        public async Task<NguoiDungDTO> DangNhap(DangNhapRequest nguoiDungDTO)
        {
            var nguoiDung = _context.NguoiDung.Include(x => x.NguoiDungRole).ThenInclude(y => y.Role).Where(x => x.TenTaiKhoan == nguoiDungDTO.TaiKhoan).FirstOrDefault();
            if (nguoiDung == null)
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

        public IQueryable<NguoiDungDTO> LayHetNguoiDung()
        {
            var query = _context.NguoiDung.AsNoTracking().Include(x => x.NguoiDungRole).ThenInclude(x => x.Role).Include(x => x.PhongBan);
            return query.Select(x => NguoiDungDTO.FromEntity(x));
        }

        public async Task<NguoiDungDTO> TaoNguoiDung(NguoiDungDTO nguoiDungDTO)
        {
            if (_context.NguoiDung.Any(x => x.TenTaiKhoan == nguoiDungDTO.TenTaiKhoan))
            {
                return null;
            }
            nguoiDungDTO.MatKhau = BCrypt.Net.BCrypt.HashPassword(nguoiDungDTO.MatKhau);
            nguoiDungDTO.NgayTao = DateTime.Now;
            nguoiDungDTO.TrangThai = Enums.TrangThaiNguoiDung.DANGHOATDONG;
            nguoiDungDTO.HinhDaiDien = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png";
            var nguoiDung = nguoiDungDTO.ToEntity();
            await _context.AddAsync(nguoiDung);
            await _context.SaveChangesAsync();
            NguoiDungRole nr = new NguoiDungRole();
            nr.NguoiDungId = nguoiDung.Id;
            nr.RoleId = 4;
            nr.NgayTao = DateTime.Now;
            await _context.AddAsync(nr);
            await _context.SaveChangesAsync();
            return nguoiDungDTO;
        }
        public async Task<NguoiDungDTO> SuaNguoiDung(NguoiDungDTO nguoiDungDTO)
        {
            var nguoiDung = await _context.NguoiDung.FindAsync(nguoiDungDTO.Id);
            nguoiDung.MatKhau = BCrypt.Net.BCrypt.HashPassword(nguoiDungDTO.MatKhau);
            nguoiDung.NgayCapNhat = DateTime.Now;
            nguoiDung.HoTenNguoiDung = nguoiDungDTO.HoTenNguoiDung;
            nguoiDung.SoCanCuoc = nguoiDungDTO.SoCanCuoc;
            nguoiDung.SoDienThoai = nguoiDungDTO.SoDienThoai;
            nguoiDung.PhongBanId = nguoiDungDTO.PhongBanId;
            nguoiDung.DiaChi = nguoiDungDTO.DiaChi;
            var chucVu = _context.NguoiDungRole.Where(x => x.NguoiDungId == nguoiDungDTO.Id);
            _context.RemoveRange(chucVu);
            foreach (var item in nguoiDungDTO.NguoiDungRole)
            {
                item.NgayTao = DateTime.Now;
            }
            await _context.AddRangeAsync(nguoiDungDTO.NguoiDungRole);
            _context.Update(nguoiDung);
            await _context.SaveChangesAsync();
            return nguoiDungDTO;
        }

        public IQueryable<NguoiDungDTO> LayNguoiDungTop()
        {
            var query = _context.NguoiDung
                .Include(x => x.PhongBan)
                .Where(x => x.TrangThai == Enums.TrangThaiNguoiDung.DANGHOATDONG);
            return query.Take(10).Select(x => NguoiDungDTO.FromEntity(x));
        }

        public async Task<NguoiDungDTO> LayNguoiDung(int nguoiDungId)
        {
            return NguoiDungDTO.FromEntity(await _context.NguoiDung.Include(x => x.PhongBan).Where(x => x.Id == nguoiDungId).FirstOrDefaultAsync());
        }

        public async Task<NguoiDungDTO> CapNhatThongTin(NguoiDungDTO nguoiDung, IFormFile file)
        {
            var nguoiDungRe = await _context.NguoiDung.Include(x => x.PhongBan).Where(x => x.Id == nguoiDung.Id).FirstOrDefaultAsync();
            nguoiDungRe.SoCanCuoc = nguoiDung.SoCanCuoc;
            nguoiDungRe.HoTenNguoiDung = nguoiDung.HoTenNguoiDung;
            nguoiDungRe.DiaChi = nguoiDung.DiaChi;
            nguoiDungRe.SoDienThoai = nguoiDung.SoDienThoai;
            nguoiDungRe.NgayCapNhat = DateTime.Now;
            if (file != null)
            {
                nguoiDungRe.HinhDaiDien = await CloudinaryUpload.UploadFile(file);
            }
            _context.Update(nguoiDungRe);
            await _context.SaveChangesAsync();
            return NguoiDungDTO.FromEntity(nguoiDungRe);
        }

        public async Task<HoaDonNapTien> NapTien(long soTien, int nguoiDungId)
        {
            HoaDonNapTien hoaDon = new HoaDonNapTien();
            hoaDon.SoTien = soTien;
            hoaDon.NguoiDungId = nguoiDungId;
            hoaDon.NgayTao = DateTime.Now;
            hoaDon.DaThanhToan = false;
            await _context.AddAsync(hoaDon);
            await _context.SaveChangesAsync();
            return hoaDon;
        }

        public async Task<HoaDonNapTien> CheckThanhToan(int hoaDonId,int status)
        {
            HoaDonNapTien hoaDon = await _context.HoaDonNapTien.FindAsync(hoaDonId);
            if (status == 1)
            {
                hoaDon.NgayThanhToan = DateTime.Now;
                hoaDon.DaThanhToan = true;
                var nguoiDung = await _context.NguoiDung.FindAsync(hoaDon.NguoiDungId);
                if (nguoiDung.SoDu == null)
                {
                    nguoiDung.SoDu = 0;
                }
                nguoiDung.SoDu += hoaDon.SoTien;
                _context.Update(nguoiDung);
            }
            else
            {
                hoaDon.DaThanhToan = false;
            }
            _context.Update(hoaDon);
            await _context.SaveChangesAsync();
            return hoaDon;
        }

        public async Task<NguoiDung> DoiMatKhau(DoiMatKhau doiMatKhau)
        {
            var nguoiDung =await _context.NguoiDung.FindAsync(doiMatKhau.NguoiDungId);
            if (BCrypt.Net.BCrypt.Verify(doiMatKhau.MatKhauCu, nguoiDung.MatKhau))
            {
                nguoiDung.MatKhau = BCrypt.Net.BCrypt.HashPassword(doiMatKhau.MatKhauMoi);
                _context.Update(nguoiDung);
                await _context.SaveChangesAsync();
                return nguoiDung;
            }
            else
            {
                return null;
            }
        }
    }
}
