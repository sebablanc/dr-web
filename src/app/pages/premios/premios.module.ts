import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiosPageRoutingModule } from './premios-routing.module';

import { PremiosPage } from './premios.page';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiosPageRoutingModule,
    LayoutsModule,
    UiModule
  ],
  declarations: [PremiosPage]
})
export class PremiosPageModule {}
