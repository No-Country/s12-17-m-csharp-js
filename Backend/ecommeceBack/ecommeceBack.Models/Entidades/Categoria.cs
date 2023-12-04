using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.Entidades
{
    public class Categoria
    {
        public int Id { get; set; }
        [MaxLength(45)]
        public string Nombre { get; set; } = string.Empty;

        public bool Activo { get; set; }
    }
}
