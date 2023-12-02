using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class AdministrativeUnits : BaseEntity
    {
        public string? full_name { get; set; }
        public string? full_name_en { get; set; }
        public string? short_name { get; set; }
        public string? short_name_en { get; set; }
        public string? code_name { get; set; }
        public string? code_name_en { get; set; }
    }
}
