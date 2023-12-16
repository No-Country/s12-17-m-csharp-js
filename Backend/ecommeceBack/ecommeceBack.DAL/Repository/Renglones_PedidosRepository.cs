using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.PedidoDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class Renglones_PedidosRepository : IGenericRepository<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO, Renglones_Pedidos>
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public Renglones_PedidosRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<Renglones_PedidosDTO> Actualizar(int id, CreacionRenglones_PedidosDTO modelo)
        {
            try
            {
                var renglonespedido = await _dbcontext.Renglones.Where(c => c.PedidoId == modelo.PedidoId).ToListAsync();

                if (renglonespedido == null) throw new NotFoundException();

                foreach (var renglon in renglonespedido) 
                { 
                renglon.Id = id;

                renglon.PedidoId = modelo.PedidoId;

                renglon.renglon = modelo.renglon;

                renglon.ProductoId = modelo.ProductoId;

                renglon.cantidad = modelo.cantidad;

                renglon.unidad = modelo.unidad;


                renglon.totalrenglon = modelo.totalrenglon;

                _dbcontext.Update(renglon);

                }
                //await _dbcontext.SaveChangesAsync();

                return mapper.Map<Renglones_PedidosDTO>(renglonespedido);
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
                var renglonespedido = await _dbcontext.Renglones.Where(c => c.PedidoId == id).ToListAsync();

                if (renglonespedido == null) throw new NotFoundException();

              foreach(var renglon in renglonespedido) { 
                _dbcontext.Remove(renglon);
                }
                await _dbcontext.SaveChangesAsync();

                return true;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Renglones_PedidosDTO> Insertar(CreacionRenglones_PedidosDTO modelo)
        {
            try
            {
                var renglonespedido  = mapper.Map<Renglones_Pedidos>(modelo);
                _dbcontext.Add(renglonespedido);
                await _dbcontext.SaveChangesAsync();

                return mapper.Map<Renglones_PedidosDTO>(renglonespedido);

            }
            catch (Exception)
            {
                throw;

            }
        }

        public async Task<Renglones_PedidosDTO> ObtenerPorId(int id)
        {

             
            var renglonespedido = await _dbcontext.Renglones.Where(c => c.PedidoId == id).OrderBy(c => c.renglon).ToListAsync();
            
            if (renglonespedido == null) throw new NotFoundException();

           

            return mapper.Map<Renglones_PedidosDTO>(renglonespedido);
        }

        public async Task<IQueryable<Renglones_Pedidos>> ObtenerTodos()
        {
            try
            {
                IQueryable<Renglones_Pedidos> queryReglonesPedido = _dbcontext.Renglones;
                return queryReglonesPedido;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
