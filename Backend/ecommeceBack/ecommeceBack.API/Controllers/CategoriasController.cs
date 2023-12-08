using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.VModels.CategoriaDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ecommeceBack.API.Controllers
{
    [Route("api/categorias")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly IGenericService<CreacionCategoriaDTO, CategoriaDTO> categoriaService;

        public CategoriasController(IGenericService<CreacionCategoriaDTO, CategoriaDTO> categoriaService)
        {
            this.categoriaService = categoriaService;
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpPost]
        public async Task<ActionResult<CategoriaDTO>> Post(CreacionCategoriaDTO modelo)
        {
            try
            {
                var categoria = await categoriaService.Registrar(modelo);

                return Ok(categoria);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
                
            }
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme,Roles ="admin")]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                bool resultado = await categoriaService.Eliminar(id);
               
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
        public async Task<ActionResult<IEnumerable<CategoriaDTO>>> GetAll()
        {
            try
            {
                var categorias = await categoriaService.ObtenerTodos();
                return Ok(categorias);

            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<CategoriaDTO>> Get(int id)
        {
            try
            {
                var categoria = await categoriaService.ObtenerPorId(id);

                
                return Ok(categoria);
            }
            catch(NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, CreacionCategoriaDTO creacionCategoriaDTO)
        {
            try
            {
                var categoria = await categoriaService.Actualizar(id, creacionCategoriaDTO);
                return Ok(categoria);

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
