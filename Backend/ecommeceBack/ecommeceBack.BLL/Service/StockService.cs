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
      

        public async Task<HistorialStockDTO> InOut(int IdProducto, int cantidad, string descripcion, bool InOut)
        {
            return await _stockRepo.InOut(IdProducto, cantidad, descripcion, InOut);
        }




        public async Task<List<HistorialStockDTO>> ObtenerStockPorIdProducto(int idProducto)
        {
            return await _stockRepo.BusquedaPorIdProducto(idProducto);
        }

          


    }
}