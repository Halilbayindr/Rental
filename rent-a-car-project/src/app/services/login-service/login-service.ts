import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { User } from 'src/app/models/user-model/user';
import { TokenModel } from 'src/app/models/tokenmodel/tokenmodel';
import { map } from 'rxjs';
import * as jwt_decode from 'jwt-decode'; // Import decode function from jwt-decode




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl='http://localhost:5001/api/Login/login';

  constructor(private http: HttpClient) { }
 
//   login(username: string, password:string):Observable<TokenModel>{
//     // return this.http.post<any>(this.apiUrl, {username, passwordH});
//     const body={
//       username:username,
//       password:password
//     };
//      return this.http.post<TokenModel>('http://localhost:5001/api/Login/login',body)
    
// }
login(username: string, password: string): Observable<TokenModel | null> {
  const body = { username, password };
  return this.http.post<TokenModel>(this.apiUrl, body).pipe(
    map(response => {
      if (response && response.token) {
        localStorage.setItem('jwt_token', response.token);
        //const decodedToken :any = jwt_decode(response.token) as any; // Ensure correct type for decoded token
        //localStorage.setItem('role', decodedToken['role']); // Kullanıcı rolünü saklama
        return response;
      }
      return null;
    }),
    catchError(error => {
      console.error('Login failed', error);
      return of(null);
    })
  );
}

logout(): void {
  localStorage.removeItem('jwt_token');
  localStorage.removeItem('role');
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('jwt_token');
}

isAdmin(): boolean {
  return localStorage.getItem('role') === 'Admin';
}
isUSer():boolean{
  return localStorage.getItem('role')==='User'
}
}
