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
                table: "HopDongMuaBatDongSan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_HopDongMuaBatDongSan_BatDongSanId",
                table: "HopDongMuaBatDongSan",
                column: "BatDongSanId");

            migrationBuilder.AddForeignKey(
                name: "FK_HopDongMuaBatDongSan_BatDongSan_BatDongSanId",
                table: "HopDongMuaBatDongSan",
                column: "BatDongSanId",
                principalTable: "BatDongSan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HopDongMuaBatDongSan_BatDongSan_BatDongSanId",
                table: "HopDongMuaBatDongSan");

            migrationBuilder.DropIndex(
                name: "IX_HopDongMuaBatDongSan_BatDongSanId",
                table: "HopDongMuaBatDongSan");

            migrationBuilder.DropColumn(
                name: "BatDongSanId",
                table: "HopDongMuaBatDongSan");
        }
    }
}
