﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.Auth
{
    public class RespuestaAuth
    {
        public string Email { get; set; }

        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public string Token { get; set; }

    }
}
