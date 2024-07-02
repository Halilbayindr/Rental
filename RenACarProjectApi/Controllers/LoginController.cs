using System;
using Microsoft.AspNetCore.Mvc;
using RenACarProjectApi.Context;
using RenACarProjectApi.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace RenACarProjectApi.Controllers;
//[Route("api/[controller]")]
//[ApiController]
//public class LoginController : ControllerBase

//{

//    private readonly RentACarContextDB _context;

//    public LoginController(RentACarContextDB context)
//    {
//        _context = context;
//    }
//    [HttpPost]
//    // Kullanıcıyı doğrulama
//    private User Authenticate(string username, string password)
//    {
//        // Gerçek uygulamalarda şifre hash'i karşılaştırılır
//        var user = _context.Users.SingleOrDefault(u => u.Username == username && u.PasswordH == password);

//        if (user == null)
//            return null;

//        return user;
//    }
//    // JWT token oluşturma
//    private string GenerateJwtToken(User user)
//    {
//        var claims = new List<Claim>
//        {
//            new Claim("id", user.UserId.ToString()),
//            new Claim("username", user.Username),
//            new Claim("mail", user.Email),

//            new Claim(ClaimTypes.Role, "User"),
//        };

//        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("komplex_salt_key$3info5€CuR1TY"));
//        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

//        var token = new JwtSecurityToken(
//            issuer: "http://abc.com",
//            audience: "http://abc.com",
//            claims: claims,
//            expires: DateTime.Now.AddDays(7),
//            signingCredentials: creds);

//        return new JwtSecurityTokenHandler().WriteToken(token);
//    }
//    // Login işlemi
//    [HttpPost("login")]
//    [AllowAnonymous]
//    public IActionResult Login([FromBody] User user)
//    {
//        var authenticatedUser = Authenticate(user.Username, user.PasswordH);

//        if (authenticatedUser == null)
//            return BadRequest("Kullanıcı adı veya şifre hatalı");

//        var token = GenerateJwtToken(authenticatedUser);

//        return Ok(new
//        {
//            token = token,
//            type = "Bearer"
//        });

//    }
[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase

{

    private RentACarContextDB _context;

    public LoginController(RentACarContextDB context)
    {
        _context = context;
    }
    [HttpPost]
    // Kullanıcıyı doğrulama
    private User Authenticate(string username, string password)
    {
        // Gerçek uygulamalarda şifre hash'i karşılaştırılır
        var user = _context.Users.SingleOrDefault(u => u.Username == username && u.Password == password);

        if (user == null)
            return null;

        return user;
    }
    // JWT token oluşturma
    private string GenerateJwtToken(User user)
    {
        var claims = new List<Claim>
        {
            new Claim("id", user.UserId.ToString()),
            new Claim("username", user.Username),
            new Claim("mail", user.Email),

           // new Claim(ClaimTypes.Role, "User"),
           new Claim("role", user.IsAdmin ? "Admin" : "User"),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("komplex_salt_key$3info5€CuR1TY"));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: "http://abc.com",
            audience: "http://abc.com",
            claims: claims,
            expires: DateTime.Now.AddDays(7),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
    // Login işlemi
    [HttpPost("login")]
    [AllowAnonymous]
    public IActionResult Login([FromBody] User user)
    {
        var authenticatedUser = Authenticate(user.Username, user.Password);

        if (authenticatedUser == null)
            return BadRequest("Kullanıcı adı veya şifre hatalı");

        var token = GenerateJwtToken(authenticatedUser);

        return Ok(new
        {
            token = token,
            type = "Bearer"
        });

    }
}


