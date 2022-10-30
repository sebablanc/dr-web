import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasPageRoutingModule } from './consultas-routing.module';

import { ConsultasPage } from './consultas.page';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPageRoutingModule,
    LayoutsModule,
    ReactiveFormsModule,
    UiModule
  ],
  declarations: [ConsultasPage]
})
export class ConsultasPageModule {}
