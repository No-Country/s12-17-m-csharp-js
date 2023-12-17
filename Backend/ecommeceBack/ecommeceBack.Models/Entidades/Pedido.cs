using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.Entidades
{
    public class Pedido
    {
        public int Id { get; set; }

        public string UsuarioId { get; set; }

        public Usuario Usuario { get; set; }

        public DateTime fecha_inicio { get; set; }

        [Precision(18, 2)]
        public decimal Total { get; set; }

        [MaxLength(45)]
        public string? EstadoPedido {  get; set; }

        public List<Renglones_Pedidos> Renglones_Pedidos { get; set; } = new List<Renglones_Pedidos>();

        public long? IdTransaccionPago { get; set; }
    }
}
