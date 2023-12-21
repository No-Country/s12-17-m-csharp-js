using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.CategoriaDTO
{
    public class CreacionCategoriaDTO
    {
        [Required]
        [MaxLength(45)]
        public string Nombre { get; set; }
    }
}
