import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountServie: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountServie.login(this.model).subscribe(respose =>{
      this.router.navigateByUrl('/members');
    })
  }  

  logout(){
    this.accountServie.logout();
    this.router.navigateByUrl('/');
  }

  getCurrentUser(){
    this.accountServie.currentUser$.subscribe(user=>{
    }, error=>{
      console.log(error);
    });
  }

}
