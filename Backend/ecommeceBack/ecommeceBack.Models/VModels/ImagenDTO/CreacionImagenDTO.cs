using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.ImagenDTO
{
    public class CreacionImagenDTO
    {
        public string Nombre { get; set; } = null!;
        public string Url { get; set; } = null!;
        public int ProductoId { get; set; }
    }
}
