using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using Microsoft.AspNetCore.Mvc;

namespace ecommeceBack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcasController : ControllerBase
    {
        private readonly IMarcaService _marcaService;

        public MarcasController(IMarcaService marcaService)
        {
            _marcaService = marcaService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(MarcaDTO modelo)
        {
            bool Resultado = await _marcaService.Registrar(modelo);
            if (!Resultado)
            {
                return BadRequest("No se pudo agregar la marca");
            }

            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            bool Resultado = await _marcaService.Eliminar(id);
            if (!Resultado)
            {
                return NotFound("No existe una marca con Id "+ id);
            }
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MarcaDTO>>> GetAll()
        {
            IQueryable<Marca> queryMarcas = await _marcaService.ObtenerTodos();
            List<MarcaDTO> marcas = queryMarcas.Select(m=> new MarcaDTO() { Nombre= m.Nombre}).ToList();
            return Ok(marcas);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Marca>> Get(int id)
        {
            var marca = await _marcaService.ObtenerPorId(id);
            if (marca is null) return NotFound();
            return Ok(marca);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, MarcaDTO marcaDto)
        {
            Marca marca = new Marca()
            {
                Id = id,
                Nombre = marcaDto.Nombre
            };
            await _marcaService.Actualizar(marca);
            return Ok();
        }
    }
}
