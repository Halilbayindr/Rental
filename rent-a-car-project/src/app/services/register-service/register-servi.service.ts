import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user-model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiService {

  constructor(private http: HttpClient) { }
  private apiUrl='http://localhost:5001/api/User';

  register(username:string,password:string,email:string):Observable<any>{
    const body={username, password, email};
    return this.http.post<any>(this.apiUrl, body);
  }
}
