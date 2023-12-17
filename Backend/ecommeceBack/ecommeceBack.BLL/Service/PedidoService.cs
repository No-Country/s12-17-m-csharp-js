using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.MercadoPago;
using ecommeceBack.Models.VModels.PedidoDTO;
using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class PedidoService : IPedidoService
    {
        private readonly IGenericRepository<CreacionPedidoDTO, PedidoDTO, Pedido> _pedidoRepo;
        private readonly IProductosService _productosService;
        private readonly IMapper mapper;
        private readonly IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO> _renglonService;
        private readonly IEmailService _emailService;
        private readonly AplicationDBcontext _context;
        private readonly IStockService _stockService;
        private readonly IMercadoPagoService _mercadoPagoService;

        public PedidoService(IGenericRepository<CreacionPedidoDTO, PedidoDTO, Pedido> pedidoRepo, IProductosService productosService,
            IMapper mapper, IGenericService<CreacionRenglones_PedidosDTO, Renglones_PedidosDTO> renglonService, IMercadoPagoService mercadoPagoService,
            IEmailService emailService, AplicationDBcontext aplicationDBcontext, IStockService stockService)
        {
            _pedidoRepo = pedidoRepo;
            _productosService = productosService;
            this.mapper = mapper;
            _renglonService = renglonService;
            _emailService = emailService;
            _context = aplicationDBcontext;
            _stockService = stockService;
            _mercadoPagoService = mercadoPagoService;
        }

        public async Task<PedidoDTO> Actualizar(int id, CreacionPedidoDTO modelo)
        {
            return await _pedidoRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _pedidoRepo.Eliminar(id);
        }

        public async Task<PedidoDTO> ObtenerPorId(int id)
        {
            return await _pedidoRepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<PedidoDTO>> ObtenerTodos()
        {
            var query = await _pedidoRepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<PedidoDTO>>(lista);
        }

        public async Task<PedidoDTO> Registrar(string idUsuario,string email, RequestMercadoPago requestMercadoPago)
        {
            var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                    var pedido = new CreacionPedidoDTO()
                    {
                        usuarioId = idUsuario,

                        fecha_inicio = DateTime.Now,

                        EstadoPedido = "Sin Procesar",

                        Total = 0,
                    };

                    var pedidoCreado = await _pedidoRepo.Insertar(pedido);

                    int indice = 1;
                    decimal total = 0;
                    foreach (var renglon in requestMercadoPago.Renglones)
                    {
                        renglon.renglon = indice;

                        var producto = await _productosService.ObtenerPorId(renglon.ProductoId);

                        if (producto == null) throw new BadRequestException($"El producto con id: {renglon.ProductoId} no existe");

                        if(producto.Stock_Actual < renglon.cantidad) throw new BadRequestException($"El producto con id: {renglon.ProductoId} no tiene stock suficiente");

                        
                        renglon.PedidoId = pedidoCreado.Id;
                        renglon.totalrenglon = producto.precio * renglon.cantidad;
                        total += renglon.totalrenglon;
                        await _renglonService.Registrar(renglon);

                        producto.Stock_Actual -= renglon.cantidad;

                        await _productosService.RestarStock(producto.Id, renglon.cantidad);
                        await _stockService.InOut(producto.Id, renglon.cantidad, "Venta Producto", false);

                        indice++;


                    }

                    //var idTransaccion = await _mercadoPagoService.GenerarPagoAsync(requestMercadoPago);

                    await transaction.CommitAsync();

                    CreacionPedidoDTO creacionpedido = new CreacionPedidoDTO()
                    {
                        Total = total,

                        EstadoPedido = "Pagado",

                        fecha_inicio = pedidoCreado.fecha_inicio,

                        usuarioId = pedidoCreado.usuarioId,

                       // IdTransaccionPago = idTransaccion

                    };

                    var pedidofinal = await Actualizar(pedidoCreado.Id, creacionpedido);

                    

                    await _emailService.EnviarEmailAsync(email, "TU COMPRA HA SIDO EXITOSA", $"Te adjuntamos la factura de tu compra N° {pedidofinal.Id}");
                    
                    

                    return pedidofinal;

            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                throw;
            }

        }

      
    }
}
