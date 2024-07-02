using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using RenACarProjectApi.Context;
using RenACarProjectApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

//User tablosunun CRUD işlemleri...


namespace RenACarProjectApi.Controllers;
 //Bu Attribute ile hangi url yoluyla erişilebileceğini belirtiriz.
[Route("api/[controller]")]
[ApiController]
public class UserController:ControllerBase
{
	

	private readonly RentACarContextDB _context;   

	public UserController(RentACarContextDB context)
	{
		_context = context;
	}
    
        
    
        

    //HttpGet attribute ile user tablosunda ki verileri döneriz.
    [HttpGet]

	public async Task<ActionResult<IEnumerable<User>>> GetUsers()
	{
		return await _context.Users.ToListAsync();
	}

	//Id benzersiz numarasına göre kullanıcıları getirme işlemi
	[HttpGet("{Id}")]

	public async Task<ActionResult<User>> GetUser(int Id)
	{
		var user = await _context.Users.FindAsync(Id);
		if (user == null)
		{
			return NotFound();
		}
		return user;
	}
	//httpPost isteği ile yeni bir kullanıcı ekleme yapılır.
	[HttpPost]

	public async Task<ActionResult<User>>PostUser(User user)
	{
		_context.Users.Add(user); //EF ile Db'ye ekleme yapılır.
		await _context.SaveChangesAsync(); //SaveChangesAsync methodu ile veri gerçekten Db'ye eklenmiş olur.

		return CreatedAtAction(nameof(GetUser), new { id = user.UserId }, user);
	}
	//HttpPut ile id 'ye göre güncelleme işlemi yapıyoruz..
	[HttpPut("{id}")]

	public async Task<ActionResult>PutUser(int id, User user)
	{
		//girilen id yoksa 400 hatabmesajı döndürülür..
		if (id!=user.UserId)
		{
			return BadRequest();
		}

		//user nesnesinin güncellenmiş olduğunu veritabanında işaretler ..
		_context.Entry(user).State = EntityState.Modified;

		//veritabnına kaydetme işlemi...

		try
		{
			await _context.SaveChangesAsync();
		}
		//aynı andabaşka bir veri güncellemek istediğimizde bu kod bloğu çalışır ve hata oluşur...
		catch (DbUpdateConcurrencyException)
		{
			if (!UserExists(id))
			{
				return NotFound();
			}
			else
				throw; //kullanıcı yoksa 404 not found döner.
		}
		return NoContent(); //204 başarılı kodunu gönderir.
	}
	//Veritabanında belirli bir kullanıcının (Id) var olup olmadığını kontrol eder..
    private bool UserExists(int Id)
    {
        return _context.Users.Any(e => e.UserId == Id);
    }

	//HttpDelete isteği ile id'bilgisine göre veri silme işlemi başlatırlır..
	[HttpDelete("{id}")]

	public async Task<ActionResult> DeleteUser(int id)
	{
		//girilen id değerine göre arama yapar
		var user = await _context.Users.FindAsync(id);

		//arama işleminin sonucunda girilen id değeri yok ise not found hata kodu döner.
		if (user==null)
		return NotFound();

		//var ise silme işlemi gerçekleştirip veritabanına kaydeder.
		_context.Users.Remove(user);
		await _context.SaveChangesAsync();

		return NoContent();
		

	}

}

