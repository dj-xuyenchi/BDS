using Core.Data;
using Core.DTO;
using Core.Enums;
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
        public IQueryable<TinBanDTO> LayHetTinBan(double? giaBan, string? tinhCode, string? huyenCode, int? namXayDung, double? dienTich, int? soPhongNgu, int? soPhongVeSinh, double? chieuNgang, double? chieuDai, double? dienTichSuDung, LoaiBatDongSan? loaiBatDongSan, TrangThaiBatDongSan? trangThai, string? keyword)
        {
            var query = _context.
                TinBan.
                Include(x => x.BatDongSan)
                .AsNoTracking();
            if (giaBan.HasValue)
            {
                query = query.Where(x => x.BatDongSan.GiaBan <= giaBan.Value);
            }
            if (!string.IsNullOrEmpty(tinhCode))
            {
                query = query.Where(x => x.BatDongSan.ProvinceCode == tinhCode);
            }
            if (!string.IsNullOrEmpty(huyenCode))
            {
                query = query.Where(x => x.BatDongSan.DistrictCode == huyenCode);
            }
            if (namXayDung.HasValue)
            {
                query = query.Where(x => x.BatDongSan.NamXayDung >= namXayDung.Value);
            }
            if (dienTich.HasValue)
            {
                query = query.Where(x => x.BatDongSan.DienTich >= dienTich.Value);
            }
            if (soPhongNgu.HasValue)
            {
                query = query.Where(x => x.BatDongSan.SoPhongNgu >= soPhongNgu.Value);
            }
            if (soPhongVeSinh.HasValue)
            {
                query = query.Where(x => x.BatDongSan.SoPhongVeSinh >= soPhongVeSinh.Value);
            }
            if (chieuNgang.HasValue)
            {
                query = query.Where(x => x.BatDongSan.ChieuNgang >= chieuNgang.Value);
            }
            if (chieuDai.HasValue)
            {
                query = query.Where(x => x.BatDongSan.ChieuNgang >= chieuDai.Value);
            }
            if (dienTichSuDung.HasValue)
            {
                query = query.Where(x => x.BatDongSan.DienTichSuDung >= dienTichSuDung.Value);
            }
            if (loaiBatDongSan.HasValue)
            {
                query = query.Where(x => x.BatDongSan.LoaiBatDongSan == loaiBatDongSan);
            }
            if (trangThai.HasValue)
            {
                query = query.Where(x => x.BatDongSan.TrangThai == trangThai);
            }
            if (!string.IsNullOrEmpty(keyword))
            {
            }
            return query.Select(x => TinBanDTO.FromEntity(x));
        }
    }
}
