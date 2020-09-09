import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees.service';
import {Router, NavigationExtras } from '@angular/router';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data=[];

  constructor( private _service:EmployeeService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.data=this._service.getEmployees();

  }
  view(data){
    //this.route.navigate(['/edetails'], { state: { example: 'data' } });
//window.alert(data)

  const navigationExtras: NavigationExtras = {state: {example: data}};
    this.route.navigate(['/home/edetails'], navigationExtras);
}

edit(edata)

{
  const navigationExtras: NavigationExtras = {state: {example: edata}};
  this.route.navigate(['/home/elist'], navigationExtras);

}

delete(ids)
{
  var index=this.data.findIndex(obj=>obj.id==ids);
  this.data.splice(index,1);
  
  this.route.navigateByUrl('/home');
  window.alert("Item Deleted");
  //window.setTimeout('alert("Message goes here");window.close();', 200);
  
}
out(){
  this.route.navigateByUrl("");
}




  }



