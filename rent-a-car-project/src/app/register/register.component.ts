import { Component, OnInit } from '@angular/core';
import { RegisterServiService } from '../services/register-service/register-servi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {

  username: string='';
  password:string='';
  email:string='';
  constructor(private registerService:RegisterServiService, private router:Router) { }

  register():void{
    this.registerService.register(this.username, this.password, this.email).subscribe(data=>{
          this.router.navigateByUrl('/home');
      
    });

  }

}
