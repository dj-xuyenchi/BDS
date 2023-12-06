using Core.Data;
using Core.DTO;
using Core.Enums;
using Core.RequestModel;
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
                Include(x => x.BatDongSan).
                ThenInclude(x => x.HinhAnhBatDongSan)
                .AsNoTracking();
            if (filter.giaBan.HasValue)
            {
                query = query.Where(x => x.BatDongSan.GiaBan <= filter.giaBan.Value);
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
            }
            return query.Select(x => TinBanDTO.FromEntity(x));
        }

        public async Task<TinBanDTO> TaoTin(TinBanDTO tinBan)
        {
            tinBan.NgayTao = DateTime.Now;
            tinBan.TrangThai = TrangThaiTinBan.DANGHIENTHI;
            tinBan.NguoiDangId = 1;
            await _context.AddAsync(tinBan.ToEntity());
            await _context.SaveChangesAsync();
            return tinBan;
        }
    }
}
