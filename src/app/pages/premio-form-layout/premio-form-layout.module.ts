import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremioFormLayoutPageRoutingModule } from './premio-form-layout-routing.module';

import { PremioFormLayoutPage } from './premio-form-layout.page';
import { MyFormsModule } from 'src/app/components/forms/my-forms.module';
import { MesesPipe } from 'src/app/pipes/meses.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremioFormLayoutPageRoutingModule,
    MyFormsModule
  ],
  declarations: [PremioFormLayoutPage],
  providers: [
    MesesPipe
  ]
})
export class PremioFormLayoutPageModule {}
