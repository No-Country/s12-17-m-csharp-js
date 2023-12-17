using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.DatosDTO
{
    public class DatosDTO
    {
        public int Id { get; set; }

        [MaxLength(45)]
        public string Nombre { get; set; } = string.Empty;

        [MaxLength(45)]
        public string Apellido { get; set; } = string.Empty;

        [MaxLength(250)]
        public string Direccion { get; set; } = string.Empty;

        [MaxLength(45)]
        public string Provincia { get; set; } = string.Empty;

        [MaxLength(45)]
        public string Ciudad { get; set; } = string.Empty;

        [MaxLength(45)]
        public string DNI { get; set; } = string.Empty;

        [MaxLength(250)]
        public string Direccion_Entrega { get; set; } = string.Empty;
    }
}
