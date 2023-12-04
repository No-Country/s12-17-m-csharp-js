﻿using ecommeceBack.BLL.contrato;
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
        private readonly IUsuarioRepository _registrarRepo;

        public UsuarioService(IGenericRepository<Usuario> usuarioRepo, IUsuarioRepository registrarRepo)
        {
            _UsuarioRepo = usuarioRepo;
            _registrarRepo = registrarRepo;
        }

        public Task<bool> Actualizar(Usuario modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Registrar(CreacionUsuarioDTO modelo)
        {

            Usuario Usuario = new Usuario()
            {
                UserName = modelo.Email,
                Email = modelo.Email,
                FechaCreacion = DateTime.Now

            };

            return await _registrarRepo.Registrar(Usuario, modelo.Password);
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