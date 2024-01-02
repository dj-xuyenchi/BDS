using Core.DTO;
using Core.Entities;
using Core.RequestModel;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.NguoiDungService
{
    public interface INguoiDungService
    {
        Task<NguoiDungDTO> DangKy(NguoiDungDTO nguoiDungDTO);
        Task<NguoiDungDTO> DangNhap(DangNhapRequest nguoiDungDTO);
        Task<NguoiDungDTO> TaoNguoiDung(NguoiDungDTO nguoiDungDTO);
        Task<NguoiDungDTO> SuaNguoiDung(NguoiDungDTO nguoiDungDTO);
        IQueryable<NguoiDungDTO> LayHetNguoiDung();
        IQueryable<NguoiDungDTO> LayNguoiDungTop();
        Task<NguoiDungDTO> LayNguoiDung(int nguoiDungId);
        Task<NguoiDungDTO> CapNhatThongTin(NguoiDungDTO nguoiDung, IFormFile file);
        Task<HoaDonNapTien> NapTien(long soTien, int nguoiDungId);
        Task<HoaDonNapTien> CheckThanhToan(int hoaDonId,int status);
        Task<NguoiDung> DoiMatKhau(DoiMatKhau doiMatKhau);
        Task<NguoiDungDTO> QuenMatKhau(string email);
        Task<NguoiDungDTO> XacNhanMatKhau(string code,string matKhauMoi);
    }
}
