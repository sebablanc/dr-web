import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrComputersPageRoutingModule } from './dr-computers-routing.module';

import { DrComputersPage } from './dr-computers.page';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrComputersPageRoutingModule,
    LayoutsModule,
    UiModule
  ],
  declarations: [DrComputersPage]
})
export class DrComputersPageModule {}
