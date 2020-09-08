import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  onClickSubmit(data) {
    if(data.email=="admin" && data.passwd=="admin")
    {
     this.router.navigate(['/home']);
    
    }
    else
    {
      window.alert("Enter Valid Credentials");
    }
  // window.alert(data.passwd);
  }
}
