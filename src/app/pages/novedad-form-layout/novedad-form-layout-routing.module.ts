import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovedadFormLayoutPage } from './novedad-form-layout.page';

const routes: Routes = [
  {
    path: '',
    component: NovedadFormLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadFormLayoutPageRoutingModule {}
