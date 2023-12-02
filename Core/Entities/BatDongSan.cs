using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class BatDongSan : BaseEntity
    {
        public string TenChuNha { get; set; }
        public int GiaBan { get; set; }
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
    }
}
