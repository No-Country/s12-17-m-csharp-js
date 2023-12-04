using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class DatosRepository /*: IGenericRepository<Datos>*/
    {
        private readonly AplicationDBcontext _dbcontext;

        public DatosRepository(AplicationDBcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<bool> Actualizar(Datos modelo)
        {
            try 
            {
                _dbcontext.Update(modelo);
                await _dbcontext.SaveChangesAsync();
                return true;
            }
            catch(Exception ex)
            {
                throw;
            }
            

        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(Datos modelo)
        {
            throw new NotImplementedException();
        }

        public Task<Datos> ObtenerPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Datos>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
}
