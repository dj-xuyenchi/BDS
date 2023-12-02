using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Migrations
{
    public partial class ver11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AdministrativeRegion",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdministrativeRegion", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AdministrativeUnits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    full_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    short_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    short_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdministrativeUnits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "District",
                columns: table => new
                {
                    code = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    province_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    administrative_unit_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_District", x => x.code);
                });

            migrationBuilder.CreateTable(
                name: "NhoBanBDS",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoTen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoDienThoai = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HinhAnh1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HinhAnh2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NhoBanBDS", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Province",
                columns: table => new
                {
                    code = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    administrative_unit_id = table.Column<int>(type: "int", nullable: true),
                    administrative_region_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Province", x => x.code);
                });

            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoleName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ward",
                columns: table => new
                {
                    code = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name_en = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    district_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    administrative_unit_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ward", x => x.code);
                });

            migrationBuilder.CreateTable(
                name: "BaiHocDaoTao",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LinkBaiHoc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenBaiHoc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LoaiBaiHoc = table.Column<int>(type: "int", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false),
                    NguoiTaoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaiHocDaoTao", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BatDongSan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenChuNha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GiaBan = table.Column<int>(type: "int", nullable: false),
                    GiaTriHoaHong = table.Column<double>(type: "float", nullable: false),
                    IsPhanTramTienMat = table.Column<bool>(type: "bit", nullable: false),
                    GiaTriHoaHongChiaNhanVien = table.Column<double>(type: "float", nullable: false),
                    IsPhanTramTienMatChiaNhanVien = table.Column<bool>(type: "bit", nullable: false),
                    DiaChi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiaChiGoogleMap = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgayThangNamXayDung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DienTich = table.Column<double>(type: "float", nullable: false),
                    SoPhongNgu = table.Column<int>(type: "int", nullable: false),
                    SoPhongVeSinh = table.Column<int>(type: "int", nullable: false),
                    PhapLy = table.Column<int>(type: "int", nullable: false),
                    ChieuNgang = table.Column<double>(type: "float", nullable: false),
                    ChieuDai = table.Column<double>(type: "float", nullable: false),
                    DienTichSuDung = table.Column<double>(type: "float", nullable: false),
                    MoTaChiTiet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SoDienThoaiLienHe = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoDienThoaiChuNha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProvinceCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DistrictCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WardCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DauChuTaoId = table.Column<int>(type: "int", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false),
                    LoaiBatDongSan = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NgayCapNhat = table.Column<DateTime>(type: "datetime2", nullable: true),
                    NgayBan = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BatDongSan", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HinhAnhBatDongSan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BatDongSanId = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HinhAnhBatDongSan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HinhAnhBatDongSan_BatDongSan_BatDongSanId",
                        column: x => x.BatDongSanId,
                        principalTable: "BatDongSan",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HinhAnhHopDong",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HopDongId = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HinhAnhHopDong", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HinhAnhHopDongXemNha",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhieuXemId = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HinhAnhHopDongXemNha", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HopDongMuaBatDongSan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GiaBan = table.Column<double>(type: "float", nullable: false),
                    NguoiLamChung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CanCuocNguoiLamChung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoiCongChung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NguoiChotId = table.Column<int>(type: "int", nullable: false),
                    PhieuXemNhaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HopDongMuaBatDongSan", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NguoiDung",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTaiKhoan = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MatKhau = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HoTenNguoiDung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgayThangNamSinh = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SoBatDongSanDaBan = table.Column<int>(type: "int", nullable: false),
                    HinhDaiDien = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoCanCuoc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiaChi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhongBanId = table.Column<int>(type: "int", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NguoiDung", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NguoiDungRole",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NguoiDungId = table.Column<int>(type: "int", nullable: false),
                    RoleId = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NguoiDungRole", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NguoiDungRole_NguoiDung_NguoiDungId",
                        column: x => x.NguoiDungId,
                        principalTable: "NguoiDung",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NguoiDungRole_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PhieuXemNha",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NhanVienDanKhachId = table.Column<int>(type: "int", nullable: false),
                    TenKhachHang = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoCanCuocKhachHang = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GhiChu = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhieuXemNha", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhieuXemNha_NguoiDung_NhanVienDanKhachId",
                        column: x => x.NhanVienDanKhachId,
                        principalTable: "NguoiDung",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PhongBan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenPhongBan = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KhauHieu = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TruongPhongId = table.Column<int>(type: "int", nullable: false),
                    HinhDaiDien = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoLuongNhanVien = table.Column<int>(type: "int", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhongBan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhongBan_NguoiDung_TruongPhongId",
                        column: x => x.TruongPhongId,
                        principalTable: "NguoiDung",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TinBan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TieuDe = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NguoiDangId = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NgayCapNhat = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TrangThai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TinBan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TinBan_NguoiDung_NguoiDangId",
                        column: x => x.NguoiDangId,
                        principalTable: "NguoiDung",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PhieuXemNhaBatDongSan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BatDongSanId = table.Column<int>(type: "int", nullable: false),
                    PhieuXemNhaId = table.Column<int>(type: "int", nullable: false),
                    NgayXem = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SortNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhieuXemNhaBatDongSan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhieuXemNhaBatDongSan_BatDongSan_BatDongSanId",
                        column: x => x.BatDongSanId,
                        principalTable: "BatDongSan",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PhieuXemNhaBatDongSan_PhieuXemNha_PhieuXemNhaId",
                        column: x => x.PhieuXemNhaId,
                        principalTable: "PhieuXemNha",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BaiHocDaoTao_NguoiTaoId",
                table: "BaiHocDaoTao",
                column: "NguoiTaoId");

            migrationBuilder.CreateIndex(
                name: "IX_BatDongSan_DauChuTaoId",
                table: "BatDongSan",
                column: "DauChuTaoId");

            migrationBuilder.CreateIndex(
                name: "IX_HinhAnhBatDongSan_BatDongSanId",
                table: "HinhAnhBatDongSan",
                column: "BatDongSanId");

            migrationBuilder.CreateIndex(
                name: "IX_HinhAnhHopDong_HopDongId",
                table: "HinhAnhHopDong",
                column: "HopDongId");

            migrationBuilder.CreateIndex(
                name: "IX_HinhAnhHopDongXemNha_PhieuXemId",
                table: "HinhAnhHopDongXemNha",
                column: "PhieuXemId");

            migrationBuilder.CreateIndex(
                name: "IX_HopDongMuaBatDongSan_NguoiChotId",
                table: "HopDongMuaBatDongSan",
                column: "NguoiChotId");

            migrationBuilder.CreateIndex(
                name: "IX_HopDongMuaBatDongSan_PhieuXemNhaId",
                table: "HopDongMuaBatDongSan",
                column: "PhieuXemNhaId");

            migrationBuilder.CreateIndex(
                name: "IX_NguoiDung_PhongBanId",
                table: "NguoiDung",
                column: "PhongBanId");

            migrationBuilder.CreateIndex(
                name: "IX_NguoiDungRole_NguoiDungId",
                table: "NguoiDungRole",
                column: "NguoiDungId");

            migrationBuilder.CreateIndex(
                name: "IX_NguoiDungRole_RoleId",
                table: "NguoiDungRole",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_PhieuXemNha_NhanVienDanKhachId",
                table: "PhieuXemNha",
                column: "NhanVienDanKhachId");

            migrationBuilder.CreateIndex(
                name: "IX_PhieuXemNhaBatDongSan_BatDongSanId",
                table: "PhieuXemNhaBatDongSan",
                column: "BatDongSanId");

            migrationBuilder.CreateIndex(
                name: "IX_PhieuXemNhaBatDongSan_PhieuXemNhaId",
                table: "PhieuXemNhaBatDongSan",
                column: "PhieuXemNhaId");

            migrationBuilder.CreateIndex(
                name: "IX_PhongBan_TruongPhongId",
                table: "PhongBan",
                column: "TruongPhongId");

            migrationBuilder.CreateIndex(
                name: "IX_TinBan_NguoiDangId",
                table: "TinBan",
                column: "NguoiDangId");

            migrationBuilder.AddForeignKey(
                name: "FK_BaiHocDaoTao_NguoiDung_NguoiTaoId",
                table: "BaiHocDaoTao",
                column: "NguoiTaoId",
                principalTable: "NguoiDung",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BatDongSan_NguoiDung_DauChuTaoId",
                table: "BatDongSan",
                column: "DauChuTaoId",
                principalTable: "NguoiDung",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_HinhAnhHopDong_HopDongMuaBatDongSan_HopDongId",
                table: "HinhAnhHopDong",
                column: "HopDongId",
                principalTable: "HopDongMuaBatDongSan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HinhAnhHopDongXemNha_PhieuXemNha_PhieuXemId",
                table: "HinhAnhHopDongXemNha",
                column: "PhieuXemId",
                principalTable: "PhieuXemNha",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HopDongMuaBatDongSan_NguoiDung_NguoiChotId",
                table: "HopDongMuaBatDongSan",
                column: "NguoiChotId",
                principalTable: "NguoiDung",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HopDongMuaBatDongSan_PhieuXemNha_PhieuXemNhaId",
                table: "HopDongMuaBatDongSan",
                column: "PhieuXemNhaId",
                principalTable: "PhieuXemNha",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NguoiDung_PhongBan_PhongBanId",
                table: "NguoiDung",
                column: "PhongBanId",
                principalTable: "PhongBan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PhongBan_NguoiDung_TruongPhongId",
                table: "PhongBan");

            migrationBuilder.DropTable(
                name: "AdministrativeRegion");

            migrationBuilder.DropTable(
                name: "AdministrativeUnits");

            migrationBuilder.DropTable(
                name: "BaiHocDaoTao");

            migrationBuilder.DropTable(
                name: "District");

            migrationBuilder.DropTable(
                name: "HinhAnhBatDongSan");

            migrationBuilder.DropTable(
                name: "HinhAnhHopDong");

            migrationBuilder.DropTable(
                name: "HinhAnhHopDongXemNha");

            migrationBuilder.DropTable(
                name: "NguoiDungRole");

            migrationBuilder.DropTable(
                name: "NhoBanBDS");

            migrationBuilder.DropTable(
                name: "PhieuXemNhaBatDongSan");

            migrationBuilder.DropTable(
                name: "Province");

            migrationBuilder.DropTable(
                name: "TinBan");

            migrationBuilder.DropTable(
                name: "Ward");

            migrationBuilder.DropTable(
                name: "HopDongMuaBatDongSan");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropTable(
                name: "BatDongSan");

            migrationBuilder.DropTable(
                name: "PhieuXemNha");

            migrationBuilder.DropTable(
                name: "NguoiDung");

            migrationBuilder.DropTable(
                name: "PhongBan");
        }
    }
}
