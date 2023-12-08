using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.MarcasDTO;
using Microsoft.AspNetCore.Mvc;

namespace ecommeceBack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcasController : ControllerBase
    {
        private readonly IGenericService<CreacionMarcaDTO, MarcaDTO> _marcaService;

        public MarcasController(IGenericService<CreacionMarcaDTO, MarcaDTO> marcaService)
        {
            _marcaService = marcaService;
        }

        [HttpPost]
        public async Task<ActionResult<MarcaDTO>> Post(CreacionMarcaDTO modelo)
        {
            try
            {
                var marca = await _marcaService.Registrar(modelo);
                return Ok(marca);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                bool Resultado = await _marcaService.Eliminar(id);
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MarcaDTO>>> GetAll()
        {
            try
            {
                var marcas = await _marcaService.ObtenerTodos();
                return Ok(marcas);

            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Marca>> Get(int id)
        {
            try
            {                
                var marca = await _marcaService.ObtenerPorId(id);
                return Ok(marca);
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

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, CreacionMarcaDTO creacionMarcaDto)
        {
            try
            {
                var marca = await _marcaService.Actualizar(id, creacionMarcaDto);
                return Ok(marca);
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
