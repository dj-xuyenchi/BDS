using Core.DTO;
using Core.Entities;
using Core.ResponModel;
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
        Task<PhongBanModel> LyaPhongBanCuaToi(int phongBanId, int year);
        IQueryable<PhieuXemNha> LayKhachHangByNVId(int nhanVienId);
        Task<PhieuXemNhaBatDongSan> TaoNote(PhieuXemNhaBatDongSanDTO phieuXem);
        Task<PhieuXemNhaBatDongSan> SuaNote(PhieuXemNhaBatDongSanDTO phieuXem);
        Task<PhieuXemNhaDTO> TaoMoiKhachHang(PhieuXemNhaDTO phieuXem);
        Task<PhieuXemNhaDTO> SuaKhachHang(PhieuXemNhaDTO phieuXem);
        Task<PhieuXemNhaDTO> XoaKhachHang(int phieuXemId);
    }
}
