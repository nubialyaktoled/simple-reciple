import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SweetPageRoutingModule } from './sweet-routing.module';

import { SweetPage } from './sweet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SweetPageRoutingModule
  ],
  declarations: [SweetPage]
})
export class SweetPageModule {}
