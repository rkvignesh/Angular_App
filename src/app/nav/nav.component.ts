import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountServie: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountServie.login(this.model).subscribe(respose =>{
      console.log(respose);
    },
    error => {
      console.log(error);
    })
  }  

  logout(){
    this.accountServie.logout();
  }

  getCurrentUser(){
    this.accountServie.currentUser$.subscribe(user=>{
    }, error=>{
      console.log(error);
    });
  }

}
