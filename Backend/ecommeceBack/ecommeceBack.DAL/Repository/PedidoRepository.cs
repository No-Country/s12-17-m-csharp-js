using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.PedidoDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ecommeceBack.DAL.Repository
{

    public class PedidoRepository : IGenericRepository<CreacionPedidoDTO, PedidoDTO, Pedido>
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public PedidoRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<PedidoDTO> Actualizar(int id, CreacionPedidoDTO modelo)
        {
            try 
            {
                var pedido = await _dbcontext.Pedidos.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (pedido == null) throw new NotFoundException();

                pedido.Id = id;

                pedido.UsuarioId = modelo.usuarioId;

                pedido.fecha_inicio = modelo.fecha_inicio;

                pedido.Total = modelo.Total;

                pedido.EstadoPedido = modelo.EstadoPedido;

                _dbcontext.Update(pedido);

                await _dbcontext.SaveChangesAsync();

                return mapper.Map<PedidoDTO>(pedido);
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
                var pedido = await _dbcontext.Pedidos.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (pedido== null) throw new NotFoundException();

                _dbcontext.Remove(pedido);

                await _dbcontext.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<PedidoDTO> Insertar(CreacionPedidoDTO modelo)
        {
            try 
            { 
                var pedido= mapper.Map<Pedido>(modelo);

                _dbcontext.Add(pedido);

                await _dbcontext.SaveChangesAsync();
                
                return mapper.Map<PedidoDTO>(pedido);
            }
            catch (Exception) 
            {
                throw;
            }
        }

        public async Task<PedidoDTO> ObtenerPorId(int id)
        {
            var pedido = await _dbcontext.Pedidos.Where(c => c.Id == id).Include(c => c.Renglones_Pedidos).ThenInclude(p => p.Producto).FirstOrDefaultAsync();

            if (pedido == null) throw new NotFoundException();

            return mapper.Map<PedidoDTO>(pedido);
        }

        public async Task<IQueryable<Pedido>> ObtenerTodos()
        {
            try
            {
                IQueryable<Pedido> queryPedido = _dbcontext.Pedidos.Include(c => c.Renglones_Pedidos).ThenInclude(p => p.Producto);
                return queryPedido;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
