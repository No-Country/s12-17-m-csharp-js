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
    public class Stock
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StockID { get; set; }

        [MaxLength(250)]
        public string? Descripcion { get; set; }

        public int Entrada { get; set; }

        public int Id { get; set; }
    
        public int Salida { get; set; }

        public int Cantidad { get; set; }

        public DateTime FechaStkupdate { get; set; } = DateTime.Now;

        [ForeignKey("Id")]
        public virtual Producto Producto { get; set; } 


    }
}
