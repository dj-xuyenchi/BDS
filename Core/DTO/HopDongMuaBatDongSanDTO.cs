using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class HopDongMuaBatDongSanDTO
    {
        public int Id { get; set; }
        public long GiaBan { get; set; }
        public string NguoiLamChung { get; set; }
        public string CanCuocNguoiLamChung { get; set; }
        public string NoiCongChung { get; set; }
        public int NguoiChotId { get; set; }
        public virtual NguoiDung NguoiChot { get; set; }
        public int BatDongSanId { get; set; }
        public virtual BatDongSan BatDongSan { get; set; }
        public int PhieuXemNhaId { get; set; }
        public virtual PhieuXemNha PhieuXemNha { get; set; }
        public DateTime NgayChot { get; set; }
        public virtual IEnumerable<HinhAnhHopDong> AnhChupHopDong { get; set; }
        public static HopDongMuaBatDongSanDTO FromEntity(HopDongMuaBatDongSan entity)
        {
            return new HopDongMuaBatDongSanDTO()
            {
                Id = entity.Id,
                GiaBan = entity.GiaBan,
                NguoiLamChung = entity.NguoiLamChung,
                CanCuocNguoiLamChung = entity.CanCuocNguoiLamChung,
                NoiCongChung = entity.NoiCongChung,
                NguoiChotId = entity.NguoiChotId,
                NguoiChot = entity.NguoiChot,
                BatDongSan = entity.BatDongSan,
                BatDongSanId = entity.BatDongSanId,
                PhieuXemNha = entity.PhieuXemNha,
                PhieuXemNhaId = entity.PhieuXemNhaId,
                NgayChot = entity.NgayChot,
                AnhChupHopDong = entity.AnhChupHopDong,
            };
        }
        public HopDongMuaBatDongSan ToEntity()
        {
            return new HopDongMuaBatDongSan()
            {
                Id = this.Id,
                GiaBan = this.GiaBan,
                NguoiLamChung = this.NguoiLamChung,
                CanCuocNguoiLamChung = this.CanCuocNguoiLamChung,
                NoiCongChung = this.NoiCongChung,
                NguoiChotId = this.NguoiChotId,
                NguoiChot = this.NguoiChot,
                BatDongSan = this.BatDongSan,
                BatDongSanId = this.BatDongSanId,
                PhieuXemNha = this.PhieuXemNha,
                PhieuXemNhaId = this.PhieuXemNhaId,
                NgayChot = this.NgayChot,
                AnhChupHopDong = this.AnhChupHopDong,
            };
        }
    }
}
