import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-acar.service';
import { Vehicle } from 'src/app/models/vehicle-model/vehicle';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  providers:[RentACarService],
  
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[]=[];
  constructor(private rentAcarService: RentACarService) { }

  ngOnInit(): void {
    //alert("başladı");
   // this.getVehicles();

   this.rentAcarService.getVehicles().subscribe((data: Vehicle[])=>{
    this.vehicles=data;
  })
  // getVehicles(): void{
  //   this.rentAcarService.getVehicles().subscribe((data: Vehicle[])=>{
  //     this.vehicles=data;
  //   });
  // }

  
  }}
