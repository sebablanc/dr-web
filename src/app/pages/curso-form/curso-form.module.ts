import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CursoFormPageRoutingModule } from './curso-form-routing.module';

import { CursoFormPage } from './curso-form.page';
import { MyFormsModule } from 'src/app/components/forms/my-forms.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CursoFormPageRoutingModule,
    MyFormsModule
  ],
  declarations: [CursoFormPage]
})
export class CursoFormPageModule {}
