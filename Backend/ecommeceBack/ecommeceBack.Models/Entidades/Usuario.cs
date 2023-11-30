using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ecommeceBack.Models.Entidades
{
    public  class Usuario: IdentityUser
    {
        
        public DateTime FechaCreacion { get; set; }
        
        public bool Activo {  get; set; } 

    }
}
