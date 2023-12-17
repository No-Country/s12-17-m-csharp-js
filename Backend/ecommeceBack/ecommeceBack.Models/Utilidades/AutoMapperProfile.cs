using AutoMapper;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using ecommeceBack.Models.VModels.CategoriaDTO;
using ecommeceBack.Models.VModels.DatosDTO;
using ecommeceBack.Models.VModels.ImagenDTO;
using ecommeceBack.Models.VModels.MarcasDTO;
using ecommeceBack.Models.VModels.PedidoDTO;
using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using ecommeceBack.Models.VModels.StockDTO;

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
            
            CreateMap<ImagenDTO, Imagen>().ReverseMap();

            CreateMap<CreacionPedidoDTO, Pedido>().ReverseMap();

            CreateMap<PedidoDTO, Pedido>().ReverseMap();

            CreateMap<CreacionRenglones_PedidosDTO, Renglones_Pedidos>().ReverseMap();

            CreateMap<Renglones_PedidosDTO, Renglones_Pedidos>().ReverseMap();
            
            CreateMap<HistorialStockDTO, HistorialStock>().ReverseMap();
        }
    }
}
