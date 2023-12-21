using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.ProductoDTO
{
    public class PaginasProductosDTO
    {
        public int Paginas { get; set; }
        public List<ProductoDTO> Productos { get; set; }
    }
}
