import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public ig="../../assets/Images/login_bg.png"
  constructor(private route:Router){
  }
  a(){
    this.route.navigateByUrl('rideoptions')
  }
}
