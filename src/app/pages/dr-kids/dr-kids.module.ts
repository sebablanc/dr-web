import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrKidsPageRoutingModule } from './dr-kids-routing.module';

import { DrKidsPage } from './dr-kids.page';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrKidsPageRoutingModule,
    LayoutsModule,
    UiModule
  ],
  declarations: [DrKidsPage]
})
export class DrKidsPageModule {}
