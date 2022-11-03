import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremioFormLayoutPage } from './premio-form-layout.page';

const routes: Routes = [
  {
    path: '',
    component: PremioFormLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioFormLayoutPageRoutingModule {}
