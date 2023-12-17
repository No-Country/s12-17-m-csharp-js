using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.Entidades
{
    public class Renglones_Pedidos
    {
        public int Id { get; set; }

        public int renglon { get; set; }

        public int ProductoId { get; set; }

        public Producto Producto { get; set; }

        public int PedidoId { get; set; }
        
        public Pedido Pedido { get; set; }

        public int cantidad { get; set; }

        [MaxLength(45)]
        public string unidad { get; set; }

        [Precision(18, 2)]
        public decimal precio { get; set; }

        [Precision(18, 2)]
        public decimal totalrenglon { get; set; }

    }
}
