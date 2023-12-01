using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IMarcaService
    {
        Task<bool> Registrar(MarcaDTO modelo);

        Task<bool> Actualizar(Marca modelo);

        Task<bool> Eliminar(int id);

        Task<Marca> ObtenerPorId(int id);

        Task<IQueryable<Marca>> ObtenerTodos();
    }
}
