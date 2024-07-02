import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login-service';
@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
 isAdminn=false;
  constructor(private loginService:LoginService) {
    this.isAdminn=this.loginService.isAdmin();
   }

  ngOnInit(): void {
  }

}
