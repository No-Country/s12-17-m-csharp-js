using AutoMapper;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.ImagenDTO;
using ecommeceBack.Models.VModels.MarcasDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace ecommeceBack.DAL.Repository
{
    public class ImagenRepository
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper _mapper;

        public ImagenRepository(AplicationDBcontext dbcontext, IMapper mapper) 
        { 
            _dbcontext = dbcontext;
            _mapper = mapper;
        }
        public async Task<IEnumerable<Imagen>> GetAll()
        {
            return await _dbcontext.Imagenes.Where(i=>i.Activo==true).ToListAsync(); ;
        }

        public async Task<ImagenDTO> Insertar(CreacionImagenDTO datosImagen)
        {
            try
            {
                var image = new Imagen() 
                { 
                    Nombre = datosImagen.Nombre, 
                    Url= datosImagen.Url, 
                    Activo=true 
                };
                await _dbcontext.Imagenes.AddAsync(image);
                await _dbcontext.SaveChangesAsync();
                return _mapper.Map<ImagenDTO>(image);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
