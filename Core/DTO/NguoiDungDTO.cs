using Core.Entities;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class NguoiDungDTO
    {
        public int Id { get; set; }
        public string TenTaiKhoan { get; set; }
        public string MatKhau { get; set; }
        public string HoTenNguoiDung { get; set; }
        public string? SoDienThoai { get; set; }
        public DateTime NgayThangNamSinh { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime NgayCapNhat { get; set; }
        public int SoBatDongSanDaBan { get; set; }
        public string? HinhDaiDien { get; set; }
        public string? SoCanCuoc { get; set; }
        public string? DiaChi { get; set; }
        public int? PhongBanId { get; set; }
        public virtual PhongBan? PhongBan { get; set; }
        public TrangThaiNguoiDung TrangThai { get; set; }
        public virtual IEnumerable<HopDongMuaBatDongSan>? HopDongMuaBatDongSan { get; set; }
        public virtual IEnumerable<BaiHocDaoTao>? BaiHocDaoTao { get; set; }
        public virtual IEnumerable<TinBan>? TinBan { get; set; }
        public virtual IEnumerable<NguoiDungRole>? NguoiDungRole { get; set; }
        public virtual IEnumerable<BatDongSan>? DauChuTao { get; set; }
        public static NguoiDungDTO FromEntity(NguoiDung entity)
        {
            return new NguoiDungDTO()
            {
                Id = entity.Id,
                TenTaiKhoan = entity.TenTaiKhoan,
                MatKhau = entity.MatKhau,
                HoTenNguoiDung = entity.HoTenNguoiDung,
                SoDienThoai = entity.SoDienThoai,
                NgayThangNamSinh = entity.NgayThangNamSinh,
                SoBatDongSanDaBan = entity.SoBatDongSanDaBan,
                HinhDaiDien = entity.HinhDaiDien,
                SoCanCuoc = entity.SoCanCuoc,
                DiaChi = entity.DiaChi,
                PhongBan = entity.PhongBan,
                PhongBanId = entity.PhongBanId,
                TrangThai = entity.TrangThai,
                NgayTao = entity.NgayTao,
                NgayCapNhat = entity.NgayCapNhat,
            };
        }
        public NguoiDung ToEntity()
        {
            return new NguoiDung()
            {
                Id = this.Id,
                TenTaiKhoan = this.TenTaiKhoan,
                MatKhau = this.MatKhau,
                HoTenNguoiDung = this.HoTenNguoiDung,
                SoDienThoai = this.SoDienThoai,
                NgayThangNamSinh = this.NgayThangNamSinh,
                SoBatDongSanDaBan = this.SoBatDongSanDaBan,
                HinhDaiDien = this.HinhDaiDien,
                SoCanCuoc = this.SoCanCuoc,
                DiaChi = this.DiaChi,
                PhongBan = this.PhongBan,
                PhongBanId = this.PhongBanId,
                TrangThai = this.TrangThai,
                NgayTao = this.NgayTao,
                NgayCapNhat = this.NgayCapNhat,
            };
        }
    }
}
