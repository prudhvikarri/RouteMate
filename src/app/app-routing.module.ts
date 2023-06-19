import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { RideoptionsComponent } from './rideoptions/rideoptions.component';
import { FindrideComponent } from './findride/findride.component';
import { PostrideComponent } from './postride/postride.component';

const routes: Routes = [
  {path:'',redirectTo:'welcomepage',pathMatch:'full'},
  {path:'welcomepage',component:WelcomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'signup',component:SignupComponent},
  {path:'rideoptions',component:RideoptionsComponent},
  {path:'findride',component:FindrideComponent},
  {path:'postride',component:PostrideComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
