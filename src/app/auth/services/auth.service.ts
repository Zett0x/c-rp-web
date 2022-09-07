import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegisterForm } from 'src/app/interfaces/user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL=`http://localhost:4000/api/users`;

  constructor(private http:HttpClient) { }

  addUser(user:UserRegisterForm):Observable<UserRegisterForm>{

    return this.http.post<UserRegisterForm>(this.API_URL,user);

  }
}
