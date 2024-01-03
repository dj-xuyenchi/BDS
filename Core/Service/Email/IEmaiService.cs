using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.Email
{
    public interface IEmaiService
    {
        public Task SendEmailTeoYeuCau(string email);
    }
}
