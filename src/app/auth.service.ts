import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logedIn:boolean=false;

  onlogIn(){
    this.logedIn=true;
  }

  onlogedOff(){

    this.logedIn=false;
  }

  constructor() { }
}
