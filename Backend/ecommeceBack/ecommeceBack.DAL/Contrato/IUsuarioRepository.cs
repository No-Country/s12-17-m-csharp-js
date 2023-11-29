using ecommeceBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Contrato
{
    public interface IUsuarioRepository
    {
        Task<bool> Registrar(Usuario modelo, string password);
    }
}
