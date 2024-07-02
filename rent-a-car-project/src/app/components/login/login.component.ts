import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login-service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    username:string='';
    password:string='';
  constructor(private loginService: LoginService, private router:Router) { }

  // onSubmit(): void {
  //   this.loginService.login(this.username,this.passwordH).subscribe(
  //     response=>{
  //       localStorage.setItem('token', response.token);
  //       this.router.navigate(['/vehicles']);
  //     },
  //     error=>{
  //       console.error('Login Failed',error);
  //     }
      
      
      
  //   );
  // }
  // login(frm: NgForm) {

  //    this.loginService.login(frm.value.username, frm.value.password).subscribe(data => {
  //      localStorage.setItem("jwt_token", data.token);
  //      this.router.navigateByUrl('/vehicles');
  //   });
  //   }
  login(frm: NgForm): void {
    this.loginService.login(frm.value.username, frm.value.password).subscribe(
      data => {
        if (data && data.token) {
          const decodedToken = this.decodeToken(data.token);
          localStorage.setItem('role', decodedToken['role']); // Kullanıcı rolünü saklama

          if (decodedToken['role'] === 'Admin') {
            this.router.navigate(['/admin-dashboard']);
          } else {
            this.router.navigate(['/vehicles']);
          }
        } else {
          // Login failed, handle appropriately
          console.error('Login failed: Invalid token');
        }
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  }  