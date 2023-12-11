using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.CategoriaDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class DataSeeder : IDataSeeder
    {
        private readonly UserManager<Usuario> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IGenericRepository<CreacionCategoriaDTO, CategoriaDTO, Categoria> _categoriaRepo;

        public DataSeeder(UserManager<Usuario> userManager, RoleManager<IdentityRole> roleManager, IGenericRepository<CreacionCategoriaDTO, CategoriaDTO, Categoria> categoriaRepo)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _categoriaRepo = categoriaRepo;
        }

        public async Task CrearCategorias()
        {
            List<CreacionCategoriaDTO> categorias = new List<CreacionCategoriaDTO>()
            {
                new CreacionCategoriaDTO(){Nombre="Games" },
                new CreacionCategoriaDTO(){Nombre="Celulares" },
                new CreacionCategoriaDTO(){Nombre="Muebles" }
            };
            var query = await _categoriaRepo.ObtenerTodos();
            foreach(var categoria in categorias)
            {
                try
                {
                    var existeCategoria = await query.Where(c => c.Nombre == categoria.Nombre).FirstOrDefaultAsync();
                    if (existeCategoria == null) await _categoriaRepo.Insertar(categoria);
                }
                catch(Exception) { throw; }
            }
        }

        public async Task CrearRoles()
        {
            string[] roles = { "admin", "usuario" };

            foreach (string rol in roles)
            {
                try
                {
                    var existeRol = await roleManager.RoleExistsAsync(roleName: rol);

                    if (!existeRol) await roleManager.CreateAsync(new IdentityRole(roleName: rol));

                }
                catch (Exception)
                {

                    throw;
                }
            }

        }

        public async Task CrearUsuarioAdmin()
        {
            try
            {
                string email = "admin@gmail.com";

                var admin = await userManager.FindByEmailAsync(email);

                if (admin != null) return;

                var nuevoAdmin = new Usuario { UserName = email, Email = email };

                var resultado = await userManager.CreateAsync(nuevoAdmin, "Admin123!");

                if (!resultado.Succeeded) throw new Exception("No se pudo crear el usuario administrador");

                var resultadoRol = await userManager.AddToRoleAsync(nuevoAdmin, "admin");

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
