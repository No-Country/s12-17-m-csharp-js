using ecommeceBack.Models.VModels.MercadoPago;
using ecommeceBack.Models.VModels.PedidoDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IPedidoService
    {
        Task<PedidoDTO> Registrar(string idUsuario,string email, RequestMercadoPago requestMercadoPago);

        Task<PedidoDTO> Actualizar(int id, CreacionPedidoDTO modelo);

        Task<bool> Eliminar(int id);

        Task<PedidoDTO> ObtenerPorId(int id);

        Task<IEnumerable<PedidoDTO>> ObtenerTodos();

        Task<IEnumerable<PedidoDTO>> misPedidos(string userId);
    }
}
