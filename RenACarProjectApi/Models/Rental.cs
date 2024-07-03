using System;
namespace RenACarProjectApi.Models;

public class Rental
{
	public int  RentalId { get; set; }
	public int VehicleId { get; set; }
	public int UserId { get; set; }
	public DateTime rentalStartDate { get; set; }
	public DateTime rentalEndDate { get; set; }
	public bool isApproved { get; set; } = false;
    public decimal TotalCost { get; set; } // Toplam maliyet


    public User User { get; set; }
	public Vehicle Vehicle { get; set; }

}

