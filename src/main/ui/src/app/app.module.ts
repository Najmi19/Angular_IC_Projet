import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ImgComponent } from './img/img.component';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LogoComponent } from './logo/logo.component';
import { CarComponent } from './car/car.component';
import { MotoComponent } from './moto/moto.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatInputModule} from '@angular/material/input';

import {FormsModule} from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConfirmpaymentComponent } from './confirmpayment/confirmpayment.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ImgComponent,
    LogoComponent,
    CarComponent,
    MotoComponent,
    ContactComponent,
    InscriptionComponent,
    CartListComponent,
    ProductListComponent,
    ConnexionComponent,
    ConfirmpaymentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatInputModule


  ],

  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
