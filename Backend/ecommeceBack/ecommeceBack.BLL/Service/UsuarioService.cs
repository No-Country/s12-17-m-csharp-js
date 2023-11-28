using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IGenericRepository<Usuario> _UsuarioRepo;

        public UsuarioService(IGenericRepository<Usuario> usuarioRepo)
        {
            _UsuarioRepo = usuarioRepo;
        }

        public Task<bool> Actualizar(Usuario modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Insertar(CreacionUsuarioDTO modelo)
        {
            byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);

            string PasswordHash = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: modelo.Password,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));

            Usuario Usuario = new Usuario()
            {
                UserName = modelo.Email,
                Email = modelo.Email,
                PasswordHash = PasswordHash,

            };

            return await _UsuarioRepo.Insertar(Usuario);
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
