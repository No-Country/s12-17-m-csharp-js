using ecommeceBack.DAL.Dbcontext;
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

var app = builder.Build();

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
