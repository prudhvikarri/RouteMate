import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
    public img="../../assets/Videos/bg1.mp4"
    constructor(private link:Router){}
    ngOnInit(){}
    // c(){
    //   this.link.navigateByUrl('/signup')
    // }
}
