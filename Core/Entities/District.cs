using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class District
    {
        [Key]
        public string code { get; set; }
        public string? name { get; set; }
        public string? name_en { get; set; }
        public string? full_name { get; set; }
        public string? full_name_en { get; set; }
        public string? code_name { get; set; }
        [ForeignKey("province_code")]
        public string? province_code { get; set; }
        //[ForeignKey("province_code")]
        //public Province? Province { get; set; }
        [ForeignKey("administrative_unit_id")]
        public int? administrative_unit_id { get; set; }
        // [ForeignKey("administrative_unit_id")]
        //public AdministrativeUnits? AdministrativeUnit { get; set; }
    }
}
