using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ecommeceBack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentasController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;

        public CuentasController(IUsuarioService usuarioService)
        {
            this.usuarioService = usuarioService;
        }

        [HttpPost]
        public async Task<IActionResult> Registro([FromBody]CreacionUsuarioDTO modelo) 
        {
            bool Resultado = await usuarioService.Insertar(modelo);
           
            return StatusCode(StatusCodes.Status200OK, new { valor = Resultado });
        }
    }
}
