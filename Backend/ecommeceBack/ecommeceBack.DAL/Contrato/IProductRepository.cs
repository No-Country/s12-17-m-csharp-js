using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.ProductoDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Contrato
{
    public interface IProductRepository : IGenericRepository<CreacionProductoDTO, ProductoDTO, Producto>
    {
        Task<ProductoDTO> ActivoInactivo(int idProducto, string idUser);
    }
}
