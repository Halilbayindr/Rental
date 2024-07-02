import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.loginService.isAdmin();
  }
  isUSer():boolean{
    return localStorage.getItem('role')==='User'
  }
  
  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
  onSearch(searchTerm: string): void {
    console.log('Search Term:', searchTerm);
    // Arama işlemleri burada gerçekleştirilebilir, örneğin başka bir sayfaya yönlendirme yapılabilir.
    this.router.navigate(['/search'], { queryParams: { query: searchTerm } });
}}
