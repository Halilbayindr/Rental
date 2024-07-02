using System;
using Microsoft.EntityFrameworkCore;
using RenACarProjectApi.Models;
namespace RenACarProjectApi.Context;

public class RentACarContextDB:DbContext
{
    public RentACarContextDB(DbContextOptions<RentACarContextDB> options) : base(options)
    {
    }

    public DbSet<User>Users  { get; set; }
    public DbSet<Vehicle>Vehicles  { get; set; }
    public DbSet<Rental> Rentals { get; set; }
    public DbSet<RentalRequest> RentalRequests { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RentalRequest>(entity =>
        {
            entity.HasKey(e => e.RequestId);  // Primary key specification
        });
    }

}

