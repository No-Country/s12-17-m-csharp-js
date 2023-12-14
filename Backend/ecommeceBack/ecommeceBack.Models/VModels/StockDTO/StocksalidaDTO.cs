using ecommeceBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ecommeceBack.Models.VModels.ProductoDTO;

namespace ecommeceBack.Models.VModels.StockDTO
{
    public class StocksalidaDTO
    {
       
        public int StockID { get; set; }

        [MaxLength(250)]
        public string? Descripcion { get; set; }

        public int Id { get; set; }

        public int Salida { get; set; }

        public int Cantidad { get; set; }

        public DateTime FechaStkupdate { get; set; }

        [ForeignKey("Id")]
        public virtual ProductoDTO.ProductoDTO Producto { get; set; }



    }
}
