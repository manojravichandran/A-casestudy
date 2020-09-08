import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from '../employees.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  examples:string;
  public editdata=[];  

  constructor(private router: Router,private _service:EmployeeService) { 

        
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {example: string};
    this.examples = state.example;


  }

  ngOnInit(): void {

    this.editdata=this._service.getEmployees();

  }

}
