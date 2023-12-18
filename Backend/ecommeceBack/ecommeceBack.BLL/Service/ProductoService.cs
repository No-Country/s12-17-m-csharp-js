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
            try
            {
                var query = await _productoRepo.ObtenerTodos();

                var lista = await query
                    .Include(p=>p.Imagenes)
                    .Include(p => p.Marca)
                    .Include(p => p.Categoria)
                    .Where(p=>p.Activo)
                    .ToListAsync();
                return mapper.Map<IEnumerable<ProductoDTO>>(lista);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerMisProductos(string id)
        {
            try
            {
                var query = await _productoRepo.ObtenerTodos();

                var lista = await query
                    .Include(p=>p.Imagenes)
                    .Where(p=>p.UsuarioId==id)
                    .ToListAsync();
                return mapper.Map<IEnumerable<ProductoDTO>>(lista);
            }
            catch(Exception) { throw; }
        }

        public async Task<ProductoDTO> Registrar(CreacionProductoDTO modelo)
        {
            try
            {
                var producto = await _productoRepo.Insertar(modelo);
                await stockService.InOut(producto.Id, producto.Stock_Actual, "ingreso inicial", true);
                await _imagenService.AgregarImagen(modelo.Imagen1, producto.Id);
                if (modelo.Imagen2 != null) await _imagenService.AgregarImagen(modelo.Imagen2, producto.Id);
                if (modelo.Imagen3 != null) await _imagenService.AgregarImagen(modelo.Imagen3, producto.Id);

                return producto;
            }
            catch(Exception) { throw; }

        }

        public async Task<ProductoDTO> ActivoInactivo(int idProducto, string idUser)
        {
            return await _productoRepo.ActivoInactivo(idProducto, idUser);
        }

        public async Task<PaginasProductosDTO> ObtenerPorFiltro( int regXPagina, int paginaActual, string? nombre, int? idCategoria, int? idMarca, string? estado)
        {
            try
            {
                var query = await _productoRepo.ObtenerTodos();

                query = query
                    .Include(p => p.Imagenes)
                    .Include(p => p.Marca)
                    .Include(p => p.Categoria)
                    .Where(p => p.Activo);

                if (nombre != null) query = query.Where(p => p.nombre.Contains(nombre));
                if (idCategoria != null) query = query.Where(p => p.CategoriaId == idCategoria);
                if (idMarca != null) query = query.Where(p => p.MarcaId == idMarca);
                if (estado != null)
                {
                    if (estado.ToLower() == "nuevo") query = query.Where(p => p.Estado.ToLower() == "nuevo");
                    else if(estado.ToLower() =="usado") query = query.Where(p => p.Estado.ToLower() == "usado");
                }

                var cantidadPaginas = Math.Ceiling((decimal)await query.CountAsync()/regXPagina);

                var search = await query.Skip((paginaActual - 1) * regXPagina).Take(regXPagina).ToListAsync();


                var paginasProductos = new PaginasProductosDTO()
                {
                    Productos = mapper.Map<List<ProductoDTO>>(search),
                    Paginas = Convert.ToInt32(cantidadPaginas)
                };

                return paginasProductos;
            }
            catch(Exception) { throw; }
        }

        public async Task RestarStock(int idProducto, int cantidad)
        {
            await _productoRepo.RestarStock(idProducto, cantidad);
        }

    }
}
