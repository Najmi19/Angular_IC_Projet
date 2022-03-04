import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first.component';

import { FirstComponentRoutingModule } from './first-routing.module';
import { ClientModule } from '../test/client.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FirstComponentRoutingModule,
    ClientModule
  ],
  declarations: []
})
export class FirstModule {}
