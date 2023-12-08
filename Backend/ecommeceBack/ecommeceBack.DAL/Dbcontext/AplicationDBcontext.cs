using ecommeceBack.Models.Entidades;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;


namespace ecommeceBack.DAL.Dbcontext
{
    public class AplicationDBcontext : IdentityDbContext<Usuario>
    {
        public AplicationDBcontext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Datos> Datos { get; set; }

        public DbSet<Marca> Marcas {  get; set; }

        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Imagen> Imagenes { get; set; }

        public DbSet<Producto> Productos { get; set; }

        



    }
}
