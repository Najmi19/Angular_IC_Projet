import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { ClientComponentRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
 //   IonicModule,
    ClientComponentRoutingModule
  ],
  declarations: [ClientComponent]
})
export class ClientModule {}
