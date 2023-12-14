using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.StockDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class StockService : IStockService
    {
        private readonly IStockRepository _stockRepo;
        private readonly IMapper mapper;


        public StockService(IStockRepository stockRepo, IMapper mapper)
        {
            _stockRepo = stockRepo;
            this.mapper = mapper;

        }
        public async Task<StockDTO> Actualizar(int id, CreacionStockDTO modelo)
        {
            return await _stockRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _stockRepo.Eliminar(id);
        }

        public async Task<StockDTO> Entrada(int IdProducto, StockentradaDTO stockentrada)
        {
            return await _stockRepo.Entrada(IdProducto, stockentrada);
        }

        public async Task<StockDTO> ObtenerPorId(int id)
        {
            return await _stockRepo.ObtenerPorId(id);
        }

        public async Task<StockDTO> ObtenerStockPorIdProducto(int idProducto)
        {
            return await _stockRepo.BusquedaPorProductoCantidad(idProducto);
        }

        public async Task<IEnumerable<StockDTO>> ObtenerTodos()
        {

            var query = await _stockRepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<StockDTO>>(lista);
        }

        public async Task<StockDTO> Registrar(CreacionStockDTO modelo)
        {
            return await _stockRepo.Insertar(modelo);
        }

        public async Task<StockDTO> Salida(int IdProducto, StocksalidaDTO stocksalida)
        {
            return await _stockRepo.Salida(IdProducto, stocksalida);
        }
    }
}