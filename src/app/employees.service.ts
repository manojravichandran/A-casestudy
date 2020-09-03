import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Manoj","age":20},
      {"id":2,"name":"Manju","age":24},
      {"id":3,"name":"Mani","age":24},
      {"id":4,"name":"Jansi","age":32},
      {"id":5,"name":"Priya","age":24},
      {"id":6,"name":"Praneeth","age":12},
      {"id":7,"name":"Odin","age":67}
    ];
  }
}
