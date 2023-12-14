using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.CategoriaDTO;
using Microsoft.EntityFrameworkCore;

namespace ecommeceBack.DAL.Repository
{
    public class CategoriasRepository:IGenericRepository<CreacionCategoriaDTO, CategoriaDTO, Categoria>
    {
            private readonly AplicationDBcontext _dbcontext;
            private readonly IMapper mapper;

        public CategoriasRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
                _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<CategoriaDTO> Actualizar(int id,CreacionCategoriaDTO modelo)
        {
            try
            {
                var categoria = await _dbcontext.Categorias.Where(c => c.Id == id && c.Activo == true).FirstOrDefaultAsync();

                if (categoria == null) throw new NotFoundException();

                categoria.Nombre = modelo.Nombre;

                await _dbcontext.SaveChangesAsync();
                return mapper.Map<CategoriaDTO>(categoria);
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
                    var categoria = await _dbcontext.Categorias.Where(c => c.Id == id && c.Activo == true).FirstOrDefaultAsync();

                    if (categoria == null) throw new NotFoundException();

                    categoria.Activo = false;
                    
                    await _dbcontext.SaveChangesAsync();

                    return true;
                }
                catch (Exception)
                {
                    throw;
                }
        }


        public async Task<CategoriaDTO> Insertar(CreacionCategoriaDTO modelo)
        {
            try
            {
                var categoria = mapper.Map<Categoria>(modelo);
                categoria.Activo = true;
                _dbcontext.Add(categoria);
                await _dbcontext.SaveChangesAsync();
                return mapper.Map<CategoriaDTO>(categoria);
            }
            catch (Exception)
            {
                throw;
            }

        }


            public async Task<IQueryable<Categoria>> ObtenerTodos()
            {
                try
                {
                    IQueryable<Categoria> queryMarcas =   _dbcontext.Categorias.Where( c => c.Activo == true);
                    return queryMarcas;
                }
                catch (Exception)
                {
                    throw;
                }
            }

        public async Task<CategoriaDTO>ObtenerPorId(int id)
        {
            try
            {
                var categoria = await _dbcontext.Categorias.Where(x => x.Id == id && x.Activo == true).FirstOrDefaultAsync();

                if (categoria == null) throw new NotFoundException();

                return mapper.Map<CategoriaDTO>(categoria);
            }
            catch (Exception)
            {
                throw;
            }
        }

        
    }
}
