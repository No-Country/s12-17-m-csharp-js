using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.ProductoDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class ProductoService : IGenericService<CreacionProductoDTO, ProductoDTO>
    {
        private readonly IGenericRepository<CreacionProductoDTO, ProductoDTO, Producto> _productoRepo;
        private readonly IMapper mapper;

        public ProductoService(IGenericRepository<CreacionProductoDTO, ProductoDTO, Producto> productoRepo, IMapper mapper)
        {
            _productoRepo = productoRepo;
            this.mapper = mapper;
        }

        public async Task<ProductoDTO> Actualizar(int id, CreacionProductoDTO modelo)
        {
            return await _productoRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _productoRepo.Eliminar(id);
        }

        public async Task<ProductoDTO> ObtenerPorId(int id)
        {
            return await _productoRepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerTodos()
        {
            var query = await _productoRepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<ProductoDTO>>(lista);
        }

        public Task<ProductoDTO> Registrar(CreacionProductoDTO modelo)
        {
            return _productoRepo.Insertar(modelo);
        }
    }
}
