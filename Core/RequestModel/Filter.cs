using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.RequestModel
{
    public class Filter
    {
        public double? giaBan { get; set; }
        public string? tinhCode { get; set; }
        public string? huyenCode { get; set; }
        public int? namXayDung { get; set; }
        public double? dienTich { get; set; }
        public int? soPhongNgu { get; set; }
        public int? soPhongVeSinh { get; set; }
        public double? chieuNgang { get; set; }
        public double? chieuDai { get; set; }
        public double? dienTichSuDung { get; set; }
        public List<LoaiBatDongSan>? loaiBatDongSan { get; set; }
        public TrangThaiBatDongSan? trangThai { get; set; }
        public string? keyword { get; set; }
        public long? min { get; set; }
        public long? max { get; set; }
    }
}
