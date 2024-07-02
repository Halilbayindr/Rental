

using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RenACarProjectApi.Context;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<RentACarContextDB>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "RentACarProjectApi", Version = "v1" });
});
builder.Services.AddCors();
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        var issuer = "http://abc.com";
        var key = "komplex_salt_key$3info5€CuR1TY";
        SymmetricSecurityKey issuerSigningKey =
        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidIssuer = issuer,
            IssuerSigningKey = issuerSigningKey,
            ValidateLifetime = true,
            ValidateIssuer = true,
            ValidateIssuerSigningKey = true,
            ValidateAudience = false,
            //RoleClaimType="role",
            NameClaimType = "username"
        };
    });

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "RentACarProjectApi v1"));
}

app.UseCors(opt =>
{

    opt.AllowAnyOrigin();
    opt.AllowAnyMethod();
    opt.AllowAnyHeader();
    
});


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

