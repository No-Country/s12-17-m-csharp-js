using ecommeceBack.Models.VModels.MercadoPago;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IMercadoPagoService
    {
        Task<long> GenerarPagoAsync(RequestMercadoPago request);
    }
}
