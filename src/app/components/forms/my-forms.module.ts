import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { UiModule } from '../ui/ui.module';
import { NovedadFormComponent } from './novedad-form/novedad-form.component';
import { PremioFormComponent } from './premio-form/premio-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';

@NgModule({
  declarations: [
    CursoFormComponent,
    NovedadFormComponent,
    PremioFormComponent,
    LoginFormComponent,
    ResetPasswordFormComponent
  ],
  exports: [
    CursoFormComponent,
    NovedadFormComponent,
    PremioFormComponent,
    LoginFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class MyFormsModule { }
