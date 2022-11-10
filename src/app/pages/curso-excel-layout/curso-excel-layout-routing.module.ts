import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoExcelLayoutPage } from './curso-excel-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CursoExcelLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoExcelLayoutPageRoutingModule {}
