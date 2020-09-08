import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {AuthGuardService} from "./auth-guard.service";


const routes: Routes = [
  {path:"", component:LoginComponent},
  { path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  { path:'edetails',component:EmployeeDetailComponent},
  { path:'elist',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[HomeComponent,LoginComponent,EmployeeDetailComponent,EmployeeListComponent]