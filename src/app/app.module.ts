import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



import {EmployeeService} from './employees.service';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    HomeComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:500,
      positionClass:'toast-top-right',

      preventDuplicates:false
    })
  ],
  providers: [EmployeeService,AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
