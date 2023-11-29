using ecommeceBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface ITokenService
    {
        Task<string> GenerarToken(string email, int diasExpiracion);
    }
}
