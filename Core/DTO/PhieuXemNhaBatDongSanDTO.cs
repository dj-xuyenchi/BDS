using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class PhieuXemNhaBatDongSanDTO
    {
        public int Id { get; set; }
        public int BatDongSanId { get; set; }
        public virtual BatDongSan? BatDongSan { get; set; }
        public int PhieuXemNhaId { get; set; }
        public virtual PhieuXemNha? PhieuXemNha { get; set; }
        public DateTime NgayXem { get; set; }
        public string? Note { get; set; }
        public int? SortNumber { get; set; }
    }
}
