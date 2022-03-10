import { Component, OnInit } from '@angular/core';
import {CarService}  from './car.service';
import {Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars: any[]=[];
carCount = 0;
destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private carService: CarService) {
   }
getAllCars(){
  this.carService.getCars().pipe(takeUntil(this.destroy$)).subscribe((cars: any)=> {
                            		this.carCount = cars.length;
                                    this.cars = cars;
                                });
                              }


  ngOnInit() {
  this.getAllCars();
  }

  ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }

}
