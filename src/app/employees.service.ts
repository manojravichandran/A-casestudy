import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Manoj","lname":"Ravindran","age":20,"dob":"02/08/1998","Gender":"Male","salary":20000,"Phno":7610531489},
      {"id":2,"name":"Manju","lname":"maaran","age":40,"dob":"05/05/1996","Gender":"female","salary":70000,"Phno":9010045589},
      {"id":3,"name":"Mani","lname":"Raichandran","age":50,"dob":"02/06/1996","Gender":"Male","salary":60000,"Phno":8010031489},
      {"id":4,"name":"Mala","lname":"kohli","age":60,"dob":"03/07/1997","Gender":"feale","salary":30000,"Phno":9010006489},
      {"id":5,"name":"Mannu","lname":"Rain","age":20,"dob":"02/04/1994","Gender":"Male","salary":20000,"Phno":7510031489},
      {"id":6,"name":"Malini","lname":"Raita","age":70,"dob":"02/08/1997","Gender":"female","salary":30000,"Phno":6014031489},
      {"id":7,"name":"Murugan","lname":"chandran","age":60,"dob":"04/06/1993","Gender":"Male","salary":60000,"Phno":7660030489},
      {"id":8,"name":"Meera","lname":"Chan","age":20,"dob":"05/08/1998","Gender":"Female","salary":70000,"Phno":7907091479},

      
    ];
  }
}
