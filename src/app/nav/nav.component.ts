import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  loggedIn: boolean = false;

  constructor(private accountServie: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountServie.login(this.model).subscribe(respose =>{
      console.log(respose);
      this.loggedIn = true;
    },
    error => {
      console.log(error);
    })
  }

  

  logout(){
    this.loggedIn = false;
  }

}
