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
        private readonly IProductosService _productoService;

        public ProductoController(IProductosService productoService)
        {
            _productoService = productoService;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("misproductos")]
        public async Task<ActionResult<IEnumerable<ProductoDTO>>> Listar()
        {
            try
            {
                var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
                var id = claim.Value;
                var producto = await _productoService.ObtenerMisProductos(id);

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

        [HttpGet("Busqueda")]
        public async Task<ActionResult<IEnumerable<ProductoDTO>>> Otenertodo(string? nombre, int? idCategoria, int? idMarca, string? estado)
        {
            try
            {
                var producto = await _productoService.ObtenerPorFiltro(nombre,idCategoria, idMarca, estado);
                return Ok(producto);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<ActionResult<ProductoDTO>> registrar([FromForm]CreacionProductoDTO CreacionProductoDTO)
        {
            try { 
            var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
            var id = claim.Value;
                CreacionProductoDTO.UsuarioId = id;
            var producto = await _productoService.Registrar(CreacionProductoDTO);

            return Ok(producto);
            }
            catch(Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut("activo")]
        public async Task<ActionResult<ProductoDTO>> ActivoInactivo(int idProducto)
        {
            try
            {
                var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
                var idUser = claim.Value;
                var producto = await _productoService.ActivoInactivo(idProducto, idUser);

                return Ok(producto);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (UnauthorizedAccessException ex)
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
