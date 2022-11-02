import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    CursoFormComponent
  ],
  exports: [
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class MyFormsModule { }
