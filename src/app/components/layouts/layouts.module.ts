import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycommonsModule } from '../common/mycommons.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutBigCardComponent } from './layout-big-card/layout-big-card.component';
import { IonicModule } from '@ionic/angular';
import { LoginPageLayoutComponent } from './login-page-layout/login-page-layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutBigCardComponent,
    LoginPageLayoutComponent
  ],
  exports: [
    LayoutComponent,
    LayoutBigCardComponent,
    LoginPageLayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MycommonsModule
  ]
})
export class LayoutsModule { }
