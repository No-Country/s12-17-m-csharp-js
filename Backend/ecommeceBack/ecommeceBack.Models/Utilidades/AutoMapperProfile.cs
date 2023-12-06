using AutoMapper;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using ecommeceBack.Models.VModels.CategoriaDTO;
using ecommeceBack.Models.VModels.DatosDTO;

namespace ecommeceBack.Models.Utilidades
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CategoriaDTO, Categoria>().ReverseMap();
            CreateMap<CreacionCategoriaDTO, Categoria>().ReverseMap();
            CreateMap<MarcaDTO,Marca>().ReverseMap();
            CreateMap<DatosDTO, Datos>().ReverseMap();
            CreateMap<CreacionDatosDTO, Datos>().ReverseMap();
        }
    }
}
