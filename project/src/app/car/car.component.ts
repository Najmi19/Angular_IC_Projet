import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
public name: string;
public model: string;
public price: number;
public name2: string;
public model2: string;
public price2: number;
public name3: string;
public model3: string;
public price3: number;
public commande: string;

ImagePath: string;

  constructor() {
this.name = 'Bugatti';
this.model = 'Veyron';
this.price = 100000000;
this.name2 = 'Mercedes';
this.model2 = 'AMG';
this.price2 = 100000000;
this.name3='Audi';
this.model3= 'A5' ;
this.price3= 1000000;
this.commande='Commander';
this.ImagePath = '/assets/4233.jpg';

   }
