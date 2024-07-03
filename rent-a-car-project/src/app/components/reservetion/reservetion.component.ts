import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle-model/vehicle';
import { LoginService } from 'src/app/services/login-service/login-service';
import { RentACarService } from 'src/app/services/rent-acar.service';
import { RentalServiceService } from 'src/app/services/rental-service/rental-service.service';

@Component({
  selector: 'app-reservetion',
  templateUrl: './reservetion.component.html',
  styleUrls: ['./reservetion.component.css']
})
export class ReservetionComponent implements OnInit {
  vehicles: any[] = []; // Araçları saklayacak dizi
  selectedVehicle: any = null; // Seçilen aracı saklay
  totalCost: number = 0; // Toplam maliyeti saklayacak
  rezervation={
    vehicleId:0,
    userId:0,
    rentalStartDate: '',
    rentalEndDate: '',
    totalCost: 0 
  
   
  };
  constructor(private renacarService:RentACarService, private rentalService:RentalServiceService, private router:Router, private loginService:LoginService) { 
    
  }

  ngOnInit(): void {
    this.renacarService.getAllVehicles().subscribe(data=>{
      this.vehicles=data;
    });
  }
  onVehicleChange() {
    if (this.selectedVehicle) {
      this.calculateTotalCost();
    }
  }
  calculateTotalCost() {
    const startDate = new Date(this.rezervation.rentalStartDate);
    const endDate = new Date(this.rezervation.rentalEndDate);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.totalCost = diffDays * this.selectedVehicle.dailyRentalPrice;
    this.rezervation.totalCost = this.totalCost;
    this.rezervation.vehicleId = this.selectedVehicle.vehicleId;
  }
makeRezervation(){
  const userId = this.loginService.getUserId();
    if (userId) {
      this.rezervation.userId = userId;

      console.log(this.rezervation); // Verileri kontrol edin
  this.rentalService.addRental(this.rezervation).subscribe(response=>{
    alert('rezervasyon başarılı');
    this.router.navigate(['/']);
  },
  error => {
    alert('Rezervasyon başarısız. Lütfen tekrar deneyin.');
    console.error(error); // Hata durumunu kontrol edin
  }
);
}
}
}

