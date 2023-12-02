using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Migrations
{
    public partial class ver12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BatDongSanId",
                table: "TinBan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "PhongBanId",
                table: "NguoiDung",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_TinBan_BatDongSanId",
                table: "TinBan",
                column: "BatDongSanId");

            migrationBuilder.AddForeignKey(
                name: "FK_TinBan_BatDongSan_BatDongSanId",
                table: "TinBan",
                column: "BatDongSanId",
                principalTable: "BatDongSan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TinBan_BatDongSan_BatDongSanId",
                table: "TinBan");

            migrationBuilder.DropIndex(
                name: "IX_TinBan_BatDongSanId",
                table: "TinBan");

            migrationBuilder.DropColumn(
                name: "BatDongSanId",
                table: "TinBan");

            migrationBuilder.AlterColumn<int>(
                name: "PhongBanId",
                table: "NguoiDung",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
