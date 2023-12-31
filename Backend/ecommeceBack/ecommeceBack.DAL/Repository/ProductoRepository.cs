﻿using AutoMapper;
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
    public class ProductoRepository: IProductRepository
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
                var Producto = await _dbcontext.Productos.Where(c=> c.Id== id && c.Activo==true).FirstOrDefaultAsync();

                if (Producto == null) throw new NotFoundException();

                Producto.nombre = modelo.nombre;

                Producto.Descripcion = modelo.Descripcion;

                Producto.UsuarioId = modelo.UsuarioId;

                Producto.CategoriaId = modelo.CategoriaId;

                Producto.MarcaId = modelo.MarcaId;

                Producto.Modelo = modelo.Modelo;

                Producto.Unidad = modelo.Unidad;

                //Producto.Activo = modelo.Activo;

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
            Productoadd.Activo = true;
            _dbcontext.Add(Productoadd);
            await _dbcontext.SaveChangesAsync();
            return mapper.Map<ProductoDTO>(Productoadd);
        }

        public async Task<ProductoDTO> ObtenerPorId(int id)
        {
            try
            {
                var producto = await _dbcontext.Productos
                    .Where(p => p.Activo == true)
                    .Include(p=>p.Imagenes)
                    .Include(p=> p.Marca)
                    .Include(p=>p.Categoria)
                    .FirstOrDefaultAsync(p => p.Id == id);
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

        public async Task<ProductoDTO> ActivoInactivo(int idProducto, string idUser)
        {
            try
            {
                var Producto = await _dbcontext.Productos.Where(c => c.Id == idProducto).FirstOrDefaultAsync();

                if (Producto == null) throw new NotFoundException();
                if (Producto.UsuarioId != idUser) throw new UnauthorizedAccessException("No estas autorizado para realizar esta tarea");

                Producto.Activo = !Producto.Activo;

                _dbcontext.Update(Producto);

                await _dbcontext.SaveChangesAsync();

                return mapper.Map<ProductoDTO>(Producto);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task RestarStock(int idProducto, int cantidad)
        {
            try
            {
                var producto = await _dbcontext.Productos.Where(p => p.Activo == true && p.Id == idProducto).FirstOrDefaultAsync();

                if(producto == null) throw new NotFoundException("No existe el producto con el id especificado");

                producto.Stock_Actual -= cantidad;

                await _dbcontext.SaveChangesAsync();

            }
            catch (Exception)
            {

                throw;
            }


        }

    }
}
