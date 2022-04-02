import { Component, OnInit } from '@angular/core';
import {Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {MotoService}  from './moto.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {
  motos: any[]=[];
  motoCount = 0;
  private commande:String;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private motoService: MotoService) {
this.commande='Commander';
  }
  getAllMotos(){
  this.motoService.getMotos().pipe(takeUntil(this.destroy$)).subscribe((motos: any)=> {
                                                        		this.motoCount = motos.length;
                                                               this.motos = motos;
                                                            });
  }

  ngOnInit(): void {
  this.getAllMotos();
  }

 ngOnDestroy() {
       this.destroy$.next(true);
       this.destroy$.unsubscribe();
     }

}
