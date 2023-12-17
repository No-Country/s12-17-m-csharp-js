using ecommeceBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.PedidoDTO
{
    public class PedidoDTO
    {
        public int Id { get; set; }

        public string? usuarioId { get; set; }

        public DateTime fecha_inicio { get; set; }

        [Precision(18, 2)]
        public decimal Total { get; set; }

        [MaxLength(45)]
        public string? EstadoPedido { get; set; }

        public List<Renglones_PedidosDTO.Renglones_PedidosDTO> Renglones_Pedidos { get; set; } = new List<Renglones_PedidosDTO.Renglones_PedidosDTO>();
    }
}
