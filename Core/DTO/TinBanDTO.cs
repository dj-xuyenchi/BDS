using Core.Entities;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class TinBanDTO
    {
        public int Id { get; set; }
        public string TieuDe { get; set; }
        public string MoTa { get; set; }
        public int BatDongSanId { get; set; }
        public virtual BatDongSan? BatDongSan { get; set; }
        public int NguoiDangId { get; set; }
        public virtual NguoiDung? NguoiDang { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public TrangThaiTinBan TrangThai { get; set; }
        public static TinBanDTO FromEntity(TinBan entity)
        {
            return new TinBanDTO()
            {
                Id = entity.Id,
                TieuDe = entity.TieuDe,
                MoTa = entity.MoTa,
                BatDongSanId = entity.BatDongSanId,
                BatDongSan = entity.BatDongSan,
                NguoiDangId = entity.NguoiDangId,
                NguoiDang = entity.NguoiDang,
                NgayTao = entity.NgayTao,
                NgayCapNhat = entity.NgayCapNhat,
                TrangThai = entity.TrangThai
            };
        }
        public TinBan ToEntity()
        {
            return new TinBan()
            {
                Id = this.Id,
                TieuDe = this.TieuDe,
                MoTa = this.MoTa,
                NguoiDangId = this.NguoiDangId,
                NguoiDang = this.NguoiDang,
                NgayTao = this.NgayTao,
                NgayCapNhat = this.NgayCapNhat,
                TrangThai = this.TrangThai,
                BatDongSanId = this.BatDongSanId,
                BatDongSan = this.BatDongSan,
            };
        }
    }
}
