import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarningPageRoutingModule } from './warning-routing.module';

import { WarningPage } from './warning.page';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarningPageRoutingModule,
    UiModule
  ],
  declarations: [WarningPage]
})
export class WarningPageModule {}
