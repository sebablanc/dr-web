import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletinInformativoExcelLayoutPageRoutingModule } from './boletin-informativo-excel-layout-routing.module';

import { BoletinInformativoExcelLayoutPage } from './boletin-informativo-excel-layout.page';
import { MyFormsModule } from 'src/app/components/forms/my-forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletinInformativoExcelLayoutPageRoutingModule,
    MyFormsModule
  ],
  declarations: [BoletinInformativoExcelLayoutPage]
})
export class BoletinInformativoExcelLayoutPageModule {}
