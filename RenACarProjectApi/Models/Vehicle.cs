using System;
namespace RenACarProjectApi.Models;

public class Vehicle
{
	public int VehicleId { get; set; }
	public string Brand { get; set; }
	public string Model { get; set; }
	public string Type { get; set; }
	public string? ImageUrl { get; set; }
	public string TransmissionType { get; set; }
	public string FuelType { get; set; }
	public decimal DailyRentalPrice { get; set; }
	public int SeatCount { get; set; }
	public int DoorCount { get; set; }
	public bool HasAirConditioning { get; set; }


}

