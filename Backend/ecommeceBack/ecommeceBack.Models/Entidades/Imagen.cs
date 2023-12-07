﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.Entidades
{
    public class Imagen
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string Url { get; set; } = null!;
        public bool Activo { get; set;}
        // public int IdProducto { get; set; }
    }
}
