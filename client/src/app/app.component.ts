import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating app';
  //disabling type safety for using any data type
  users: any;

  //injecting http constructor to handle requests
  constructor (private http: HttpClient){}
  
  ngOnInit()  {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users=response;

    }, error=>{
      console.log(error);
    })
  }
}
