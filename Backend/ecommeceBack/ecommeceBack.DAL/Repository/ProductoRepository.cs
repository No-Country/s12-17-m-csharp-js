using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.MarcasDTO;
using ecommeceBack.Models.VModels.ProductoDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ecommeceBack.DAL.Repository
{
    public class ProductoRepository: IGenericRepository<CreacionProductoDTO, ProductoDTO, Producto>
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public ProductoRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<ProductoDTO> Actualizar(int id, CreacionProductoDTO modelo)
        {
            try 
            {
                var Producto = await _dbcontext.Productos.Where(c=> c.Id== id).FirstOrDefaultAsync();

                if (Producto == null) throw new NotFoundException();

                Producto.nombre = modelo.nombre;

                Producto.Descripcion = modelo.Descripcion;

                Producto.UsuarioId = modelo.UsuarioId;

                Producto.CategoriaId = modelo.CategoriaId;

                Producto.MarcaId = modelo.MarcaId;

                Producto.Modelo = modelo.Modelo;

                Producto.Unidad = modelo.Unidad;

                Producto.Activo = modelo.Activo;

                Producto.Stock_Actual = modelo.Stock_Actual;

                Producto.Estado = modelo.Estado;

                Producto.precio = modelo.precio;

                _dbcontext.Update(Producto);

                await _dbcontext.SaveChangesAsync();


                return mapper.Map<ProductoDTO>(Producto);
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
                var Producto = await _dbcontext.Productos.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (Producto == null) throw new NotFoundException();

                _dbcontext.Remove(Producto);

                await _dbcontext.SaveChangesAsync();

                return true;
            }catch (Exception) 
            {
                throw; 
                    
            }
        }

        public async Task<ProductoDTO> Insertar(CreacionProductoDTO modelo)
        {
            var Productoadd = mapper.Map<Producto>(modelo);
            _dbcontext.Add(Productoadd);
            await _dbcontext.SaveChangesAsync();
            return mapper.Map<ProductoDTO>(Productoadd);
        }

        public async Task<ProductoDTO> ObtenerPorId(int id)
        {
            try
            {
                var producto = await _dbcontext.Productos.FirstOrDefaultAsync(p => p.Id == id);
                if (producto == null) throw new NotFoundException();
                return mapper.Map<ProductoDTO>(producto);
            }
            catch (Exception)
            {
                throw;
            }

        }

        public async Task<IQueryable<Producto>> ObtenerTodos()
        {
            try
            {
                IQueryable<Producto> queryProducto = _dbcontext.Productos;
                return queryProducto;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
