using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.Models.VModels.StockDTO;
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
    public class StockController : ControllerBase
    {

        private readonly IStockService _stockService;

        public StockController(IStockService stockService)
        {
            _stockService = stockService;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("Historial de stock")]
        public async Task<ActionResult<IEnumerable<StockDTO>>> Listar(int idProducto)
        {
            try
            {
                var stock = await _stockService.ObtenerStockPorIdProducto(idProducto);

                return Ok(stock);
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
        public async Task<ActionResult<StockDTO>> ListarporStockID(int id)
        {
            try
            {
                var stock = await _stockService.ObtenerPorId(id);

                return Ok(stock);
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


        [HttpGet("Obtener todos los stocks")]
        public async Task<ActionResult<IEnumerable<StockDTO>>> Obtenertodo()
        {
            try
            {
                IEnumerable<StockDTO> stock;
                stock = await _stockService.ObtenerTodos();
                
                return Ok(stock);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("Registrar")]
        public async Task<ActionResult<StockDTO>> Registrar([FromForm]CreacionStockDTO modelo)
        {
            try
            {
                var producto = await _stockService.Registrar(modelo);

                return Ok(producto);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }

        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut]
        public async Task<ActionResult<StockUpdateDTO>> Actualizar(int id, CreacionStockDTO modelo)
        {
            try
            {
                var producto = await _stockService.Actualizar(id, modelo);

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
                var resultado = await _stockService.Eliminar(id);

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

