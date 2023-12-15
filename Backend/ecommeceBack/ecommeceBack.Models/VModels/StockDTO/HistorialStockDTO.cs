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
    public class HistorialStockDTO
    {
        
        public int Id { get; set; }

        public bool InOut { get; set; }

        public string? Descripcion { get; set; }
    
        public int ProductoId { get; set; }

        public int Cantidad { get; set; }

        public int StockActual { get; set; }

        public DateTime FechaStkupdate { get; set; }


    }
}
