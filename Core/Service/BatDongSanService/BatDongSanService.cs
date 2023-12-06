using Core.Data;
using Core.DTO;
using Core.Entities;
using Core.Enums;
using Core.RequestModel;
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
          Filter filter
            )
        {
            var query = _context.BatDongSan
                .Include(x => x.HinhAnhBatDongSan)
                .Include(x => x.DauChuTao)
                .AsNoTracking();
            if (filter.giaBan.HasValue)
            {
                query = query.Where(x => x.GiaBan <= filter.giaBan.Value);
            }
            if (!string.IsNullOrEmpty(filter.tinhCode))
            {
                query = query.Where(x => x.ProvinceCode == filter.tinhCode);
            }
            if (!string.IsNullOrEmpty(filter.huyenCode))
            {
                query = query.Where(x => x.DistrictCode == filter.huyenCode);
            }
            if (filter.namXayDung.HasValue)
            {
                query = query.Where(x => x.NamXayDung >= filter.namXayDung.Value);
            }
            if (filter.dienTich.HasValue)
            {
                query = query.Where(x => x.DienTich >= filter.dienTich.Value);
            }
            if (filter.soPhongNgu.HasValue)
            {
                query = query.Where(x => x.SoPhongNgu >= filter.soPhongNgu.Value);
            }
            if (filter.soPhongVeSinh.HasValue)
            {
                query = query.Where(x => x.SoPhongVeSinh >= filter.soPhongVeSinh.Value);
            }
            if (filter.chieuNgang.HasValue)
            {
                query = query.Where(x => x.ChieuNgang >= filter.chieuNgang.Value);
            }
            if (filter.chieuDai.HasValue)
            {
                query = query.Where(x => x.ChieuNgang >= filter.chieuDai.Value);
            }
            if (filter.dienTichSuDung.HasValue)
            {
                query = query.Where(x => x.DienTichSuDung >= filter.dienTichSuDung.Value);
            }
            if (filter.loaiBatDongSan != null)
            {
                query = query.Where(x => filter.loaiBatDongSan.Any(y => y == x.LoaiBatDongSan));
            }
            if (filter.min.HasValue)
            {
                query = query.Where(x => x.GiaBan >= filter.min && x.GiaBan <= filter.max);
            }
            if (filter.trangThai.HasValue)
            {
                query = query.Where(x => x.TrangThai == filter.trangThai);
            }
            if (!string.IsNullOrEmpty(filter.keyword))
            {
            }
            return query.Where(x => x.TrangThai != TrangThaiBatDongSan.LOCK).Select(x => BatDongSanDTO.FromEntity(x));
        }

        public async Task<BatDongSanDTO> SuaBDS(BatDongSanDTO data)
        {
            var bds = await _context.BatDongSan.FindAsync(data.Id);
            bds.NgayCapNhat = DateTime.Now;
            bds.TenChuNha = data.TenChuNha;
            bds.SoDienThoaiChuNha = data.TenChuNha;
            bds.GiaBan = data.GiaBan;
            bds.GiaTriHoaHong = data.GiaTriHoaHong;
            bds.GiaTriHoaHongChiaNhanVien = data.GiaTriHoaHongChiaNhanVien;
            bds.NamXayDung = data.NamXayDung;
            bds.SoPhongNgu = data.SoPhongNgu;
            bds.SoPhongVeSinh = data.SoPhongVeSinh;
            bds.ChieuDai = data.ChieuDai;
            bds.ChieuNgang = data.ChieuNgang;
            bds.DienTich = data.DienTich;
            bds.DienTichSuDung = data.DienTichSuDung;
            bds.DiaChi = data.DiaChi;
            bds.DiaChiGoogleMap = data.DiaChiGoogleMap;
            bds.MoTaChiTiet = data.MoTaChiTiet;
            bds.LoaiBatDongSan = (LoaiBatDongSan)data.LoaiBatDongSan;
            _context.BatDongSan.Update(bds);
            await _context.SaveChangesAsync();
            return BatDongSanDTO.FromEntity(bds);
        }

        public async Task<BatDongSanDTO> ThemBDS(BatDongSanDTO data)
        {
            HinhAnhBatDongSan hinh = new HinhAnhBatDongSan();
            hinh.NgayTao = DateTime.Now;
            hinh.LinkHinhAnh = "https://png.pngtree.com/png-vector/20190820/ourlarge/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg";
            var bds = data.ToEntity();
            await _context.BatDongSan.AddAsync(bds);
            await _context.SaveChangesAsync();
            hinh.BatDongSanId = bds.Id;
            await _context.HinhAnhBatDongSan.AddAsync(hinh);
            await _context.SaveChangesAsync();
            return data;
        }

        public async Task<BatDongSanDTO> XoaBDS(int bdsId)
        {
            var bds = await _context.BatDongSan.FindAsync(bdsId);
            bds.TrangThai = TrangThaiBatDongSan.LOCK;
            _context.BatDongSan.Update(bds);
            await _context.SaveChangesAsync();
            return BatDongSanDTO.FromEntity(bds);
        }
    }
}
