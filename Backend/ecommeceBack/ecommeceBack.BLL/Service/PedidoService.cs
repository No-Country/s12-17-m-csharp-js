using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.PedidoDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class PedidoService : IGenericService<CreacionPedidoDTO, PedidoDTO>
    {
        private readonly IGenericRepository<CreacionPedidoDTO, PedidoDTO, Pedido> _pedidoRepo;
        private readonly IMapper mapper;

        public PedidoService(IGenericRepository<CreacionPedidoDTO, PedidoDTO, Pedido> pedidoRepo, IMapper mapper)
        {
            _pedidoRepo = pedidoRepo;
            this.mapper = mapper;
        }

        public async Task<PedidoDTO> Actualizar(int id, CreacionPedidoDTO modelo)
        {
            return await _pedidoRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _pedidoRepo.Eliminar(id);
        }

        public async Task<PedidoDTO> ObtenerPorId(int id)
        {
            return await _pedidoRepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<PedidoDTO>> ObtenerTodos()
        {
            var query = await _pedidoRepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<PedidoDTO>>(lista);
        }

        public async Task<PedidoDTO> Registrar(CreacionPedidoDTO modelo)
        {
            return await _pedidoRepo.Insertar(modelo);
        }
    }
}
