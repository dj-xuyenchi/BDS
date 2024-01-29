using Core.Data;
using Core.DTO;
using Core.Entities;
using Core.Enums;
using Core.plugins;
using Core.RequestModel;
using Core.ResponModel;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.TinBanService
{
    public class TinBanService : ITinBanService
    {
        private readonly BDSContext _context;

        public TinBanService()
        {
            _context = new BDSContext();
        }
        public IQueryable<TinBanDTO> LayHetTinBan(Filter filter)
        {
            var query = _context.
                TinBan.
                Include(x => x.NguoiDang).
                Include(x => x.BatDongSan).
                ThenInclude(x => x.HinhAnhBatDongSan)
                .AsNoTracking();
            if (filter.giaBan.HasValue)
            {
                query = query.Where(x => x.GiaBan <= filter.giaBan.Value);
            }
            if (!string.IsNullOrEmpty(filter.tinhCode))
            {
                query = query.Where(x => x.BatDongSan.ProvinceCode == filter.tinhCode);
            }
            if (!string.IsNullOrEmpty(filter.huyenCode))
            {
                query = query.Where(x => x.BatDongSan.DistrictCode == filter.huyenCode);
            }
            if (filter.namXayDung.HasValue)
            {
                query = query.Where(x => x.BatDongSan.NamXayDung >= filter.namXayDung.Value);
            }
            if (filter.dienTich.HasValue)
            {
                query = query.Where(x => x.BatDongSan.DienTich >= filter.dienTich.Value);
            }
            if (filter.soPhongNgu.HasValue)
            {
                query = query.Where(x => x.BatDongSan.SoPhongNgu >= filter.soPhongNgu.Value);
            }
            if (filter.soPhongVeSinh.HasValue)
            {
                query = query.Where(x => x.BatDongSan.SoPhongVeSinh >= filter.soPhongVeSinh.Value);
            }
            if (filter.chieuNgang.HasValue)
            {
                query = query.Where(x => x.BatDongSan.ChieuNgang >= filter.chieuNgang.Value);
            }
            if (filter.chieuDai.HasValue)
            {
                query = query.Where(x => x.BatDongSan.ChieuNgang >= filter.chieuDai.Value);
            }
            if (filter.dienTichSuDung.HasValue)
            {
                query = query.Where(x => x.BatDongSan.DienTichSuDung >= filter.dienTichSuDung.Value);
            }
            if (filter.loaiBatDongSan != null)
            {
                query = query.Where(x => filter.loaiBatDongSan.Any(y => y == x.BatDongSan.LoaiBatDongSan));
            }
            if (filter.trangThai.HasValue)
            {
                query = query.Where(x => x.BatDongSan.TrangThai == filter.trangThai);
            }
            if (filter.min.HasValue)
            {
                query = query.Where(x => x.BatDongSan.GiaBan >= filter.min && x.BatDongSan.GiaBan <= filter.max);
            }
            if (!string.IsNullOrEmpty(filter.keyword))
            {
                query = query.Where(x => x.MoTa.ToLower().Contains(filter.keyword.ToLower()));
                query = query.Where(x => x.TieuDe.ToLower().Contains(filter.keyword.ToLower()));
            }
            return query.Where(x => x.BatDongSan.LoaiBatDongSan != LoaiBatDongSan.KHACHDANG && x.TrangThai == TrangThaiTinBan.DANGHIENTHI && x.BatDongSan.TrangThai != TrangThaiBatDongSan.DABAN).Select(x => TinBanDTO.FromEntity(x));
        }

        public async Task<KhuVucFilterModel> LayKhuVucFilterModel()
        {
            KhuVucFilterModel res = new KhuVucFilterModel();
            res.Districts = LayDistricte().ToList();
            res.Provinces = LayProvince().ToList();
            res.Wards = LayWard().ToList();
            return res;

        }
        private IQueryable<Province> LayProvince()
        {
            var query = _context.Province;
            return query;
        }
        private IQueryable<Ward> LayWard()
        {
            var query = _context.Ward;
            return query;
        }
        private IQueryable<District> LayDistricte()
        {
            var query = _context.District;
            return query;
        }
        public async Task<TinBanDTO> LayTinById(int tinBanId)
        {
            return TinBanDTO.FromEntity(await _context.TinBan.Include(x => x.BatDongSan).ThenInclude(x => x.HinhAnhBatDongSan).Include(x => x.NguoiDang).Where(x => x.Id == tinBanId).FirstOrDefaultAsync());
        }

        public async Task<TinBanDTO> SuaTin(TinBanDTO tinBan)
        {
            var tin = await _context.TinBan.FindAsync(tinBan.Id);
            tin.NgayCapNhat = DateTime.Now;
            tin.MoTa = tinBan.MoTa;
            tin.GiaBan = tinBan.GiaBan;
            tin.TieuDe = tinBan.TieuDe;
            tin.BatDongSanId = tinBan.BatDongSanId;
            tin.SoDienThoai = tinBan.SoDienThoai;
            _context.TinBan.Update(tin);
            await _context.SaveChangesAsync();
            return tinBan;
        }

        public async Task<TinBanDTO> TaoTin(TinBanDTO tinBan)
        {
            if (_context.TinBan.Where(x => x.NguoiDangId == tinBan.NguoiDangId).ToList().Count() > 5)
            {
                return null;
            }
            tinBan.NgayTao = DateTime.Now;
            tinBan.TrangThai = TrangThaiTinBan.DANGHIENTHI;
            tinBan.TinCuaCongTy = false;
            await _context.AddAsync(tinBan.ToEntity());
            await _context.SaveChangesAsync();
            return tinBan;
        }

        public async Task<TinBanDTO> XoaTin(int tinBanId)
        {
            var tinBan = await _context.TinBan.FindAsync(tinBanId);
            _context.TinBan.Remove(tinBan);
            await _context.SaveChangesAsync();
            return TinBanDTO.FromEntity(tinBan);
        }

        public IQueryable<TinBanDTO> LayHetTinBanWeb()
        {
            var query = _context.TinBan
                .Include(x => x.BatDongSan)
                .ThenInclude(x => x.HinhAnhBatDongSan)
                .Include(x => x.NguoiDang)
                .AsNoTracking().Where(x => x.TinCuaCongTy == true && x.TrangThai == TrangThaiTinBan.DANGHIENTHI).OrderBy(x => x.NgayTao);
            return query.OrderBy(x => x.NgayTao).Take(10).Select(x => TinBanDTO.FromEntity(x));
        }

        public async Task<int> DangTinBanKhachNgoai(TaoTinKhachNgoai tinMoi, List<IFormFile> file)
        {
            var bds = tinMoi.BatDongSan.ToEntity();
            bds.NgayTao = DateTime.Now;
            bds.GiaTriHoaHong = 0;
            bds.LoaiBatDongSan = LoaiBatDongSan.KHACHDANG;
            await _context.BatDongSan.AddAsync(bds);
            await _context.SaveChangesAsync();
            foreach (var item in file)
            {
                HinhAnhBatDongSan hinh = new HinhAnhBatDongSan();
                hinh.NgayTao = DateTime.Now;
                hinh.LinkHinhAnh = await CloudinaryUpload.UploadFile(item);
                hinh.BatDongSanId = bds.Id;
                await _context.HinhAnhBatDongSan.AddAsync(hinh);
            }
            var tinDang = tinMoi.TinBan.ToEntity();
            tinDang.TrangThai = TrangThaiTinBan.DANGCHO;
            tinDang.BatDongSanId = bds.Id;
            tinDang.TinCuaCongTy = true;
            tinDang.NgayTao = DateTime.Now;
            await _context.AddAsync(tinDang);
            await _context.SaveChangesAsync();
            return tinDang.Id;
        }

        public async Task<int> ThueDangBai(int tinBanId, int nguoiDungId, DateTime ngayHet)
        {
            var nguoiDung = await _context.NguoiDung.FindAsync(nguoiDungId);
            if (nguoiDung.SoDu == null)
            {
                return 0;
            }
            DateTime now = DateTime.Now;
            TimeSpan difference = ngayHet - now;
            int daysDifference = Math.Abs(difference.Days);
            if (daysDifference * 20000 > nguoiDung.SoDu)
            {
                return 0;
            }
            nguoiDung.SoDu -= daysDifference * 20000;
            var tinBan = await _context.TinBan.FindAsync(tinBanId);
            tinBan.NgayHetHan = ngayHet;
            tinBan.TrangThai = TrangThaiTinBan.DATRATIENCHOXETDUYET;
            _context.Update(nguoiDung);
            _context.Update(tinBan);
            await _context.SaveChangesAsync();
            return 1;
        }

        public IQueryable<TinBanDTO> LayBaiDangById(int nguoiDungId)
        {
            var query = _context.TinBan.Include(x => x.BatDongSan).ThenInclude(x => x.HinhAnhBatDongSan).Where(x => x.NguoiDangId == nguoiDungId && x.BatDongSan.LoaiBatDongSan == LoaiBatDongSan.KHACHDANG);
            return query.Select(x => TinBanDTO.FromEntity(x));
        }

        public IQueryable<TinBanDTO> LayHetTinBanWebChoXetDuyet()
        {
            var query = _context.TinBan
               .Include(x => x.BatDongSan)
               .ThenInclude(x => x.HinhAnhBatDongSan)
               .Include(x => x.NguoiDang)
               .AsNoTracking().Where(x => x.TinCuaCongTy == true && x.TrangThai == TrangThaiTinBan.DATRATIENCHOXETDUYET).OrderBy(x => x.NgayTao);
            return query.OrderBy(x => x.NgayTao).Take(10).Select(x => TinBanDTO.FromEntity(x));
        }

        public async Task XacNhanTin(int tinBanId)
        {
            TinBan tinBan = await _context.TinBan.FindAsync(tinBanId);
            tinBan.TrangThai = TrangThaiTinBan.DANGHIENTHI;
            await _context.SaveChangesAsync();
        }
    }
}
