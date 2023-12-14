using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.StockDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IStockService : IGenericService<CreacionStockDTO, StockDTO>
    {
        Task<StockDTO> ObtenerStockPorIdProducto(int idProducto);
        
        Task<StockDTO> Entrada(int IdProducto, StockentradaDTO stockentrada);

        Task<StockDTO> Salida(int IdProducto, StocksalidaDTO stocksalida);


    }
}
