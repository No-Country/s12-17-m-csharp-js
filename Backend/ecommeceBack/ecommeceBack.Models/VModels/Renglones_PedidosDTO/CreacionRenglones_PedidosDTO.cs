﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.Renglones_PedidosDTO
{
    public class CreacionRenglones_PedidosDTO
    {
        
        public int renglon { get; set; }

        public int ProductoId { get; set; }

        public int PedidoId { get; set; }

        public int cantidad { get; set; }

        [MaxLength(45)]
        public string unidad { get; set; }

        [Precision(18, 2)]
        public decimal totalrenglon { get; set; }
    }
}
