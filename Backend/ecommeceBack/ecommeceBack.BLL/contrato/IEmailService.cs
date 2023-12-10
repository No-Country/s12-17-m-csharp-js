using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IEmailService
    {
        Task<bool> EnviarEmailAsync(string emailDestinatario, string asunto, string mensaje, string ? urlPdf, string ? nombrePdf);
    }
}
