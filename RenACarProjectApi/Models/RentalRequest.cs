using System;
namespace RenACarProjectApi.Models;

public class RentalRequest
{
    
    public int RequestId { get; set; }
    public int VehicleId { get; set; }
    public int UserId { get; set; }
    public DateTime RequestDate { get; set; }
    public string Status { get; set; }


    public User User { get; set; }
    public Vehicle Vehicle { get; set; }
}

