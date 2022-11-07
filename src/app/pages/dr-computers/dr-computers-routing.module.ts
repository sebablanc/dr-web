import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrComputersPage } from './dr-computers.page';

const routes: Routes = [
  {
    path: '',
    component: DrComputersPage
  }, {
    path: ':id',
    loadChildren: () => import('../curso-detail/curso-detail.module').then( m => m.CursoDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrComputersPageRoutingModule {}
