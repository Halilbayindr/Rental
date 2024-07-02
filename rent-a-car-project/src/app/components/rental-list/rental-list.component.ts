import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental-model/rental';
import { RentalServiceService } from 'src/app/services/rental-service/rental-service.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
 
  p: Rental[]=[];
  constructor(private rentalService:RentalServiceService) { }

  ngOnInit(): void {
    this.loadReservations();
    
  }
  loadReservations(){
  this.rentalService.getAllReservations().subscribe((data: Rental[])=>{
    this.p=data; });
  

} approveReservation(rentalId: number) {
  this.rentalService.approveReservation(rentalId).subscribe(() => {
    console.log('Rezervasyon onaylandı.');
    // İşlem başarılıysa gerekirse listeyi yeniden yükle
    
  }, error => {
    console.error('Rezervasyon onaylama hatası:', error);
  });
}}
