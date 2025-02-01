import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TimeComponent } from './time/time.component';


const routes: Routes = [
  {
    path:'',
    component:LoginsignupComponent
  },
  {
path:'loginsignup',
component:LoginsignupComponent
  },
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
      path:'dashboard',
      component: DashboardComponent,
      },
      {
        path:'userinfo',
        component:UserinfoComponent
      },
      {
path:'time',
component:TimeComponent
      }
    ],
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
