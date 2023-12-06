using Core.Data;
using Core.DTO;
using Core.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.DaoTaoService
{
    public class DaoTaoService : IDaoTaoService
    {
        private readonly BDSContext _context = new BDSContext();
        public IQueryable<BaiHocDaoTaoDTO> LayHetBaiHocDaoTao(LoaiBaiHoc? loaiBaiHoc, int? nguoiTaoId)
        {
            var query = _context.BaiHocDaoTao.Include(x=>x.NguoiTao).AsNoTracking();
            if (loaiBaiHoc.HasValue)
            {
                query = query.Where(x => x.LoaiBaiHoc == loaiBaiHoc.Value);
            }
            if (nguoiTaoId.HasValue)
            {
                query = query.Where(x => x.NguoiTaoId == nguoiTaoId.Value);
            }
            return query.Select(x => BaiHocDaoTaoDTO.FromEntity(x));
        }
    }
}
