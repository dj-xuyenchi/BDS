using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Migrations
{
    public partial class ver13 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "NgayCapNhat",
                table: "TinBan",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<string>(
                name: "LinkHinhAnh",
                table: "HinhAnhHopDongXemNha",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LinkHinhAnh",
                table: "HinhAnhHopDong",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LinkHinhAnh",
                table: "HinhAnhBatDongSan",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LinkHinhAnh",
                table: "HinhAnhHopDongXemNha");

            migrationBuilder.DropColumn(
                name: "LinkHinhAnh",
                table: "HinhAnhHopDong");

            migrationBuilder.DropColumn(
                name: "LinkHinhAnh",
                table: "HinhAnhBatDongSan");

            migrationBuilder.AlterColumn<DateTime>(
                name: "NgayCapNhat",
                table: "TinBan",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);
        }
    }
}
