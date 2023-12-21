using ecommeceBack.API.Exceptions;
using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.VModels.MercadoPago;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class MercadoPagoService: IMercadoPagoService
    {
        public async Task<long> GenerarPagoAsync(RequestMercadoPago request)
        {
            try
            {
                var paymentRequest = new PaymentCreateRequest
                {
                    TransactionAmount = request.transaction_amount,
                    Token = request.Token,
                    Installments = request.Installments,
                    PaymentMethodId = request.Payment_method_id,
                    Payer = new PaymentPayerRequest
                    {
                        Email = request.Payer.Email,
                        //Identification = new IdentificationRequest
                        //{
                        //    Type = Request["payer"]["identification"]["type"],
                        //    Number = Request["payer"]["identification"]["number"],
                        //},
                    },
                };

                var client = new PaymentClient();
                Payment payment = await client.CreateAsync(paymentRequest);

                if (payment.Status != "approved")
                {
                    throw new BadRequestException("Error al procesar el pago");
                }

                return (long)payment.Id;

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
