import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rideoptions',
  templateUrl: './rideoptions.component.html',
  styleUrls: ['./rideoptions.component.css']
})
export class RideoptionsComponent {
      constructor(private ride:Router){}
      a(){
        this.ride.navigateByUrl('postride')
      }
      b(){
        this.ride.navigateByUrl('findride')
      }
}
