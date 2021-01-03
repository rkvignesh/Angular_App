import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularApp';
  users: any;

  constructor(private http: HttpClient){}

  
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get('https://localhost:5000/api/Users/GetUsers').subscribe( response => {
      this.users = response;
    }, error=>{
      console.log(error);
    })
  }
}
