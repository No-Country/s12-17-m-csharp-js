using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class MarcasRepository 
    {
        private readonly AplicationDBcontext _dbcontext;

        public MarcasRepository(AplicationDBcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<bool> Actualizar(Marca modelo)
        {
            try
            {             
                _dbcontext.Update(modelo);
                await _dbcontext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {
                var borrada = await _dbcontext.Marcas.Where(m => m.Id == id).ExecuteDeleteAsync();
                if (borrada == 0) return false;
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> Insertar(Marca modelo)
        {
            try
            {
                _dbcontext.Add(modelo);
                await _dbcontext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<Marca> ObtenerPorId(int id)
        {
            try
            {
                return await _dbcontext.Marcas.FirstOrDefaultAsync(p => p.Id == id);               
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<IQueryable<Marca>> ObtenerTodos()
        {
            try
            {
                IQueryable<Marca> queryMarcas = _dbcontext.Marcas;
                return queryMarcas;               
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
