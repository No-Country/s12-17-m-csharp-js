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
    public class ProductoService : IProductosService
    {
        private readonly IProductRepository _productoRepo;
        private readonly IMapper mapper;
        private readonly ImagenService _imagenService;
        private readonly IStockService stockService;

        public ProductoService(IProductRepository productoRepo, IMapper mapper, ImagenService imagenService, IStockService stockService)
        {
            _productoRepo = productoRepo;
            this.mapper = mapper;
            _imagenService = imagenService;
            this.stockService = stockService;
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

            var lista = await query.Include(p=>p.Imagenes).Include(p => p.Marca).Include(p => p.Categoria).Where(p=>p.Activo).ToListAsync();
            return mapper.Map<IEnumerable<ProductoDTO>>(lista);
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerMisProductos(string id)
        {
            var query = await _productoRepo.ObtenerTodos();

            var lista = await query.Include(p=>p.Imagenes).Where(p=>p.UsuarioId==id).ToListAsync();
            return mapper.Map<IEnumerable<ProductoDTO>>(lista);
        }

        public async Task<ProductoDTO> Registrar(CreacionProductoDTO modelo)
        {

            var producto = await _productoRepo.Insertar(modelo);
            await stockService.InOut(producto.Id, producto.Stock_Actual, "ingreso inicial", true);
            await _imagenService.AgregarImagen(modelo.Imagen1, producto.Id);
            if (modelo.Imagen2 != null) await _imagenService.AgregarImagen(modelo.Imagen2, producto.Id);
            if (modelo.Imagen3 != null) await _imagenService.AgregarImagen(modelo.Imagen3, producto.Id);

            return producto;

        }

        public async Task<ProductoDTO> ActivoInactivo(int idProducto, string idUser)
        {
            return await _productoRepo.ActivoInactivo(idProducto, idUser);
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerPorFiltro(string? filtro)
        {
            var query = await _productoRepo.ObtenerTodos();

            var lista = await query
                .Include(p => p.Imagenes)
                .Include(p => p.Marca)
                .Include(p => p.Categoria)
                .Where(p => p.Activo)
                .Where(p=>p.nombre.Contains(filtro))
                .ToListAsync();
            return mapper.Map<IEnumerable<ProductoDTO>>(lista);
        }

        public async Task RestarStock(int idProducto, int cantidad)
        {
            await _productoRepo.RestarStock(idProducto, cantidad);
        }
    }
}
