using Core.DTO;
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
        Task<PhongBanModel> LyaPhongBanCuaToi(int phongBanId,int year);
    }
}
