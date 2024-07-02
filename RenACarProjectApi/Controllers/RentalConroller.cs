using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RenACarProjectApi.Context;
using RenACarProjectApi.Models;

namespace RenACarProjectApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RentalConroller : ControllerBase
{
    private readonly RentACarContextDB _context;

    public RentalConroller(RentACarContextDB context)
    {
        _context = context;
    }
    [HttpGet]

    public async Task<ActionResult<IEnumerable<Rental>>> GetRentals()
    {
        return await _context.Rentals.ToListAsync();
    }

    [HttpGet("{id}")]

    public async Task<ActionResult<Rental>> GetRental(int id)
    {
        var rental = await _context.Rentals.FindAsync(id);

        if (rental == null)
        {
            return NotFound();

        }

        return rental;
    }
    [HttpPost]

    public async Task<ActionResult<Rental>> PostRental(Rental rental)
    {
        _context.Rentals.Add(rental);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetRental), new { rental.RentalId }, rental);


    }
    [HttpPut("{id}")]

    public async Task<IActionResult> PutRental(int id, Rental rental)
    {
        if (id != rental.RentalId)
        {
            return BadRequest();
        }

        _context.Entry(rental).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!RentalExists(id))
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

    public async Task<ActionResult> DeleteVehicle(int id)
    {
        var rental = await _context.Rentals.FindAsync(id);

        if (rental == null)
        {
            return NotFound();

        }
        _context.Rentals.Remove(rental);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool RentalExists(int id)
    {
        return _context.Rentals.Any(e => e.RentalId == id);
    }
}

