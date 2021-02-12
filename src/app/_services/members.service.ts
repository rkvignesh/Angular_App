import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Member } from '../_models/Members';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'Users/GetUsers')
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'Users/GetUser?username=' + username)
  }

  updateMember(member: Member){
    return this.http.put(this.baseUrl + 'Users/UpdateUser', member);
  }
}
