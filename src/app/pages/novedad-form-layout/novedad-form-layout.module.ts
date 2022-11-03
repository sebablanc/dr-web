import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovedadFormLayoutPageRoutingModule } from './novedad-form-layout-routing.module';

import { NovedadFormLayoutPage } from './novedad-form-layout.page';
import { MyFormsModule } from 'src/app/components/forms/my-forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovedadFormLayoutPageRoutingModule,
    MyFormsModule
  ],
  declarations: [NovedadFormLayoutPage]
})
export class NovedadFormLayoutPageModule {}
