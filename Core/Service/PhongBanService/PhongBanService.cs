using Core.Data;
using Core.DTO;
using Core.Entities;
using Core.plugins;
using Core.ResponModel;
using Microsoft.AspNetCore.Http;
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

        public async Task<int> TaoHopDong(HopDongMuaBatDongSanDTO hopDong, List<IFormFile> file)
        {
            hopDong.NgayChot = DateTime.Now;
            var hopDongRe = hopDong.ToEntity();
            var bds = await _context.BatDongSan.FindAsync(hopDongRe.BatDongSanId);
            bds.TrangThai = Enums.TrangThaiBatDongSan.DABAN;
            var nguoiDung = await _context.NguoiDung.FindAsync(hopDongRe.NguoiChotId);
            nguoiDung.SoBatDongSanDaBan += 1;
            var phieu = await _context.PhieuXemNha.FindAsync(hopDongRe.PhieuXemNhaId);
            phieu.TrangThai = Enums.TrangThaiPhieuXemNha.DACHOTTHANHCONG;
            await _context.AddAsync(hopDongRe);
            await _context.SaveChangesAsync();
            foreach (var item in file)
            {
                HinhAnhHopDong hinh = new HinhAnhHopDong();
                hinh.NgayTao = DateTime.Now;
                hinh.HopDongId = hopDongRe.Id;
                hinh.LinkHinhAnh = await CloudinaryUpload.UploadFile(item);
                await _context.HinhAnhHopDong.AddAsync(hinh);
            }
            _context.Update(nguoiDung);
            _context.Update(bds); _context.Update(phieu);
            await _context.SaveChangesAsync();
            return 1;

        }

        public IQueryable<PhongBanDTO> LayHetPhongBan()
        {
            var query = _context.PhongBan.AsNoTracking()
                .Include(x => x.TruongPhong)
                .Include(x=>x.ThanhVienPhongBan)
                ;
            return query.Where(x => x.TrangThai != Enums.TrangThaiPhongBan.KHOA).Select(x => PhongBanDTO.FromEntity(x));
        }

        public IQueryable<PhieuXemNha> LayKhachHangByNVId(int nhanVienId)
        {
            var query = _context.PhieuXemNha
                .Include(x => x.PhieuXemNhaBatDongSan)
                .ThenInclude(y => y.BatDongSan)
                .ThenInclude(z => z.HinhAnhBatDongSan)
                .AsNoTracking();
            return query.Where(x => x.NhanVienDanKhachId == nhanVienId && x.TrangThai == Enums.TrangThaiPhieuXemNha.DANGCHAMSOC);
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

        public async Task<PhieuXemNhaDTO> SuaKhachHang(PhieuXemNhaDTO phieuXem)
        {
            var phieuXemSua = await _context.PhieuXemNha.FindAsync(phieuXem.Id);
            phieuXemSua.GhiChu = phieuXem.GhiChu;
            phieuXemSua.Facebook = phieuXem.Facebook;
            phieuXemSua.SoCanCuocKhachHang = phieuXem.SoCanCuocKhachHang;
            phieuXemSua.SoDienThoai = phieuXem.SoDienThoai;
            phieuXemSua.TenKhachHang = phieuXem.TenKhachHang;
            _context.Update(phieuXemSua);
            await _context.SaveChangesAsync();
            return phieuXem;
        }

        public async Task<PhieuXemNhaBatDongSan> SuaNote(PhieuXemNhaBatDongSanDTO phieuXem)
        {
            var phieuSua = await _context.PhieuXemNhaBatDongSan.FindAsync(phieuXem.Id);
            phieuSua.Note = phieuXem.Note;
            _context.Update(phieuSua);
            await _context.SaveChangesAsync();
            return phieuSua;

        }

        public async Task<PhieuXemNhaDTO> TaoMoiKhachHang(PhieuXemNhaDTO phieuXem)
        {
            phieuXem.TrangThai = Enums.TrangThaiPhieuXemNha.DANGCHAMSOC;
            phieuXem.NgayTao = DateTime.Now;
            await _context.AddAsync(phieuXem.ToEntity());
            await _context.SaveChangesAsync();
            return phieuXem;
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

        public async Task<PhieuXemNhaDTO> XoaKhachHang(int phieuXemId)
        {
            if (_context.HopDongMuaBatDongSan.Any(x => x.PhieuXemNhaId == phieuXemId))
            {
                return null;
            }
            var phieu = await _context.PhieuXemNha.FindAsync(phieuXemId);
            _context.Remove(phieu);
            await _context.SaveChangesAsync();
            return PhieuXemNhaDTO.FromEntity(phieu);
        }

        public async Task<PhongBanDTO> TaoPhongBan(PhongBanDTO phongBan)
        {
            phongBan.TrangThai = Enums.TrangThaiPhongBan.DANGHOATDONG;
            phongBan.HinhDaiDien = "ko";
            var phongBanThem = phongBan.ToEntity();
            await _context.AddAsync(phongBanThem);
            await _context.SaveChangesAsync();
            var nguoiDung = await _context.NguoiDung.FindAsync(phongBan.TruongPhongId);
            NguoiDungRole ng = new NguoiDungRole();
            ng.NguoiDungId = nguoiDung.Id;
            ng.RoleId = 2;
            ng.NgayTao = DateTime.Now;
            nguoiDung.PhongBanId = phongBanThem.Id;
            await _context.AddAsync(ng);
            _context.Update(nguoiDung);
            await _context.SaveChangesAsync();
            return phongBan;
        }

        public async Task<PhongBanDTO> XoaPhongBan(int phongBanId)
        {
            if(_context.NguoiDung.Any(x=>x.PhongBanId== phongBanId))
            {
                return null;
            }
            var phongBan = await _context.PhongBan.FindAsync(phongBanId);
            var roleTruongPhong =await _context.NguoiDungRole.Where(x=>x.NguoiDungId == phongBan.TruongPhongId && x.RoleId==2).FirstOrDefaultAsync();
            if (roleTruongPhong != null)
            {
                _context.Remove(roleTruongPhong);
            }
            _context.Remove(phongBan);
            await _context.SaveChangesAsync();
            return new PhongBanDTO();
        }

        public async Task<PhongBanDTO> CapNhatPhongBan(PhongBanDTO phongBan)
        {

            var phongBanRe = await _context.PhongBan.FindAsync(phongBan.Id);
            phongBanRe.TrangThai = phongBan.TrangThai;
            //phongBanRe.HinhDaiDien =
            phongBanRe.KhauHieu = phongBan.KhauHieu;
            phongBanRe.SoLuongNhanVien = phongBan.SoLuongNhanVien;
            phongBanRe.TenPhongBan = phongBan.TenPhongBan;
            if(phongBan.TruongPhongId!=phongBanRe.TruongPhongId)
            {
                var truongPhongRoleHienTai = await _context.NguoiDungRole.Where(x => x.RoleId == 2 && x.NguoiDungId == phongBanRe.TruongPhongId).FirstOrDefaultAsync();
                _context.Remove(truongPhongRoleHienTai);
                var nguoiDung = await _context.NguoiDung.FindAsync(phongBan.TruongPhongId);
                NguoiDungRole ng = new NguoiDungRole();
                ng.NguoiDungId = nguoiDung.Id;
                ng.RoleId = 2;
                ng.NgayTao = DateTime.Now;
                phongBanRe.TruongPhongId = phongBan.TruongPhongId;
                nguoiDung.PhongBanId = phongBanRe.Id;
                await _context.AddAsync(ng);
                _context.Update(nguoiDung);
            }
            _context.Update(phongBanRe);
            await _context.SaveChangesAsync();
            return PhongBanDTO.FromEntity(phongBanRe);
        }

        public IQueryable<NguoiDungDTO> LayHetNhanVienKoPhaiTruongPhong()
        {
            var query = _context.NguoiDung.AsNoTracking()
                .Include(x => x.NguoiDungRole)
                .Where(x => !x.NguoiDungRole.Any(x=>x.RoleId==2))
                ;
            return query.Select(x => NguoiDungDTO.FromEntity(x));
        }

        public IQueryable<PhieuXemNha> LayKhachHangDaChot(int nhanVienId)
        {
            var query = _context.PhieuXemNha
                .Include(x => x.PhieuXemNhaBatDongSan)
                .ThenInclude(y => y.BatDongSan)
                .ThenInclude(z => z.HinhAnhBatDongSan)
                .Include(x=>x.HopDongMuaBatDongSan)
                .ThenInclude(x=>x.AnhChupHopDong)
                .AsNoTracking();
            return query.Where(x => x.NhanVienDanKhachId == nhanVienId && x.TrangThai == Enums.TrangThaiPhieuXemNha.DACHOTTHANHCONG);
        }
    }
}
