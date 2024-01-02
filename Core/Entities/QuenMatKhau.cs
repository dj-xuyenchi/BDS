using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class QuenMatKhau : BaseEntity
    {
        public int NguoiDungId { get; set; }
        public DateTime NgayHetHan { get; set; }
        public string Code { get; set; }
    }
}
