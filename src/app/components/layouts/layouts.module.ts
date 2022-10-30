import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycommonsModule } from '../common/mycommons.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutBigCardComponent } from './layout-big-card/layout-big-card.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutBigCardComponent
  ],
  exports: [
    LayoutComponent,
    LayoutBigCardComponent
  ],
  imports: [
    CommonModule,
    MycommonsModule
  ]
})
export class LayoutsModule { }
