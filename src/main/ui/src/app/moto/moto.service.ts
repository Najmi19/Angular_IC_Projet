import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MotoService{
  constructor(private http:HttpClient) {}
  rootURL = '/api';
  getMotos(){
      return this.http.get(this.rootURL+'/motos');
    }

    addMoto(moto:any, id:number, prix:number, description:string){
      moto.id = id;
      moto.prix = prix;
      moto.description  = description;
      return this.http.post(this.rootURL + '/moto',moto);
    }

}
