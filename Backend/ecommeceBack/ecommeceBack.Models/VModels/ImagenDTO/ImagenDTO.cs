using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.ImagenDTO
{
    public class ImagenDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string Url { get; set; } = null!;
    }
}
