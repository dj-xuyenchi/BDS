using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Enums
{
    public enum TrangThaiNhoBanBDS
    {
        CHUAKHAOSAT = 1, // chờ dc đầu chủ phòng nào đó pick
        DANGKHAOSAT = 2, // đầu chủ pick sau đó đi khảo sát nhà
        DAKHAOSAT = 3 // khảo sát xong ok hợp đồng với chủ nhà bắt đầu đẩy thông tin bds lên web
    }
}
