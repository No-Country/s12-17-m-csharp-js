using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.Entidades
{
    public class Producto
    {
       
        public int Id { get; set; }

        [MaxLength(75)]
        public string nombre { get; set; }

        [MaxLength(250)]
        public string? Descripcion { get; set; }

        public string UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
        
        public int CategoriaId { get; set; }
        public Categoria Categoria { get; set; }

        public int MarcaId { get; set; }
        public Marca Marca { get; set; }

        [MaxLength(45)]
        public string? Modelo { get; set; }
        
        [MaxLength(45)]
        public string Unidad {  get; set; }

        public bool Activo { get; set; }

        public int Stock_Actual {  get; set; }

        [MaxLength(45)]
        public string Estado { get; set; }
        [Precision(18,2)]
        public decimal precio { get; set; }
        public List<Imagen> Imagenes { get; set; } = new List<Imagen>();
        public List<Renglones_Pedidos> Renglones_Pedidos { get; set; } = new List<Renglones_Pedidos>();

    }
}
