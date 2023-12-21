using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.VModels.MercadoPago;
using MercadoPago.Error;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ecommeceBack.API.Controllers
{

    [EnableCors("ReglasCors")]
    [Route("api/mercadopago")]
    [ApiController]
    public class MercadoPagoController : ControllerBase
    {
        private readonly IMercadoPagoService _mercadoPagoService;
        public MercadoPagoController(IMercadoPagoService mercadoPagoService)
        {
            _mercadoPagoService = mercadoPagoService;
        }

        [HttpPost]
        public async Task<IActionResult> Pago(RequestMercadoPago request)
        {
            try
            {
                var pago = await _mercadoPagoService.GenerarPagoAsync(request);
                return Ok(pago);
            }
            catch (BadRequestException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (MercadoPagoApiException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }

        }
    }
}
