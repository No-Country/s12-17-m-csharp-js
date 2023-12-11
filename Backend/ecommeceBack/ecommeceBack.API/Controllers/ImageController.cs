using CloudinaryDotNet.Actions;
using CloudinaryDotNet;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;
using ecommeceBack.Models.VModels.ImagenDTO;
using ecommeceBack.Models.Entidades;
using ecommeceBack.BLL.Service;
using Microsoft.AspNetCore.Cors;

namespace ecommeceBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [ApiController]
    [Route("api/[controller]")]
    public class ImageController : Controller
    {
        private readonly ImagenService _imagenService;

        public ImageController( ImagenService imagenService)
        {
            _imagenService = imagenService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImagenDTO>>> GetAll()
        {
            try
            {
                var result= await _imagenService.GetAll();
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpPost("{productoId:int}")]
        public async Task<ActionResult<ImagenDTO>> Create(IFormFile file, int productoId)
        {
            try
            {
                var result=  await _imagenService.AgregarImagen(file, productoId);
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


    }
    
}
