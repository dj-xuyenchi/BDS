using Core.DTO;
using Core.Entities;
using Core.RequestModel;
using Core.ResponModel;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.PhongBanService
{
    public interface IPhongBanService
    {
        IQueryable<PhongBanDTO> LayHetPhongBan();
        IQueryable<NguoiDungDTO> LayHetNhanVienKoPhaiTruongPhong();
        Task<PhongBanDTO> TaoPhongBan(PhongBanDTO phongBan);
        Task<PhongBanDTO> XoaPhongBan(int phongBanId);
        Task<PhongBanDTO> CapNhatPhongBan(PhongBanDTO phongBan);
        Task<PhongBanModel> LyaPhongBanCuaToi(int phongBanId, int year);
        IQueryable<PhieuXemNha> LayKhachHangDaChot(int nhanVienId);
        IQueryable<PhieuXemNha> LayKhachHangByNVId(int nhanVienId);
        Task<PhieuXemNhaBatDongSan> TaoNote(PhieuXemNhaBatDongSanDTO phieuXem);
        Task<PhieuXemNhaBatDongSan> SuaNote(PhieuXemNhaBatDongSanDTO phieuXem);
        Task<PhieuXemNhaDTO> TaoMoiKhachHang(PhieuXemNhaDTO phieuXem);
        Task<PhieuXemNhaDTO> SuaKhachHang(PhieuXemNhaDTO phieuXem);
        Task<PhieuXemNhaDTO> XoaKhachHang(int phieuXemId);
        Task<int> TaoHopDong(HopDongMuaBatDongSanDTO hopDong, List<IFormFile> file);
    }
}
