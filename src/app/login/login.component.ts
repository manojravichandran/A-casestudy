import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authservice :AuthService) { }

  ngOnInit(): void {
  }

  
  onClickSubmit(data) {
    if(data.email=="admin" && data.passwd=="admin")
    {
      this.authservice.onlogIn();
     this.router.navigateByUrl('/home');
    
    }
    else
    {
      window.alert("Enter Valid Credentials");
    }
  // window.alert(data.passwd);
  }
}
