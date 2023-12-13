using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class NguoiDungRole : BaseEntity
    {
        public int NguoiDungId { get; set; }
        public virtual NguoiDung? NguoiDung { get; set; }
        public int RoleId { get; set; } 
        public virtual Role? Role { get; set; }
        public DateTime NgayTao { get; set; }
    }
}
