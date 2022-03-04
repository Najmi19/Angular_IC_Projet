import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  Image2Path: string;
  constructor() {
    this.Image2Path = '/assets/logoPNG.PNG';
   }

  ngOnInit(): void {

   
  }

}
