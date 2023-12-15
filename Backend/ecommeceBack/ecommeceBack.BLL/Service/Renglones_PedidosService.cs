using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ecommeceBack.BLL.Service
{
    public class Renglones_PedidosService: IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO>
    {
        private readonly IGenericRepository<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO, Renglones_Pedidos> _renglonesRepo;
        private readonly IMapper mapper;

        public Renglones_PedidosService(IGenericRepository<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO, Renglones_Pedidos> renglonesRepo, IMapper mapper)
        {
            _renglonesRepo = renglonesRepo;
            this.mapper = mapper;
        }

        public async Task<Renglones_PedidosDTO> Actualizar(int id, CreacionRenglones_PedidosDTO modelo)
        {
            return await _renglonesRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _renglonesRepo.Eliminar(id);
        }

        public async Task<Renglones_PedidosDTO> ObtenerPorId(int id)
        {
            return await _renglonesRepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<Renglones_PedidosDTO>> ObtenerTodos()
        {
            var query = await _renglonesRepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<Renglones_PedidosDTO>>(lista);
        }

        public async Task<Renglones_PedidosDTO> Registrar(CreacionRenglones_PedidosDTO modelo)
        {
            return await _renglonesRepo.Insertar(modelo);
        }
    }
}
