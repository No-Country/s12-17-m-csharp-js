using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using ecommeceBack.Models.VModels.Auth;
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
        public async Task<ActionResult<RespuestaAuth>> Registro([FromBody]CreacionUsuarioDTO modelo) 
        {
            try
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

                var token = tokenService.GenerarToken(modelo.Email, 1);

                RespuestaAuth respuestaAuth = new() { 
                Email= modelo.Email,
                Nombre = modelo.Nombre,
                Apellido = modelo.Apellido,
                Token = token.Result
                };

                return Ok(respuestaAuth);

            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }
        }


        [HttpPost("login")]
        public async Task<ActionResult<RespuestaAuth>> Login([FromBody] CredencialesUsuario credencialesUsuario)
        {
            try
            {
                var result = await signInManager.PasswordSignInAsync(credencialesUsuario.Email, credencialesUsuario.Password, isPersistent: false, lockoutOnFailure: false);

                if (!result.Succeeded) return BadRequest("Credenciales incorrectas");
            

                return Ok(await usuarioService.GetCredencialesAsync(credencialesUsuario.Email));
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }


        }


    }
}
