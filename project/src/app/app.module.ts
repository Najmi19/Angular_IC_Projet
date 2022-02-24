import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ClientComponent } from './test/client.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ImgComponent,
    LogoComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
