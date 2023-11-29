using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class UsuarioRepository : IGenericRepository<Usuario>, IUsuarioRepository
    {
        private readonly UserManager<Usuario> userManager;
        private readonly AplicationDBcontext _dbcontext;
        public UsuarioRepository(UserManager<Usuario> userManager, AplicationDBcontext dbcontext)
        {
            this.userManager = userManager;

            this._dbcontext = dbcontext;
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
          
            throw new NotImplementedException();
        }

        public Task<Usuario> ObtenerPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Usuario>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Registrar(Usuario modelo, string password)
        {
            var trasaction = await _dbcontext.Database.BeginTransactionAsync();
            try
            {
                var resultado = await userManager.CreateAsync(modelo, password);
                if (!resultado.Succeeded) return false; 
                
                var resultadoRol =   await userManager.AddToRoleAsync(modelo, "usuario");
                if (!resultadoRol.Succeeded) 
                { 
                    
                await trasaction.RollbackAsync();
                 return false;
                }
                await trasaction.CommitAsync();
                return true;
            }
            catch (Exception ex)
            {
                await trasaction.RollbackAsync();
                return false;
            }
        }
    }

     

        
    
}
