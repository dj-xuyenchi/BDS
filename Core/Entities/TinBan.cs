﻿using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class TinBan : BaseEntity
    {
        public string TieuDe { get; set; }
        public string MoTa { get; set; }
        public int BatDongSanId { get; set; }
        public virtual BatDongSan? BatDongSan { get; set; }
        public int NguoiDangId { get; set; }
        public virtual NguoiDung? NguoiDang { get; set; }
        public long GiaBan { get; set; }
        public string SoDienThoai { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public TrangThaiTinBan TrangThai { get; set; }
        public bool? TinCuaCongTy { get; set; }
        public DateTime? NgayHetHan { get; set; }
    }
}
