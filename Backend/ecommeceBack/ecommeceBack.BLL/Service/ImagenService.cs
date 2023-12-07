using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Repository;
using ecommeceBack.Models.VModels.ImagenDTO;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace ecommeceBack.BLL.Service
{
    public class ImagenService : IImagenService
    {
        private readonly ImagenRepository _imagenRepo;
        private readonly IMapper _mapper;
        private readonly Cloudinary _cloudinary;
        public ImagenService(ImagenRepository imagenRepo, IMapper mapper, IOptions<CloudinarySetting> config) {
         _imagenRepo = imagenRepo;
            _mapper = mapper;
            var acc = new Account
            (
                config.Value.CloudName,
                config.Value.ApiKey,
                config.Value.ApiSecret
            );
            _cloudinary=new Cloudinary( acc );
        }

        public async Task<ImagenDTO> AgregarImagen(IFormFile file)
        {
            try
            {
            var uploadResult = new ImageUploadResult();
                using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    //Transformation= new Transformation().Height(500).Width(500).Crop("fill")
                };
                uploadResult = await _cloudinary.UploadAsync(uploadParams);

                var imagenRepo = new CreacionImagenDTO
                {
                    Nombre = file.FileName,
                    Url = uploadResult.SecureUrl.AbsoluteUri
                };
                var result = await _imagenRepo.Insertar(imagenRepo);
                return result;
            }
            catch (Exception) { throw; }
        }

        public async Task<IEnumerable<ImagenDTO>> GetAll()
        {
            var imagenes = await _imagenRepo.GetAll();
            return _mapper.Map<IEnumerable<ImagenDTO>>(imagenes);
        }
    }
}
