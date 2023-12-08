using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.MarcasDTO;
using Microsoft.EntityFrameworkCore;

namespace ecommeceBack.DAL.Repository
{
    public class MarcasRepository : IGenericRepository<CreacionMarcaDTO, MarcaDTO, Marca>
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper _mapper;

        public MarcasRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task<MarcaDTO> Actualizar(int id, CreacionMarcaDTO modelo)
        {
            try
            {
                var marca = await _dbcontext.Marcas.Where(m => m.Id == id ).FirstOrDefaultAsync();

                if (marca == null) throw new NotFoundException();

                marca.Nombre = modelo.Nombre;

                _dbcontext.Update(marca);
                await _dbcontext.SaveChangesAsync();
                return _mapper.Map<MarcaDTO>(marca);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {
                var borrada = await _dbcontext.Marcas.Where(m => m.Id == id).ExecuteDeleteAsync();
                if (borrada == 0) throw new NotFoundException();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        public async Task<MarcaDTO> Insertar(CreacionMarcaDTO modelo)
        {
            try
            {
                var marca = _mapper.Map<Marca>(modelo);
                _dbcontext.Add(marca);
                await _dbcontext.SaveChangesAsync();
                return _mapper.Map<MarcaDTO>(marca);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MarcaDTO> ObtenerPorId(int id)
        {
            try
            {
                var marca = await _dbcontext.Marcas.FirstOrDefaultAsync(p => p.Id == id);
                if (marca == null) throw new NotFoundException();
                return _mapper.Map<MarcaDTO>(marca);
            }
            catch (Exception)
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
            catch (Exception)
            {
                throw;
            }
        }

    }
}
