using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.ProductoDTO
{
    public class CreacionProductoDTO
    {
        

        [Required(ErrorMessage ="Se requiere el Nombre del Producto")]
        [MaxLength(75)]
        public string nombre { get; set; }= string.Empty;

        [MaxLength(250)]
        public string? Descripcion { get; set; } = string.Empty;

        public string? UsuarioId { get; set; } = string.Empty;

        public int CategoriaId { get; set; }

        public int MarcaId { get; set; }

        [MaxLength(45)]
        public string? Modelo { get; set; } = string.Empty;

        [Required(ErrorMessage = "Se requiere la Unidad del Producto")]
        [MaxLength(45)]
        public string Unidad { get; set; } = string.Empty;

        //public bool Activo { get; set; }

        public int Stock_Actual { get; set; }

        [MaxLength(45)]
        public string Estado { get; set; } = string.Empty;

        public decimal precio { get; set; }
        public IFormFile Imagen1 { get; set; }
        public IFormFile? Imagen2 { get; set; }
        public IFormFile? Imagen3 { get; set; }
    }
}
