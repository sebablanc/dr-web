import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDetailPageRoutingModule } from './curso-detail-routing.module';

import { CursoDetailPage } from './curso-detail.page';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDetailPageRoutingModule,
    LayoutsModule,
    UiModule
  ],
  declarations: [CursoDetailPage]
})
export class CursoDetailPageModule {}
