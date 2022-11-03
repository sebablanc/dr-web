import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { UiModule } from '../ui/ui.module';
import { NovedadFormComponent } from './novedad-form/novedad-form.component';

@NgModule({
  declarations: [
    CursoFormComponent,
    NovedadFormComponent
  ],
  exports: [
    CursoFormComponent,
    NovedadFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class MyFormsModule { }
