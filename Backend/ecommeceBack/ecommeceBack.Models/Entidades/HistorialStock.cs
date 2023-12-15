using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.Entidades
{
    public class HistorialStock
    {
               
        public int Id { get; set; }

        [MaxLength(250)]
        public string? Descripcion { get; set; }

        //in 1 out 0
        public bool InOut { get; set; }

        public int ProductoId { get; set; }

        public int StockActual { get; set; }
        public int Cantidad { get; set; }

        public DateTime FechaStkupdate { get; set; } = DateTime.Now;

     
        public virtual Producto Producto { get; set; } 


    }
}
