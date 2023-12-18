using Core.DTO;
using Core.RequestModel;
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
    }
}
