import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrKidsPage } from './dr-kids.page';

const routes: Routes = [
  {
    path: '',
    component: DrKidsPage
  }, {
    path: ':id',
    loadChildren: () => import('../curso-detail/curso-detail.module').then( m => m.CursoDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrKidsPageRoutingModule {}
