import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data=[];

  constructor( private _service:EmployeeService) { }

  ngOnInit(): void {

    this.data=this._service.getEmployees();

  }

view(a)
{
  window.alert(this.data[--a].name);
}


}
