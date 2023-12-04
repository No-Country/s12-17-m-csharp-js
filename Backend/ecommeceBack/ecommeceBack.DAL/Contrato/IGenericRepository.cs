using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Contrato
{
    public interface IGenericRepository<DTOCreacion,DTO, Entidad> 
    {
        Task<DTO> Insertar(DTOCreacion modelo);

        Task<DTO> Actualizar(int id, DTOCreacion modelo);

        Task<bool> Eliminar(int id);

        Task<DTO> ObtenerPorId(int id);

        Task<IQueryable<Entidad>> ObtenerTodos();
    }
}
