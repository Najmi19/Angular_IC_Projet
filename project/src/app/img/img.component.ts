import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent  {
  
  ImagePath: string;
  first_string = 'Welcome';
  

  constructor(){
    this.ImagePath = '/assets/4233.jpg';
  }

}
