using CloudinaryDotNet.Actions;
using ecommeceBack.Models.VModels.ImagenDTO;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IImagenService
    {
        Task<ImagenDTO> AgregarImagen(IFormFile file, int productoId);

    }
}
