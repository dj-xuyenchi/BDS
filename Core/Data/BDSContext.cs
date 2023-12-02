using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data
{
    public class BDSContext : DbContext
    {

        public DbSet<AdministrativeRegion> AdministrativeRegion { get; set; }
        public DbSet<AdministrativeUnits> AdministrativeUnits { get; set; }
        public DbSet<District> District { get; set; }
        public DbSet<Province> Province { get; set; }
        public DbSet<Ward> Ward { get; set; }
        public DbSet<BatDongSan> BatDongSan { get; set; }
        public DbSet<HinhAnhBatDongSan> HinhAnhBatDongSan { get; set; }
        public DbSet<HinhAnhHopDong> HinhAnhHopDong { get; set; }
        public DbSet<HopDongMuaBatDongSan> HopDongMuaBatDongSan { get; set; }
        public DbSet<NguoiDung> NguoiDung { get; set; }
        public DbSet<PhongBan> PhongBan { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<TinBan> TinBan { get; set; }
        public DbSet<PhieuXemNha> PhieuXemNha { get; set; }
        public DbSet<PhieuXemNhaBatDongSan> PhieuXemNhaBatDongSan { get; set; }
        public DbSet<NhoBanBDS> NhoBanBDS { get; set; }
        public DbSet<BaiHocDaoTao> BaiHocDaoTao { get; set; }
        public DbSet<HinhAnhHopDongXemNha> HinhAnhHopDongXemNha { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=bds.DB;Integrated Security=True;encrypt=true;trustservercertificate=true;MultipleActiveResultSets=True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NguoiDung>().HasOne(x => x.PhongBan).WithMany(x => x.ThanhVienPhongBan).HasForeignKey(x => x.PhongBanId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<BatDongSan>().HasOne(x => x.DauChuTao).WithMany(x => x.DauChuTao).HasForeignKey(x => x.DauChuTaoId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<HopDongMuaBatDongSan>().HasOne(x => x.PhieuXemNha).WithMany(x => x.HopDongMuaBatDongSan).HasForeignKey(x => x.PhieuXemNhaId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
