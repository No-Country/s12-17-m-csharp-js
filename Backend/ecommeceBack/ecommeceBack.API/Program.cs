using ecommeceBack.BLL.contrato;
using ecommeceBack.BLL.Service;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.DAL.Repository;
using ecommeceBack.Models.Entidades;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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
//Inyeccion de Dependencia

builder.Services.AddScoped<IGenericRepository<Usuario>, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();

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
if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
