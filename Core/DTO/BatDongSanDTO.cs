using Core.Entities;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class BatDongSanDTO
    {
        public int Id { get; set; }
        public string TenChuNha { get; set; }
        public long GiaBan { get; set; }
        public double GiaTriHoaHong { get; set; }
        // true thì giá trị hoa hồng sẽ là % false thì là tiền mặt
        public bool IsPhanTramTienMat { get; set; }
        public double GiaTriHoaHongChiaNhanVien { get; set; }
        // true thì giá trị hoa hồng sẽ là % false thì là tiền mặt
        public bool IsPhanTramTienMatChiaNhanVien { get; set; }
        public string DiaChi { get; set; }
        public string DiaChiGoogleMap { get; set; }
        public int NamXayDung { get; set; }
        public double DienTich { get; set; }
        public int SoPhongNgu { get; set; }
        public int SoPhongVeSinh { get; set; }
        public PhapLy PhapLy { get; set; }
        public double ChieuNgang { get; set; }
        public double ChieuDai { get; set; }
        public double DienTichSuDung { get; set; }
        public string? MoTaChiTiet { get; set; }
        public string SoDienThoaiLienHe { get; set; }
        public string SoDienThoaiChuNha { get; set; }
        public string ProvinceCode { get; set; }
        public string DistrictCode { get; set; }
        public string WardCode { get; set; }
        public int DauChuTaoId { get; set; }
        public virtual NguoiDung DauChuTao { get; set; }
        public TrangThaiBatDongSan TrangThai { get; set; }
        public LoaiBatDongSan LoaiBatDongSan { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public DateTime? NgayBan { get; set; }
        public virtual IEnumerable<HinhAnhBatDongSan> HinhAnhBatDongSan { get; set; }
        public virtual IEnumerable<PhieuXemNhaBatDongSan> PhieuXemNhaBatDongSan { get; set; }
        public virtual IEnumerable<HopDongMuaBatDongSan> HopDongMuaBatDongSan { get; set; }
        public virtual IEnumerable<TinBan> TinBan { get; set; }
        public static BatDongSanDTO FromEntity(BatDongSan entity)
        {
            return new BatDongSanDTO()
            {
                Id = entity.Id,
                TenChuNha = entity.TenChuNha,
                GiaBan = entity.GiaBan,
                GiaTriHoaHong = entity.GiaTriHoaHong,
                IsPhanTramTienMat = entity.IsPhanTramTienMat,
                GiaTriHoaHongChiaNhanVien = entity.GiaTriHoaHongChiaNhanVien,
                IsPhanTramTienMatChiaNhanVien = entity.IsPhanTramTienMatChiaNhanVien,
                DiaChi = entity.DiaChi,
                DiaChiGoogleMap = entity.DiaChiGoogleMap,
                NamXayDung = entity.NamXayDung,
                DienTich = entity.DienTich,
                SoPhongNgu = entity.SoPhongNgu,
                SoPhongVeSinh = entity.SoPhongVeSinh,
                PhapLy = entity.PhapLy,
                ChieuDai = entity.ChieuDai,
                ChieuNgang = entity.ChieuNgang,
                DienTichSuDung = entity.DienTichSuDung,
                MoTaChiTiet = entity.MoTaChiTiet,
                SoDienThoaiLienHe = entity.SoDienThoaiLienHe,
                SoDienThoaiChuNha = entity.SoDienThoaiChuNha,
                ProvinceCode = entity.ProvinceCode,
                DistrictCode = entity.DistrictCode,
                WardCode = entity.WardCode,
                DauChuTaoId = entity.DauChuTaoId,
                DauChuTao = entity.DauChuTao,
                TrangThai = entity.TrangThai,
                LoaiBatDongSan = entity.LoaiBatDongSan,
                NgayBan = entity.NgayBan,
                NgayCapNhat = entity.NgayCapNhat,
                NgayTao = entity.NgayTao,
                HinhAnhBatDongSan=entity.HinhAnhBatDongSan
            };
        }
        public BatDongSan ToEntity()
        {
            return new BatDongSan()
            {
                Id = this.Id,
                TenChuNha = this.TenChuNha,
                GiaBan = this.GiaBan,
                GiaTriHoaHong = this.GiaTriHoaHong,
                IsPhanTramTienMat = this.IsPhanTramTienMat,
                GiaTriHoaHongChiaNhanVien = this.GiaTriHoaHongChiaNhanVien,
                IsPhanTramTienMatChiaNhanVien = this.IsPhanTramTienMatChiaNhanVien,
                DiaChi = this.DiaChi,
                DiaChiGoogleMap = this.DiaChiGoogleMap,
                NamXayDung = this.NamXayDung,
                DienTich = this.DienTich,
                SoPhongNgu = this.SoPhongNgu,
                SoPhongVeSinh = this.SoPhongVeSinh,
                PhapLy = this.PhapLy,
                ChieuDai = this.ChieuDai,
                ChieuNgang = this.ChieuNgang,
                DienTichSuDung = this.DienTichSuDung,
                MoTaChiTiet = this.MoTaChiTiet,
                SoDienThoaiLienHe = this.SoDienThoaiLienHe,
                SoDienThoaiChuNha = this.SoDienThoaiChuNha,
                ProvinceCode = this.ProvinceCode,
                DistrictCode = this.DistrictCode,
                WardCode = this.WardCode,
                DauChuTaoId = this.DauChuTaoId,
                DauChuTao = this.DauChuTao,
                TrangThai = this.TrangThai,
                LoaiBatDongSan = this.LoaiBatDongSan,
                NgayBan = this.NgayBan,
                NgayCapNhat = this.NgayCapNhat,
                NgayTao = this.NgayTao
            };
        }
    }
}
