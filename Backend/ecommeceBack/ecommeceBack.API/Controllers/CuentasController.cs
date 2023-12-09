﻿using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using ecommeceBack.Models.VModels.DatosDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ecommeceBack.API.Controllers
{

    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class CuentasController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;
        private readonly SignInManager<Usuario> signInManager;
        private readonly ITokenService tokenService;
        private readonly IGenericService<CreacionDatosDTO, DatosDTO> datosService;

        public CuentasController(IUsuarioService usuarioService,SignInManager<Usuario> signInManager, ITokenService tokenService, IGenericService<CreacionDatosDTO, DatosDTO> datosService)
        {
            this.usuarioService = usuarioService;
            this.signInManager = signInManager;
            this.tokenService = tokenService;
            this.datosService = datosService;
        }

        [HttpPost("registro")]
        public async Task<IActionResult> Registro([FromBody]CreacionUsuarioDTO modelo) 
        {
           
            bool Resultado = await usuarioService.Registrar(modelo);
           if (!Resultado) 
            { 

                return BadRequest("No se pudo agregar su Usuario");
            }

           
            CreacionDatosDTO datosbase = new CreacionDatosDTO()
            {
                Nombre = modelo.Nombre,
                Apellido = modelo.Apellido
            };

            var datosRegistrado = await datosService.Registrar(datosbase);

            //modelo.DatosId = datosRegistrado.Id;
            var result = await usuarioService.ActualizarIdDatos(datosRegistrado.Id, modelo.Email);

            return Ok();
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] CredencialesUsuario credencialesUsuario)
        {
            var result = await signInManager.PasswordSignInAsync(credencialesUsuario.Email, credencialesUsuario.Password, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded) return BadRequest("Credenciales incorrectas");
            
            var token = tokenService.GenerarToken(credencialesUsuario.Email, 1);


            return Ok(new{ token = token.Result });

        }


    }
}