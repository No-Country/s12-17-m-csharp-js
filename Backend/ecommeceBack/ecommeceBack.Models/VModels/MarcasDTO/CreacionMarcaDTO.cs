using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.MarcasDTO
{
    public class CreacionMarcaDTO
    {
        [Required]
        [MaxLength(45)]
        public string Nombre { get; set; }
    }
}
