using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class UsuarioRepository : IGenericRepository<Usuario>
    {
        private readonly UserManager<Usuario> userManager;

        public UsuarioRepository(UserManager<Usuario> userManager)
        {
            this.userManager = userManager;
        }

        public Task<bool> Actualizar(Usuario modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Insertar(Usuario modelo)
        {
            try
            {
                var resultado = await userManager.CreateAsync(modelo);
                return resultado.Succeeded;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public Task<Usuario> ObtenerPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Usuario>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }

        
    }

     

        
    
}
