using ecommeceBack.Models.VModels.Renglones_PedidosDTO;
using System.ComponentModel.DataAnnotations;

namespace ecommeceBack.Models.VModels.MercadoPago
{
       public class RequestMercadoPago
       {
            public string Token { get; set; }

            public decimal transaction_amount { get; set; }

            public int Installments { get; set; }

            public string Payment_method_id { get; set; }

            public Payer Payer { get; set; }
            
            [Required]
            public List<CreacionRenglones_PedidosDTO> Renglones {  get; set; }
       }
    
}
