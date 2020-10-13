import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'filtro',
    loadChildren: () => import('../filtro/filtro.module').then( m => m.FiltroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
