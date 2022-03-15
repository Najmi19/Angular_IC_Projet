import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = 'E-Car Online'
  Accueil = 'Home';
  Voiture = 'Car';
  Moto='Motorbike';
  Contactez_nous='Contact us';
  Inscription='Registration';
  Connexion='Login';
  Recherche='Search';

  constructor(private route:Router) { }


  ngOnInit(): void {


  }

}

