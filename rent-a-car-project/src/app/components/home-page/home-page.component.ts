import { Component, OnInit } from '@angular/core';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { Rental } from 'src/app/models/rental-model/rental';
import { RentalServiceService } from 'src/app/services/rental-service/rental-service.service';


import { Router } from '@angular/router';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
 
  // vehicleId: number=0;
  
  // rentalStartDate: Date=new Date;
  // rentalLastDate: Date=new Date;
  
  // constructor(private rentalService: RentalServiceService, private router:Router) { }

  // ngOnInit(): void {
  // }
  // getToken(): string | null {
  //   return localStorage.getItem('jwt_token');
  // }
  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('jwt_token');
  // }
  // getUserId(): number | null {
  //   const token = this.getToken();
  //   if (token) {
  //     const tokenParts = token.split('.');
  //     if (tokenParts.length !== 3) {
  //       return null;
  //     }
  //     const payload = JSON.parse(atob(tokenParts[1]));
  //     return payload.id;
  //   }
  //   return null;
  // }
  // rentVehicle(): void {
  //   if (!this.isLoggedIn()) {
  //     alert('Please log in to rent a vehicle.');
  //     this.router.navigate(['/login']);
  //     return;
  //   }

  //   const userId = this.getUserId();
  //   if (userId === null) {
  //     alert('User ID not found. Please log in again.');
  //     this.router.navigate(['/login']);
  //     return;
  //   }

  //   const rental: Rental = {
  //     rentalId: 0, // Rental ID will be set by the backend
  //     vehicleId: this.vehicleId,
  //     userId: userId,
  //     rentalStartDate: this.rentalStartDate,
  //     rentalLastDate: this.rentalLastDate,
  //     isApproved: false
  //   };

  //   this.rentalService.addRental(rental).subscribe(
  //     response => {
  //       alert('Vehicle rented successfully!');
  //     },
  //     error => {
  //       console.error('Error renting vehicle', error);
  //       alert('Failed to rent vehicle. Please try again.');
  //     }
  //   );
  // }
}
