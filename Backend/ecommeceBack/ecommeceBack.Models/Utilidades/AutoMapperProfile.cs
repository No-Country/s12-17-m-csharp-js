using AutoMapper;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using ecommeceBack.Models.VModels.CategoriaDTO;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.MarcasDTO;
using ecommeceBack.Models.VModels.ProductoDTO;

namespace ecommeceBack.Models.Utilidades
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CategoriaDTO, Categoria>().ReverseMap();
            CreateMap<CreacionCategoriaDTO, Categoria>().ReverseMap();
            CreateMap<MarcaDTO,Marca>().ReverseMap();
            CreateMap<CreacionMarcaDTO, Marca>().ReverseMap();
            CreateMap<DatosDTO, Datos>().ReverseMap();
            CreateMap<CreacionDatosDTO, Datos>().ReverseMap();
            CreateMap<ProductoDTO, Producto>().ReverseMap();
            CreateMap<CreacionProductoDTO, Producto>().ReverseMap();


        }
    }
}
