using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ecommeceBack.API.Controllers
{
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class CuentasController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;
        private readonly SignInManager<Usuario> signInManager;
        private readonly ITokenService tokenService;

        public CuentasController(IUsuarioService usuarioService,SignInManager<Usuario> signInManager, ITokenService tokenService)
        {
            this.usuarioService = usuarioService;
            this.signInManager = signInManager;
            this.tokenService = tokenService;
        }

        [HttpPost("registro")]
        public async Task<IActionResult> Registro([FromBody]CreacionUsuarioDTO modelo) 
        {
            bool Resultado = await usuarioService.Registrar(modelo);
           if (!Resultado) 
            { 
                return BadRequest("No se pudo agregar su Usuario");
            }

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
