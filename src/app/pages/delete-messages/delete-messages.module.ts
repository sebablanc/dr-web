import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteMessagesPageRoutingModule } from './delete-messages-routing.module';

import { DeleteMessagesPage } from './delete-messages.page';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteMessagesPageRoutingModule,
    UiModule
  ],
  declarations: [DeleteMessagesPage]
})
export class WarningPageModule {}
