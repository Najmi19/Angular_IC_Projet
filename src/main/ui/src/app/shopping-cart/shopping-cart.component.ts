import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title = 'Angular Tutorial';

  onClick() {
    myTest();
  }

  constructor() { }

  ngOnInit(): void {
    
  } }


