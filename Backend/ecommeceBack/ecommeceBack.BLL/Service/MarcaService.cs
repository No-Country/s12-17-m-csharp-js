using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.MarcasDTO;
using Microsoft.EntityFrameworkCore;

namespace ecommeceBack.BLL.Service
{
    public class MarcaService : IGenericService<CreacionMarcaDTO, MarcaDTO>
    {
        private readonly IGenericRepository<CreacionMarcaDTO, MarcaDTO, Marca> _marcaRepo;
        private readonly IMapper _mapper;

        public MarcaService(IGenericRepository<CreacionMarcaDTO, MarcaDTO, Marca> marcaRepo, IMapper mapper)
        {
            _marcaRepo = marcaRepo;
            _mapper = mapper;
        }

        public async Task<MarcaDTO> Actualizar(int id, CreacionMarcaDTO modelo)
        {
            try
            {
                return await _marcaRepo.Actualizar(id, modelo);
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
                return await _marcaRepo.Eliminar(id);
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
                return await _marcaRepo.ObtenerPorId(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IEnumerable<MarcaDTO>> ObtenerTodos()
        {
            try
            {
                var queryable = await _marcaRepo.ObtenerTodos();
                var listMarcas = await queryable.ToListAsync();
                return _mapper.Map<IEnumerable<MarcaDTO>>(listMarcas);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MarcaDTO> Registrar(CreacionMarcaDTO modelo)
        {
            try
            {
                return await _marcaRepo.Insertar(modelo);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
