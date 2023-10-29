import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users!: Users[];
  readonly url ="http://localhost:3000/"
  constructor(private http: HttpClient) { 
  }
  addUpdateUser(Users:any):Observable<any>{
return this.http.post(this.url + "Users", Users);
  }

  getAllUsers():Observable<any>{
    return this.http.get(this.url + "Users");
      }

      deleteUser(id:any):Observable<any>{
        console.log(id);
        return this.http.delete(this.url+"Users/"+ id);
      }

      editUserById(id:any):Observable<any>{
        return this.http.get(this.url+"Users/"+ id);
      }
  
}
