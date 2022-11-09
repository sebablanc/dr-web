import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremioExcelLayoutPageRoutingModule } from './premio-excel-layout-routing.module';

import { PremioExcelLayoutPage } from './premio-excel-layout.page';
import { MyFormsModule } from 'src/app/components/forms/my-forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremioExcelLayoutPageRoutingModule,
    MyFormsModule
  ],
  declarations: [PremioExcelLayoutPage]
})
export class PremioExcelLayoutPageModule {}
