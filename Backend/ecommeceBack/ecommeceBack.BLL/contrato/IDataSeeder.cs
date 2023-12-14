using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.contrato
{
    public interface IDataSeeder
    {
        public Task CrearUsuarioAdmin();

        public Task CrearRoles();
        public Task CrearCategorias();
    }
}
