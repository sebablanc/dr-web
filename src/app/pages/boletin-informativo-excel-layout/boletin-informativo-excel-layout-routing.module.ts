import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletinInformativoExcelLayoutPage } from './boletin-informativo-excel-layout.page';

const routes: Routes = [
  {
    path: '',
    component: BoletinInformativoExcelLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletinInformativoExcelLayoutPageRoutingModule {}
