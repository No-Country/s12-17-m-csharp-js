using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using ecommeceBack.Models.VModels.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IUsuarioService
    {
        Task<bool> Registrar(CreacionUsuarioDTO modelo);

        Task<bool> Actualizar(Usuario modelo);

        Task<bool> Eliminar(int id);

        Task<Usuario> ObtenerPorId(int id);

        Task<IQueryable<Usuario>> ObtenerTodos();

        Task<bool> ActualizarIdDatos(int datosId, string email);

        Task<RespuestaAuth> GetCredencialesAsync(string email);

    }
}
