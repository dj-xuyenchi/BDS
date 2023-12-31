﻿using Core.Entities;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO
{
    public class BaiHocDaoTaoDTO
    {
        public int Id { get; set; }
        public string LinkBaiHoc { get; set; }
        public string MoTa { get; set; }
        public string TenBaiHoc { get; set; }
        public DateTime NgayTao { get; set; }
        public int LoaiBaiHoc { get; set; }
        public string LinkHinhAnh { get; set; }
        public TrangThaiBaiHoc TrangThai { get; set; }
        public int NguoiTaoId { get; set; }
        public virtual NguoiDung? NguoiTao { get; set; }
        public string? FileKienThuc { get; set; }
        public static BaiHocDaoTaoDTO FromEntity(BaiHocDaoTao entity)
        {
            return new BaiHocDaoTaoDTO()
            {
                Id = entity.Id,
                LinkBaiHoc = entity.LinkBaiHoc,
                MoTa = entity.MoTa,
                TenBaiHoc = entity.TenBaiHoc,
                NgayTao = entity.NgayTao,
                LoaiBaiHoc = (int)entity.LoaiBaiHoc,
                TrangThai = entity.TrangThai,
                NguoiTaoId = entity.NguoiTaoId,
                NguoiTao = entity.NguoiTao,
                FileKienThuc = entity.FileKienThuc,
                LinkHinhAnh = entity.LinkHinhAnh
            };
        }
        public BaiHocDaoTao ToEntity()
        {
            return new BaiHocDaoTao()
            {
                Id = this.Id,
                LinkBaiHoc = this.LinkBaiHoc,
                MoTa = this.MoTa,
                TenBaiHoc = this.TenBaiHoc,
                NgayTao = this.NgayTao,
                LoaiBaiHoc = (LoaiBaiHoc)this.LoaiBaiHoc,
                TrangThai = this.TrangThai,
                NguoiTaoId = this.NguoiTaoId,
                NguoiTao = this.NguoiTao,
                FileKienThuc = this.FileKienThuc,
                LinkHinhAnh = this.LinkHinhAnh
            };
        }
    }
}
