import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremioExcelLayoutPage } from './premio-excel-layout.page';

const routes: Routes = [
  {
    path: '',
    component: PremioExcelLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioExcelLayoutPageRoutingModule {}
