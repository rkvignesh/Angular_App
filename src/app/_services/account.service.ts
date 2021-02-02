import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "https://localhost:5000/api/";

  constructor(private http: HttpClient) { }

  login(model: any){

    return this.http.post(this.baseUrl + "Account/login", model).pipe(
      map((response: User) =>{
        const user = response;
        if(user){
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
    );
  }

  logout(){
    localStorage.removeItem("user");
  }
}
