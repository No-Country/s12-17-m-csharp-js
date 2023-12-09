using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.ProductoDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ecommeceBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IGenericService<CreacionProductoDTO, ProductoDTO> _productoService;

        public ProductoController(IGenericService<CreacionProductoDTO, ProductoDTO> productoService)
        {
            _productoService = productoService;
        }

        [HttpGet("BusquedaXID")]
        public async Task<ActionResult<ProductoDTO>> ListarporID(int id)
        {
            try
            {
                var producto = await _productoService.ObtenerPorId(id);

                return Ok(producto);
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

        [HttpGet("BuquedaCompleta")]
        public async Task<ActionResult<IEnumerable<ProductoDTO>>> Otenertodo()
        {
            try
            {
                var producto = await _productoService.ObtenerTodos();
                return Ok(producto);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<ActionResult<ProductoDTO>> registrar(CreacionProductoDTO modelo)
        {
            try { 
            var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
            var id = claim.Value;
            modelo.UsuarioId = id;
            var producto = await _productoService.Registrar(modelo);

            return Ok(producto);
            }
            catch(Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult<ProductoDTO>> Actualizar(int id, CreacionProductoDTO modelo)
        {
            try
            {
                var producto = await _productoService.Actualizar(id, modelo);

                return Ok(producto);
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            try
            {
                var resultado = await _productoService.Eliminar(id);

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
