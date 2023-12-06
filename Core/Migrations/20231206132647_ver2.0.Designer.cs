﻿// <auto-generated />
using System;
using Core.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Core.Migrations
{
    [DbContext(typeof(BDSContext))]
    [Migration("20231206132647_ver2.0")]
    partial class ver20
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Core.Entities.AdministrativeRegion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("code_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("code_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name_en")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AdministrativeRegion");
                });

            modelBuilder.Entity("Core.Entities.AdministrativeUnits", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("code_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("code_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("short_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("short_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AdministrativeUnits");
                });

            modelBuilder.Entity("Core.Entities.BaiHocDaoTao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("FileKienThuc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LinkBaiHoc")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("LoaiBaiHoc")
                        .HasColumnType("int");

                    b.Property<string>("MoTa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<int>("NguoiTaoId")
                        .HasColumnType("int");

                    b.Property<string>("TenBaiHoc")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("NguoiTaoId");

                    b.ToTable("BaiHocDaoTao");
                });

            modelBuilder.Entity("Core.Entities.BatDongSan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<double>("ChieuDai")
                        .HasColumnType("float");

                    b.Property<double>("ChieuNgang")
                        .HasColumnType("float");

                    b.Property<int?>("DauChuTaoId")
                        .HasColumnType("int");

                    b.Property<string>("DiaChi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DiaChiGoogleMap")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("DienTich")
                        .HasColumnType("float");

                    b.Property<double>("DienTichSuDung")
                        .HasColumnType("float");

                    b.Property<string>("DistrictCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("GiaBan")
                        .HasColumnType("bigint");

                    b.Property<double>("GiaTriHoaHong")
                        .HasColumnType("float");

                    b.Property<double>("GiaTriHoaHongChiaNhanVien")
                        .HasColumnType("float");

                    b.Property<bool>("IsPhanTramTienMat")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPhanTramTienMatChiaNhanVien")
                        .HasColumnType("bit");

                    b.Property<int>("LoaiBatDongSan")
                        .HasColumnType("int");

                    b.Property<string>("MoTaChiTiet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NamXayDung")
                        .HasColumnType("int");

                    b.Property<DateTime?>("NgayBan")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("NgayCapNhat")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<int>("PhapLy")
                        .HasColumnType("int");

                    b.Property<string>("ProvinceCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SoDienThoaiChuNha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SoDienThoaiLienHe")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SoPhongNgu")
                        .HasColumnType("int");

                    b.Property<int>("SoPhongVeSinh")
                        .HasColumnType("int");

                    b.Property<string>("TenChuNha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.Property<string>("WardCode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DauChuTaoId");

                    b.ToTable("BatDongSan");
                });

            modelBuilder.Entity("Core.Entities.District", b =>
                {
                    b.Property<string>("code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("administrative_unit_id")
                        .HasColumnType("int");

                    b.Property<string>("code_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("province_code")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("code");

                    b.ToTable("District");
                });

            modelBuilder.Entity("Core.Entities.HinhAnhBatDongSan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("BatDongSanId")
                        .HasColumnType("int");

                    b.Property<string>("LinkHinhAnh")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BatDongSanId");

                    b.ToTable("HinhAnhBatDongSan");
                });

            modelBuilder.Entity("Core.Entities.HinhAnhHopDong", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("HopDongId")
                        .HasColumnType("int");

                    b.Property<string>("LinkHinhAnh")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("HopDongId");

                    b.ToTable("HinhAnhHopDong");
                });

            modelBuilder.Entity("Core.Entities.HinhAnhHopDongXemNha", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("LinkHinhAnh")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<int>("PhieuXemId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PhieuXemId");

                    b.ToTable("HinhAnhHopDongXemNha");
                });

            modelBuilder.Entity("Core.Entities.HopDongMuaBatDongSan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("BatDongSanId")
                        .HasColumnType("int");

                    b.Property<string>("CanCuocNguoiLamChung")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("GiaBan")
                        .HasColumnType("bigint");

                    b.Property<int>("NguoiChotId")
                        .HasColumnType("int");

                    b.Property<string>("NguoiLamChung")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NoiCongChung")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PhieuXemNhaId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BatDongSanId");

                    b.HasIndex("NguoiChotId");

                    b.HasIndex("PhieuXemNhaId");

                    b.ToTable("HopDongMuaBatDongSan");
                });

            modelBuilder.Entity("Core.Entities.NguoiDung", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("DiaChi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HinhDaiDien")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoTenNguoiDung")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MatKhau")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayCapNhat")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("NgayThangNamSinh")
                        .HasColumnType("datetime2");

                    b.Property<int?>("PhongBanId")
                        .HasColumnType("int");

                    b.Property<int>("SoBatDongSanDaBan")
                        .HasColumnType("int");

                    b.Property<string>("SoCanCuoc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SoDienThoai")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenTaiKhoan")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PhongBanId");

                    b.ToTable("NguoiDung");
                });

            modelBuilder.Entity("Core.Entities.NguoiDungRole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<int>("NguoiDungId")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("NguoiDungId");

                    b.HasIndex("RoleId");

                    b.ToTable("NguoiDungRole");
                });

            modelBuilder.Entity("Core.Entities.NhoBanBDS", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HinhAnh1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HinhAnh2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoTen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoTa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<string>("SoDienThoai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("NhoBanBDS");
                });

            modelBuilder.Entity("Core.Entities.PhieuXemNha", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("GhiChu")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<int>("NhanVienDanKhachId")
                        .HasColumnType("int");

                    b.Property<string>("SoCanCuocKhachHang")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenKhachHang")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("NhanVienDanKhachId");

                    b.ToTable("PhieuXemNha");
                });

            modelBuilder.Entity("Core.Entities.PhieuXemNhaBatDongSan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("BatDongSanId")
                        .HasColumnType("int");

                    b.Property<DateTime>("NgayXem")
                        .HasColumnType("datetime2");

                    b.Property<int>("PhieuXemNhaId")
                        .HasColumnType("int");

                    b.Property<int>("SortNumber")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BatDongSanId");

                    b.HasIndex("PhieuXemNhaId");

                    b.ToTable("PhieuXemNhaBatDongSan");
                });

            modelBuilder.Entity("Core.Entities.PhongBan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("HinhDaiDien")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KhauHieu")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SoLuongNhanVien")
                        .HasColumnType("int");

                    b.Property<string>("TenPhongBan")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.Property<int>("TruongPhongId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TruongPhongId");

                    b.ToTable("PhongBan");
                });

            modelBuilder.Entity("Core.Entities.Province", b =>
                {
                    b.Property<string>("code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("administrative_region_id")
                        .HasColumnType("int");

                    b.Property<int?>("administrative_unit_id")
                        .HasColumnType("int");

                    b.Property<string>("code_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name_en")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("code");

                    b.ToTable("Province");
                });

            modelBuilder.Entity("Core.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("RoleCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("Core.Entities.TinBan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("BatDongSanId")
                        .HasColumnType("int");

                    b.Property<string>("MoTa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("NgayCapNhat")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("NgayTao")
                        .HasColumnType("datetime2");

                    b.Property<int>("NguoiDangId")
                        .HasColumnType("int");

                    b.Property<string>("TieuDe")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrangThai")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BatDongSanId");

                    b.HasIndex("NguoiDangId");

                    b.ToTable("TinBan");
                });

            modelBuilder.Entity("Core.Entities.Ward", b =>
                {
                    b.Property<string>("code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("administrative_unit_id")
                        .HasColumnType("int");

                    b.Property<string>("code_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("district_code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("full_name_en")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name_en")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("code");

                    b.ToTable("Ward");
                });

            modelBuilder.Entity("Core.Entities.BaiHocDaoTao", b =>
                {
                    b.HasOne("Core.Entities.NguoiDung", "NguoiTao")
                        .WithMany("BaiHocDaoTao")
                        .HasForeignKey("NguoiTaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("NguoiTao");
                });

            modelBuilder.Entity("Core.Entities.BatDongSan", b =>
                {
                    b.HasOne("Core.Entities.NguoiDung", "DauChuTao")
                        .WithMany("DauChuTao")
                        .HasForeignKey("DauChuTaoId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("DauChuTao");
                });

            modelBuilder.Entity("Core.Entities.HinhAnhBatDongSan", b =>
                {
                    b.HasOne("Core.Entities.BatDongSan", "BatDongSan")
                        .WithMany("HinhAnhBatDongSan")
                        .HasForeignKey("BatDongSanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BatDongSan");
                });

            modelBuilder.Entity("Core.Entities.HinhAnhHopDong", b =>
                {
                    b.HasOne("Core.Entities.HopDongMuaBatDongSan", "HopDong")
                        .WithMany("AnhChupHopDong")
                        .HasForeignKey("HopDongId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("HopDong");
                });

            modelBuilder.Entity("Core.Entities.HinhAnhHopDongXemNha", b =>
                {
                    b.HasOne("Core.Entities.PhieuXemNha", "PhieuXem")
                        .WithMany("HinhAnhHopDongXemNha")
                        .HasForeignKey("PhieuXemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PhieuXem");
                });

            modelBuilder.Entity("Core.Entities.HopDongMuaBatDongSan", b =>
                {
                    b.HasOne("Core.Entities.BatDongSan", "BatDongSan")
                        .WithMany("HopDongMuaBatDongSan")
                        .HasForeignKey("BatDongSanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.NguoiDung", "NguoiChot")
                        .WithMany("HopDongMuaBatDongSan")
                        .HasForeignKey("NguoiChotId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.PhieuXemNha", "PhieuXemNha")
                        .WithMany("HopDongMuaBatDongSan")
                        .HasForeignKey("PhieuXemNhaId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("BatDongSan");

                    b.Navigation("NguoiChot");

                    b.Navigation("PhieuXemNha");
                });

            modelBuilder.Entity("Core.Entities.NguoiDung", b =>
                {
                    b.HasOne("Core.Entities.PhongBan", "PhongBan")
                        .WithMany("ThanhVienPhongBan")
                        .HasForeignKey("PhongBanId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("PhongBan");
                });

            modelBuilder.Entity("Core.Entities.NguoiDungRole", b =>
                {
                    b.HasOne("Core.Entities.NguoiDung", "NguoiDung")
                        .WithMany("NguoiDungRole")
                        .HasForeignKey("NguoiDungId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.Role", "Role")
                        .WithMany("NguoiDungRole")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("NguoiDung");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("Core.Entities.PhieuXemNha", b =>
                {
                    b.HasOne("Core.Entities.NguoiDung", "NhanVienDanKhach")
                        .WithMany()
                        .HasForeignKey("NhanVienDanKhachId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("NhanVienDanKhach");
                });

            modelBuilder.Entity("Core.Entities.PhieuXemNhaBatDongSan", b =>
                {
                    b.HasOne("Core.Entities.BatDongSan", "BatDongSan")
                        .WithMany("PhieuXemNhaBatDongSan")
                        .HasForeignKey("BatDongSanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.PhieuXemNha", "PhieuXemNha")
                        .WithMany("PhieuXemNhaBatDongSan")
                        .HasForeignKey("PhieuXemNhaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BatDongSan");

                    b.Navigation("PhieuXemNha");
                });

            modelBuilder.Entity("Core.Entities.PhongBan", b =>
                {
                    b.HasOne("Core.Entities.NguoiDung", "TruongPhong")
                        .WithMany()
                        .HasForeignKey("TruongPhongId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TruongPhong");
                });

            modelBuilder.Entity("Core.Entities.TinBan", b =>
                {
                    b.HasOne("Core.Entities.BatDongSan", "BatDongSan")
                        .WithMany("TinBan")
                        .HasForeignKey("BatDongSanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.NguoiDung", "NguoiDang")
                        .WithMany("TinBan")
                        .HasForeignKey("NguoiDangId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BatDongSan");

                    b.Navigation("NguoiDang");
                });

            modelBuilder.Entity("Core.Entities.BatDongSan", b =>
                {
                    b.Navigation("HinhAnhBatDongSan");

                    b.Navigation("HopDongMuaBatDongSan");

                    b.Navigation("PhieuXemNhaBatDongSan");

                    b.Navigation("TinBan");
                });

            modelBuilder.Entity("Core.Entities.HopDongMuaBatDongSan", b =>
                {
                    b.Navigation("AnhChupHopDong");
                });

            modelBuilder.Entity("Core.Entities.NguoiDung", b =>
                {
                    b.Navigation("BaiHocDaoTao");

                    b.Navigation("DauChuTao");

                    b.Navigation("HopDongMuaBatDongSan");

                    b.Navigation("NguoiDungRole");

                    b.Navigation("TinBan");
                });

            modelBuilder.Entity("Core.Entities.PhieuXemNha", b =>
                {
                    b.Navigation("HinhAnhHopDongXemNha");

                    b.Navigation("HopDongMuaBatDongSan");

                    b.Navigation("PhieuXemNhaBatDongSan");
                });

            modelBuilder.Entity("Core.Entities.PhongBan", b =>
                {
                    b.Navigation("ThanhVienPhongBan");
                });

            modelBuilder.Entity("Core.Entities.Role", b =>
                {
                    b.Navigation("NguoiDungRole");
                });
#pragma warning restore 612, 618
        }
    }
}
