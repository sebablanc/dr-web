import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoExcelLayoutPageRoutingModule } from './curso-excel-layout-routing.module';

import { CursoExcelLayoutPage } from './curso-excel-layout.page';
import { MyFormsModule } from 'src/app/components/forms/my-forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoExcelLayoutPageRoutingModule,
    MyFormsModule
  ],
  declarations: [CursoExcelLayoutPage]
})
export class CursoExcelLayoutPageModule {}
