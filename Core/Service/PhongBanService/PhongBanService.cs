using Core.Data;
using Core.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.PhongBanService
{
    public class PhongBanService : IPhongBanService
    {
        private readonly BDSContext _context = new BDSContext();
        public IQueryable<PhongBanDTO> LayHetPhongBan()
        {
            var query = _context.PhongBan.AsNoTracking();
            return query.Select(x => PhongBanDTO.FromEntity(x));
        }
    }
}
