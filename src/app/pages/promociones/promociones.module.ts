import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesPageRoutingModule } from './promociones-routing.module';

import { PromocionesPage } from './promociones.page';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesPageRoutingModule,
    LayoutsModule
  ],
  declarations: [PromocionesPage]
})
export class PromocionesPageModule {}
