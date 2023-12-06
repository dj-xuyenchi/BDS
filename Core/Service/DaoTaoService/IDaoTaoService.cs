using Core.DTO;
using Core.Entities;
using Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.DaoTaoService
{
    public interface IDaoTaoService
    {
        IQueryable<BaiHocDaoTaoDTO> LayHetBaiHocDaoTao(
            LoaiBaiHoc? loaiBaiHoc,
            int? nguoiTaoId
            );
    }
}
