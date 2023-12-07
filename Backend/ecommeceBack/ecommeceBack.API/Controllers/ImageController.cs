using CloudinaryDotNet.Actions;
using CloudinaryDotNet;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;
using ecommeceBack.Models.VModels.ImagenDTO;
using ecommeceBack.Models.Entidades;
using ecommeceBack.BLL.Service;

namespace ecommeceBack.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
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

        [HttpPost("Subir")]
        public async Task<ActionResult<ImagenDTO>> Create(IFormFile file)
        {
            try
            {
                var result=  await _imagenService.AgregarImagen(file);
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


    }
    
}
