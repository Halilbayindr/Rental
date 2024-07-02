export class Vehicle {
    vehicleId: number;
    brand: string;
    model: string;
    type: string;
    imageUrl?: string;
    transmissionType: string;
    fuelType: string;
    dailyRentalPrice: number;
    seatCount: number;
    doorCount: number;
    hasAirConditioning: boolean;
  
    constructor(
      vehicleId: number,
      brand: string,
      model: string,
      type: string,
      transmissionType: string,
      fuelType: string,
      dailyRentalPrice: number,
      seatCount: number,
      doorCount: number,
      hasAirConditioning: boolean,
      imageUrl?: string
    ) {
      this.vehicleId = vehicleId;
      this.brand = brand;
      this.model = model;
      this.type = type;
      this.transmissionType = transmissionType;
      this.fuelType = fuelType;
      this.dailyRentalPrice = dailyRentalPrice;
      this.seatCount = seatCount;
      this.doorCount = doorCount;
      this.hasAirConditioning = hasAirConditioning;
      this.imageUrl = imageUrl;
    }
  }
  