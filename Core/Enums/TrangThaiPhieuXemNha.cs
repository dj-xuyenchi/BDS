using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Enums
{
    public enum TrangThaiPhieuXemNha
    {
        DACHOTTHANHCONG = 1,// đã chốt được hợp đồng
        DONGPHIEU = 2,// khách không còn liên lạc nữa nhưng chưa biết tương lai có contact lại ko
        DANGCHAMSOC = 3,
    }
}
