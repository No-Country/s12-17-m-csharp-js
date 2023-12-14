using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.StockDTO;

namespace ecommeceBack.DAL.Contrato
{
    public interface IStockRepository : IGenericRepository<CreacionStockDTO, StockDTO, Stock>
    {
        Task<StockDTO> Entrada(int idProducto, StockentradaDTO stockentrada);
        Task<StockDTO> Salida(int idProducto, StocksalidaDTO stocksalida);

        Task<StockDTO> BusquedaPorProductoCantidad(int idProducto);


    }
}
