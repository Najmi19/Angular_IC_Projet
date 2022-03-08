import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {
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


  constructor() { 
    this.name = 'Harlay-Davidson'; 
this.model = 'SOFTAIL FXDR 114';
this.price = 19399;
this.name2 = 'BMW'; 
this.model2 = 'R nine T Scrambler 1200';
this.price2 = 18240;
this.name3='AGUSTA'; 
this.model3= 'RR 800' ;
this.price3= 19998;
this.commande='Commander';
  }

  ngOnInit(): void {
  }

}
