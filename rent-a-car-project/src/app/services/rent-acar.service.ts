import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle-model/vehicle'; 

@Injectable({
  providedIn: 'root'
})
export class RentACarService {
  //private apiUrl = 'http://localhost:5001/api/VehicleConroller';
  constructor(private http: HttpClient) { }
  
  private apiUrl='http://localhost:5001/api/VehicleConroller';
  getVehicles():Observable<Vehicle[]>{
    //return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles`);
    //return this.http.get<Vehicle[]>(this.apiUrl);
    return this.http.get<Vehicle[]>(`${this.apiUrl}`);
  }

}
