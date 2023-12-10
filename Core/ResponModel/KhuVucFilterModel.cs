using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.ResponModel
{
    public class KhuVucFilterModel
    {
        public IList<Province> Provinces { get; set; }
        public IList<District> Districts { get; set; }
        public IList<Ward> Wards { get; set; }
    }
}
