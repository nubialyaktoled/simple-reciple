import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SweetPage } from './sweet.page';

const routes: Routes = [
  {
    path: '',
    component: SweetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SweetPageRoutingModule {}
