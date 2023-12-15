using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels.MercadoPago
{
       public class RequestMercadoPago
        {
            public string Token { get; set; }

            public decimal transaction_amount { get; set; }

            public int Installments { get; set; }

            public string Payment_method_id { get; set; }

            public Payer Payer { get; set; }
        }
    
}
