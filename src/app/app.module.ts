import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginModule } from './login/login.module';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { ConnectComponent } from './connect/connect.component';
import { RideoptionsComponent } from './rideoptions/rideoptions.component';
import { FindrideComponent } from './findride/findride.component';
import { PostrideComponent } from './postride/postride.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FaqComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BannerComponent,
    ConnectComponent,
    RideoptionsComponent,
    FindrideComponent,
    PostrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
