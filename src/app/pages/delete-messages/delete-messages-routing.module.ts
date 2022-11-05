import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteMessagesPage } from './delete-messages.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteMessagesPageRoutingModule {}
