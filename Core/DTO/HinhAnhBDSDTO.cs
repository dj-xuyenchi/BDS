using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class HinhAnhBDSDTO
    {
        public int Id { get; set; }
        public string LinkHinhAnh { get; set; }
        public int BatDongSanId { get; set; }
        public virtual BatDongSan? BatDongSan { get; set; }
        public DateTime NgayTao { get; set; }
        public static HinhAnhBDSDTO FromEntity(HinhAnhBatDongSan entity)
        {
            return new HinhAnhBDSDTO()
            {
                Id = entity.Id,
                LinkHinhAnh = entity.LinkHinhAnh,
                BatDongSanId = entity.BatDongSanId,
                BatDongSan = entity.BatDongSan,
                NgayTao = entity.NgayTao
            };
        }
        public HinhAnhBatDongSan ToEntity()
        {
            return new HinhAnhBatDongSan()
            {
                Id = this.Id,
                LinkHinhAnh = this.LinkHinhAnh,
                BatDongSanId = this.BatDongSanId,
                BatDongSan = this.BatDongSan,
                NgayTao = this.NgayTao
            };
        }
    }
}
