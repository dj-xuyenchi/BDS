using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class AdministrativeRegion : BaseEntity
    {
        public string? name { get; set; }
        public string? name_en { get; set; }
        public string? code_name { get; set; }
        public string? code_name_en { get; set; }
    }
}
