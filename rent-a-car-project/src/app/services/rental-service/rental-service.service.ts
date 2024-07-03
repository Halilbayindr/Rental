import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from 'src/app/models/rental-model/rental';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RentalServiceService {
  private apiUrl = 'http://localhost:5001/api/RentalConroller';
  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<Rental[]> {
    return this.http.get<Rental[]>(`${this.apiUrl}`);
  }
  addRental(reservation: any): Observable<any> {
    return this.http.post(this.apiUrl, reservation);
}
approveReservation(rentalId: number): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}${rentalId}`, null);
}
}