using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.DatosDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IDatosService
    {

        Task<IEnumerable<DatosDTO>> Obtenerxfiltros(string? datos);

        
    }
}
