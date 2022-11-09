import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesesPipe } from './meses.pipe';



@NgModule({
  declarations: [MesesPipe],
  exports: [MesesPipe],
  imports: [
    CommonModule
  ]
})
export class MyPipesModule { }
