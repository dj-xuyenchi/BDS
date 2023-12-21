using Core.Data;
using Core.Entities;
using Core.ResponModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.ThongKeService
{
    public class ThongKe : IThongKe
    {
        private readonly BDSContext _context = new BDSContext();
        public async Task<ThongKeModel> LayThongKe(int nam)
        {
            ThongKeModel thongKe = new ThongKeModel();
            List<int> soKhachhangMoi = new List<int>();
            List<int> soBDSChot = new List<int>();
         //   f
            return thongKe;
        }

        public async Task<ThongKeToanCongTyModel> LayThongKeCty(int nam)
        {
            ThongKeToanCongTyModel thongKe = new ThongKeToanCongTyModel();
            List<int> soKhach = new List<int>();
            List<int> soBdsChot = new List<int>();
            for (int i = 1; i < 13; i++)
            {
                int khach = _context.PhieuXemNha
                .Include(x => x.NhanVienDanKhach)
                  .Where(x => x.TrangThai == Enums.TrangThaiPhieuXemNha.DANGCHAMSOC && x.NgayTao.Year == nam && x.NgayTao.Month == i)
                  .Count();
                int phieu = _context.PhieuXemNha
                .Include(x => x.NhanVienDanKhach)
                    .Where(x => x.TrangThai == Enums.TrangThaiPhieuXemNha.DACHOTTHANHCONG && x.NgayTao.Year == nam && x.NgayTao.Month == i)
                    .Count();
                soBdsChot.Add(phieu);
                soKhach.Add(khach);
            }
            thongKe.SoBDSChot = soBdsChot;
            thongKe.SoKhachHangMoi= soKhach;
            thongKe.SoDauChu = _context.NguoiDungRole.Where(x => x.RoleId == 3).Count();
            thongKe.SoNhanVien = _context.NguoiDungRole.Where(x => x.RoleId == 1).Count();
            thongKe.SoTruongPhong = _context.NguoiDungRole.Where(x => x.RoleId == 3).Count();
            thongKe.TopSeller = TopSeller();
            return thongKe;
        }
        private List<NguoiDung> TopSeller()
        {
            List<NguoiDung> re = _context.NguoiDung
                .Include(x=>x.PhongBan)
                .Include(x=>x.NguoiDungRole)
    //            .ThenInclude(x=>x.Role)
                .OrderBy(x=>x.SoBatDongSanDaBan)
                .Take(10)
                .ToList();
            return re;

        }
    }
}
