using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.Models.VModels
{
    
    public class CreacionUsuarioDTO
    {
        [Required]
        [EmailAddress(ErrorMessage ="El correo registrado no es Valido")]
        public string Email {  get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Apellido { get;set; }

        [Required]
        public string Password { get; set; }

        public int? DatosId { get; set; }
    }
}
