export interface Rental {
    rentalId: number;
    vehicleId: number;
    userId: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
    isApproved: boolean;
  }