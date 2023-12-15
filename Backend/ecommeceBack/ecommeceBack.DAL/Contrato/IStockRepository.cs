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
    public interface IStockRepository {

         Task<List<HistorialStockDTO>> BusquedaPorIdProducto(int idProducto);

        Task<HistorialStockDTO> InOut(int idProducto, int cantidad, string descripcion, bool inOut);


    }
}
