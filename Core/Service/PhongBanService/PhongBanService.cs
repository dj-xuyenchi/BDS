using Core.Data;
using Core.DTO;
using Core.Entities;
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

        public IQueryable<PhieuXemNha> LayKhachHangByNVId(int nhanVienId)
        {
            var query = _context.PhieuXemNha
                .Include(x => x.PhieuXemNhaBatDongSan)
                .ThenInclude(y => y.BatDongSan)
                .ThenInclude(z => z.HinhAnhBatDongSan)
                .AsNoTracking();
            return query.Where(x => x.NhanVienDanKhachId == nhanVienId);
        }

        public async Task<PhongBanModel> LyaPhongBanCuaToi(int phongBanId, int year)
        {
            var phongBan = await _context.PhongBan.Include(x => x.ThanhVienPhongBan).Where(x => x.Id == phongBanId).FirstOrDefaultAsync();
            PhongBanModel phongBanRe = new PhongBanModel();
            phongBanRe.TenPhong = phongBan.TenPhongBan;
            phongBanRe.ThanhVien = _context.NguoiDung
                .Include(x => x.PhieuXemNha)
                .ThenInclude(y => y.PhieuXemNhaBatDongSan)
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

        public async Task<PhieuXemNhaBatDongSan> SuaNote(PhieuXemNhaBatDongSanDTO phieuXem)
        {
            var phieuSua = await _context.PhieuXemNhaBatDongSan.FindAsync(phieuXem.Id);
            phieuSua.Note = phieuXem.Note;
            phieuSua.BatDongSanId = phieuXem.BatDongSanId;
            _context.Update(phieuSua);
            await _context.SaveChangesAsync();
            return phieuSua;

        }

        public async Task<PhieuXemNhaBatDongSan> TaoNote(PhieuXemNhaBatDongSanDTO phieuXem)
        {
            var hienTai = _context.PhieuXemNhaBatDongSan.Where(x => x.PhieuXemNhaId == phieuXem.PhieuXemNhaId).OrderBy(x => x.SortNumber).ToList();
            PhieuXemNhaBatDongSan moi = new PhieuXemNhaBatDongSan();
            if (hienTai.Count == 0)
            {
                moi.SortNumber = 1;

            }
            else
            {
                moi.SortNumber = hienTai[0].SortNumber + 1;
            }
            moi.Note = phieuXem.Note;
            moi.NgayXem = DateTime.Now;
            moi.BatDongSanId = phieuXem.BatDongSanId;
            moi.PhieuXemNhaId = phieuXem.PhieuXemNhaId;
            await _context.AddAsync(moi);
            await _context.SaveChangesAsync();
            return moi;
        }
    }
}
