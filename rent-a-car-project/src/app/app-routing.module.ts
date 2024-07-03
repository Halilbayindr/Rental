import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { ReservetionComponent } from './components/reservetion/reservetion.component';

const routes: Routes = [
  
    {path: 'home', component: HomePageComponent },
    {path: 'vehicles', component: VehicleListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'rentallist', component:RentalListComponent},
    {path: 'rezervation', component:ReservetionComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'register', component:RegisterComponent},
    { path: '**', redirectTo: '/login' }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
