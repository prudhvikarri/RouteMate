import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
  
    NavComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    NavComponent
  ]
})
export class LoginModule { }
