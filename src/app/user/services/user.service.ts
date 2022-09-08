import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegisterForm } from 'src/app/interfaces/user.interface';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL=`http://localhost:4000/api/users`;

  constructor(private http:HttpClient) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.API_URL);
  }

  getUser(username:string):Observable<User[]>{
    return this.http.get<User[]>(this.API_URL+'/'+username);

  }
 /*  checkUsernameAvailable(username:string):any{ // TODO: return boolean
    const users:User[]=[];
    this.http.get<User[]>(this.API_URL)
    .subscribe(res=>console.log(res))

  } */

  addUser(user:UserRegisterForm):Observable<UserRegisterForm>{

    return this.http.post<UserRegisterForm>(this.API_URL,user);

  }
}
