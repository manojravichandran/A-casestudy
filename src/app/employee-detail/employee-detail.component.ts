import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from '../employees.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  example:string;
  public edata=[];  
  
  constructor(private router: Router,private _service:EmployeeService) { 

  
    
      const navigation = this.router.getCurrentNavigation();
      const state = navigation.extras.state as {example: string};
      this.example = state.example;
    }
    

  ngOnInit(): void {
    //console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'
    this.edata=this._service.getEmployees();
    

  }

 

}
