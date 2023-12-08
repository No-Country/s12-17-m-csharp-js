using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.DatosDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class DatosRepository:IGenericRepository<CreacionDatosDTO, DatosDTO, Datos>
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public DatosRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<DatosDTO> Actualizar(int id, CreacionDatosDTO modelo)
        {
            try 
            { 
                var datos = await _dbcontext.Datos.Where(c=> c.Id == id).FirstOrDefaultAsync();

                if(datos == null) throw new NotFoundException();

                datos.Nombre = modelo.Nombre;

                datos.Apellido = modelo.Apellido;

                datos.Direccion = modelo.Direccion;

                datos.Provincia = modelo.Provincia;

                datos.Ciudad = modelo.Ciudad;

                datos.DNI = modelo.DNI;

                datos.Direccion_Entrega = modelo.Direccion_Entrega;

                _dbcontext.Update(datos);

                await _dbcontext.SaveChangesAsync();

                return mapper.Map<DatosDTO>(datos);

            }catch (Exception) 
            {
                throw;
            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {
                var datos = await _dbcontext.Datos.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (datos == null) throw new NotFoundException();

                _dbcontext.Remove(datos);

                await _dbcontext.SaveChangesAsync();

                return true;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DatosDTO> Insertar(CreacionDatosDTO modelo)
        {
            try 
            {
                var datos = mapper.Map<Datos>(modelo);
                _dbcontext.Add(datos);
                await _dbcontext.SaveChangesAsync();

                return mapper.Map<DatosDTO>(datos);
            } catch (Exception) 
            { 
               throw; 
            
            }
            
        }

        public async Task<DatosDTO> ObtenerPorId(int id)
        {
            var datos = await _dbcontext.Datos.Where(c=> c.Id == id).FirstOrDefaultAsync();

            if (datos == null)throw new NotFoundException();
            
            return mapper.Map<DatosDTO>(datos);

        }

        public async Task<IQueryable<Datos>> ObtenerTodos()
        {
            try
            {
                IQueryable<Datos> queryDatos = _dbcontext.Datos;
                return queryDatos;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
