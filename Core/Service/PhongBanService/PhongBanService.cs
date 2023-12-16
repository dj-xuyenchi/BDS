using Core.Data;
using Core.DTO;
using Core.ResponModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.PhongBanService
{
    public class PhongBanService : IPhongBanService
    {
        private readonly BDSContext _context = new BDSContext();
        public IQueryable<PhongBanDTO> LayHetPhongBan()
        {
            var query = _context.PhongBan.AsNoTracking();
            return query.Select(x => PhongBanDTO.FromEntity(x));
        }

        public async Task<PhongBanModel> LyaPhongBanCuaToi(int phongBanId, int year)
        {
            var phongBan = await _context.PhongBan.Include(x => x.ThanhVienPhongBan).Where(x => x.Id == phongBanId).FirstOrDefaultAsync();
            PhongBanModel phongBanRe = new PhongBanModel();
            phongBanRe.TenPhong = phongBan.TenPhongBan;
            phongBanRe.ThanhVien = _context.NguoiDung
                .Include(x=>x.PhieuXemNha)
                .ThenInclude(y=>y.PhieuXemNhaBatDongSan)
                .Include(x => x.NguoiDungRole)
                .ThenInclude(x => x.Role)
                .Where(x => x.PhongBanId == phongBanId && x.TrangThai == Enums.TrangThaiNguoiDung.DANGHOATDONG)
                .Select(x => new ThanhVienPhongBan()
            {
                Id = x.Id,
                SoDienThoai = x.SoDienThoai,
                DiaChi = x.DiaChi,
                HoTen = x.HoTenNguoiDung,
                SoKhach = x.PhieuXemNha.Where(x => x.TrangThai == Enums.TrangThaiPhieuXemNha.DANGCHAMSOC).Count(),
                Role = x.NguoiDungRole.ToList(),
                Data = x,
                LichSuXem = x.PhieuXemNha.ToList()
            }).ToList();
            List<int> soBDSChot = new List<int>();
            List<int> soKhach = new List<int>();
            for (int i = 1; i < 13; i++)
            {

                int kach = _context.PhieuXemNha
                  .Include(x => x.NhanVienDanKhach)
                  .Where(x => x.NhanVienDanKhach.PhongBanId == phongBanId && x.TrangThai == Enums.TrangThaiPhieuXemNha.DANGCHAMSOC && x.NgayTao.Year == year && x.NgayTao.Month == i)
                  .Count();
                int phieu = _context.PhieuXemNha
                    .Include(x => x.NhanVienDanKhach)
                    .Where(x => x.NhanVienDanKhach.PhongBanId == phongBanId && x.TrangThai == Enums.TrangThaiPhieuXemNha.DACHOTTHANHCONG && x.NgayTao.Year == year && x.NgayTao.Month == i)
                    .Count();
                soBDSChot.Add(phieu);
                soKhach.Add(kach);
            }
            phongBanRe.ThongKeBDS = soBDSChot;
            phongBanRe.SoKhach = soKhach;
            return phongBanRe;
        }
    }
}
