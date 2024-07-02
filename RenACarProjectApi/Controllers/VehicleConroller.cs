using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RenACarProjectApi.Context;
using RenACarProjectApi.Models;
namespace RenACarProjectApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VehicleConroller:ControllerBase
{

	private readonly RentACarContextDB _context;

	public VehicleConroller(RentACarContextDB context)
	{
		_context = context;
	}
	[HttpGet]

	public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehicles()
	{
		return await _context.Vehicles.ToListAsync();
	}

	[HttpGet("{id}")]

	public async Task<ActionResult<Vehicle>>GetVehicle(int id)
	{
		var vehicle = await _context.Vehicles.FindAsync(id);

		if (vehicle==null)
		{
			return NotFound();

		}

		return vehicle;
	}

    [HttpGet("marka")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Vehicle))]
    public IActionResult Get([FromQuery] string marka)
    {
        var arac = _context.Vehicles.SingleOrDefault(p => p.Brand == marka);
        if (arac == null)
            return NotFound();
        return Ok(arac);
    }

    [HttpPost]

	public async Task<ActionResult<Vehicle>>PostVehicle(Vehicle vehicle)
	{
		_context.Vehicles.Add(vehicle);
		await _context.SaveChangesAsync();
		return CreatedAtAction(nameof(GetVehicle), new { vehicle.VehicleId }, vehicle);


	}
    
    [HttpPut("{id}")]

	public async Task<IActionResult>PutVehicle(int id, Vehicle vehicle)
	{
		if (id!=vehicle.VehicleId)
		{
			return BadRequest();
		}

		_context.Entry(vehicle).State = EntityState.Modified;

		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException)
		{
			if (!VehicleExists(id))
			{
				return NotFound();
			}
			else
			{
				throw;
			}
		}
		return NoContent();
	}

	[HttpDelete("{id}")]

	public async Task<ActionResult>DeleteVehicle(int id)
	{
		var vehicle = await _context.Vehicles.FindAsync(id);

		if (vehicle==null)
		{
			return NotFound();

		}
		_context.Vehicles.Remove(vehicle);
		await _context.SaveChangesAsync();
		return NoContent();
	}

    private bool VehicleExists(int id)
    {
        return _context.Vehicles.Any(e => e.VehicleId == id);
    }
}

