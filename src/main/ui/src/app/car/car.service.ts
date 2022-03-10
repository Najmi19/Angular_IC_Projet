import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CarService{
  constructor(private http:HttpClient) {}
  rootURL = '/api';
  getCars(){
      return this.http.get(this.rootURL+'/voitures');
    }

    addCar(voiture:any, id:number, prix:number, description:string){
      voiture.id = id;
      voiture.prix = prix;
      voiture.description  = description;
      return this.http.post(this.rootURL + '/voiture',voiture);
    }

}
