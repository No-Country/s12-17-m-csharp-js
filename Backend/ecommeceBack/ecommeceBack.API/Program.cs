using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.DAL.Repository;
using ecommeceBack.Models.Entidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AplicationDBcontext>(option =>

    option.UseSqlServer(builder.Configuration.GetConnectionString("SQLServerConnection"), p => p.MigrationsAssembly("ecommeceBack.API"))
    
);

builder.Services.AddIdentity<Usuario, IdentityRole>(option => { option.Password.RequireNonAlphanumeric = false; option.User.RequireUniqueEmail = true; }).AddEntityFrameworkStores<AplicationDBcontext>().AddDefaultTokenProviders();

//Configuración para validar el token
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opciones =>
{
    opciones.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["llaveJwt"])),
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {

        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header

    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {

            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                Type  = ReferenceType.SecurityScheme,
                Id = "Bearer"

                }
            },

            new string[]{}

        }

    });


});



//Inyeccion de Dependencia

builder.Services.AddScoped<IGenericRepository<Usuario>, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<ITokenService, TokenService>();

builder.Services.AddScoped<IGenericRepository<Marca>, MarcasRepository>();
builder.Services.AddScoped<IMarcaService, MarcaService>();


builder.Services.AddScoped<IDataSeeder, DataSeeder>();

var app = builder.Build();






using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var dataSeeder = services.GetRequiredService<IDataSeeder>();
        await dataSeeder.CrearRoles();
        await dataSeeder.CrearUsuarioAdmin(); 
    }
    catch (Exception)
    {


    }
}

//using (var scope = app.Services.CreateScope()) 
//{
//    var Context = scope.ServiceProvider.GetRequiredService<AplicationDBcontext>();
//    Context.Database.Migrate();
//}


// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
