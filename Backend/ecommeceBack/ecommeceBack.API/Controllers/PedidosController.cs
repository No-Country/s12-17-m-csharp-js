using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.Models.VModels.DatosDTO;
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
        private readonly IGenericService<CreacionPedidoDTO, PedidoDTO> _pedidoService;
        private readonly IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO> _renglonService;


        public PedidosController(IGenericService<CreacionPedidoDTO, PedidoDTO> pedidoService, IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO> renglonService)
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
        public async Task<ActionResult<PedidoDTO>>Registrar(List<CreacionRenglones_PedidosDTO> renglones) 
        {
            var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
            var id = claim.Value;
            

            var pedido = new CreacionPedidoDTO()
            { 
                usuarioId = id,

                fecha_inicio = DateTime.Now,

                EstadoPedido = "Sin Procesar",

                Total = 0,
            };

            var pedidoCreado = await _pedidoService.Registrar(pedido);

            int indice = 1; 
            decimal total = 0;
            foreach (var renglon in renglones) 
            {
                renglon.renglon = indice;
                renglon.PedidoId = pedidoCreado.Id;
                renglon.totalrenglon = renglon.precio * renglon.cantidad;
                total += renglon.totalrenglon;
                await _renglonService.Registrar(renglon);
                indice++;


            }



            CreacionPedidoDTO creacionpedido = new CreacionPedidoDTO()
            {
                Total = total,

                EstadoPedido = pedidoCreado.EstadoPedido,

                fecha_inicio = pedidoCreado.fecha_inicio,

                usuarioId = pedidoCreado.usuarioId

            };
            var pedidofinal = await _pedidoService.Actualizar(pedidoCreado.Id, creacionpedido);

            return Ok(pedidofinal);

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
