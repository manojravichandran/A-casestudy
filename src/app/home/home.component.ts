import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees.service';
import {Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data=[];

  constructor( private _service:EmployeeService,private route:Router) { }

  ngOnInit(): void {

    this.data=this._service.getEmployees();

  }
  view(data){
    //this.route.navigate(['/edetails'], { state: { example: 'data' } });
//window.alert(data)

  const navigationExtras: NavigationExtras = {state: {example: data}};
    this.route.navigate(['/edetails'], navigationExtras);
}


  }



