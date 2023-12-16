using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.MercadoPago;
using ecommeceBack.Models.VModels.PedidoDTO;
using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ecommeceBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private readonly IPedidoService _pedidoService;
        private readonly IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO> _renglonService;


        public PedidosController(IPedidoService pedidoService, IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO> renglonService)
        {
            _pedidoService = pedidoService;
            _renglonService = renglonService;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet]
        public async Task<ActionResult<PedidoDTO>> ListarporID(int id)
        {
            try
            {
                var pedido = await _pedidoService.ObtenerPorId(id);
              
                return Ok(pedido);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<ActionResult<PedidoDTO>>Registrar( RequestMercadoPago requestMercadoPago) 
        {
            try
            {
                var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
                var id = claim.Value;

                var emailClaim = HttpContext.User.Claims.Where(c => c.Type == "mail").FirstOrDefault();
                var email = emailClaim.Value;


                var pedidoFinal = await _pedidoService.Registrar(id, email, requestMercadoPago);


                return Ok(pedidoFinal);

            }
            catch(BadRequestException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }

        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut]
        public async Task<ActionResult<DatosDTO>> Actualizar(int id, CreacionRenglones_PedidosDTO modelo)
        {
            try
            {
                var datos = await _renglonService.Actualizar(id, modelo);

                return Ok(datos);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpDelete]
        public async Task<IActionResult> EliminarPedidoTotal(int id) 
        {
            try
            {
                var resultado = await _pedidoService.Eliminar(id);

               
                await _renglonService.Eliminar(id);

                return NoContent();
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }

        }

    }
}
