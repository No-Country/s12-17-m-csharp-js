using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.StockDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IStockService 
    {
        Task<List<HistorialStockDTO>> ObtenerStockPorIdProducto(int idProducto);

        Task<HistorialStockDTO> InOut(int IdProducto, int cantidad, string descripcion, bool InOut);


    }
}
