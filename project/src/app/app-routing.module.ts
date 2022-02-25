import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { ImgComponent } from './img/img.component';
import { ClientComponent } from './test/client.component';

const routes: Routes = [
  { path: 'first',
  loadChildren: () => import('./first/first.module').then( m => m.FirstModule)
 },
 { path: 'client',
  loadChildren: () => import('./test/client.module').then( m => m.ClientModule)
 },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
