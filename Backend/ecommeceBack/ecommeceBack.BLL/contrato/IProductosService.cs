using ecommeceBack.Models.VModels.ProductoDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IProductosService: IGenericService<CreacionProductoDTO, ProductoDTO>
    {
        Task<IEnumerable<ProductoDTO>> ObtenerMisProductos(string id);
        Task<ProductoDTO> ActivoInactivo(int idProducto, string idUser);
        Task<PaginasProductosDTO> ObtenerPorFiltro(int regXPagina, int paginaActual, string? nombre, int? idCategoria, int? idMarca, string? estado);
        Task RestarStock(int idProducto, int cantidad);
    }
}
