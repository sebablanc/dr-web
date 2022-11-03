import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { UiModule } from '../ui/ui.module';
import { NovedadFormComponent } from './novedad-form/novedad-form.component';
import { PremioFormComponent } from './premio-form/premio-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    CursoFormComponent,
    NovedadFormComponent,
    PremioFormComponent,
    LoginFormComponent
  ],
  exports: [
    CursoFormComponent,
    NovedadFormComponent,
    PremioFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class MyFormsModule { }
