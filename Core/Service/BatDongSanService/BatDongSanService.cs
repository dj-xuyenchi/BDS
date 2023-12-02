using Core.Data;
using Core.DTO;
using Core.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.BatDongSanService
{
    public class BatDongSanService : IBatDongSanService
    {
        private readonly BDSContext _context;

        public BatDongSanService()
        {
            _context = new BDSContext();
        }

        public IQueryable<BatDongSanDTO> LayHetBatDongSan(
             double? giaBan,
            string? tinhCode,
            string? huyenCode,
            int? namXayDung,
            double? dienTich,
            int? soPhongNgu,
            int? soPhongVeSinh,
            double? chieuNgang,
            double? chieuDai,
            double? dienTichSuDung,
            LoaiBatDongSan? loaiBatDongSan,
            TrangThaiBatDongSan? trangThai,
            string? keyword
            )
        {
            var query = _context.BatDongSan.AsNoTracking();
            if (giaBan.HasValue)
            {
                query = query.Where(x => x.GiaBan <= giaBan.Value);
            }
            if (!string.IsNullOrEmpty(tinhCode))
            {
                query = query.Where(x => x.ProvinceCode == tinhCode);
            }
            if (!string.IsNullOrEmpty(huyenCode))
            {
                query = query.Where(x => x.DistrictCode == huyenCode);
            }
            if (namXayDung.HasValue)
            {
                query = query.Where(x => x.NamXayDung >= namXayDung.Value);
            }
            if (dienTich.HasValue)
            {
                query = query.Where(x => x.DienTich >= dienTich.Value);
            }
            if (soPhongNgu.HasValue)
            {
                query = query.Where(x => x.SoPhongNgu >= soPhongNgu.Value);
            }
            if (soPhongVeSinh.HasValue)
            {
                query = query.Where(x => x.SoPhongVeSinh >= soPhongVeSinh.Value);
            }
            if (chieuNgang.HasValue)
            {
                query = query.Where(x => x.ChieuNgang >= chieuNgang.Value);
            }
            if (chieuDai.HasValue)
            {
                query = query.Where(x => x.ChieuNgang >= chieuDai.Value);
            }
            if (dienTichSuDung.HasValue)
            {
                query = query.Where(x => x.DienTichSuDung >= dienTichSuDung.Value);
            }
            if (loaiBatDongSan.HasValue)
            {
                query = query.Where(x => x.LoaiBatDongSan == loaiBatDongSan);
            }
            if (trangThai.HasValue)
            {
                query = query.Where(x => x.TrangThai == trangThai);
            }
            if (!string.IsNullOrEmpty(keyword))
            {
            }
            return query.Select(x => BatDongSanDTO.FromEntity(x));
        }
    }
}
