import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { UiModule } from 'src/app/components/ui/ui.module';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LayoutsModule,
    UiModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
