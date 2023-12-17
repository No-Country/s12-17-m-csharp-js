using ecommeceBack.BLL.contrato;
using ecommeceBack.Models.Entidades;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ecommeceBack.BLL.Service
{
    public class TokenService : ITokenService
    {
        private readonly UserManager<Usuario> userManager;
        private readonly IConfiguration configuration;

        public TokenService(UserManager<Usuario> userManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.configuration = configuration;
        }

        public async Task<string> GenerarToken(string email, int diasExpiracion)
        {
           
                var usuario = await userManager.FindByEmailAsync(email);

                var roles = await userManager.GetRolesAsync(usuario);

                var claims = new List<Claim>() { new Claim("mail", email), new Claim("id", usuario.Id) };

                foreach (var role in roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }


                var llave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["llaveJwt"]!));

                var creds = new SigningCredentials(llave, SecurityAlgorithms.HmacSha256);

                var expiracion = DateTime.UtcNow.AddDays(diasExpiracion);

                var token = new JwtSecurityToken(issuer: null, audience: null, claims: claims, expires: expiracion, signingCredentials: creds);

                var respuestaToken = new JwtSecurityTokenHandler().WriteToken(token);



            return respuestaToken;
        }
    }
}
