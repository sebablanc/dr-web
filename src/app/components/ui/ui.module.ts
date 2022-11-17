import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { HeaderLinkKeypadComponent } from './header-link-keypad/header-link-keypad.component';
import { MySwiperComponent } from './swiper/my-swiper.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { PushButtonComponent } from './push-button/push-button.component';
import { NovedadCardComponent } from './novedad-card/novedad-card.component';
import { InputDrComponent } from './input-dr/input-dr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaDrComponent } from './text-area-dr/text-area-dr.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { PremioCardComponent } from './premio-card/premio-card.component';
import { RoundButtonComponent } from './round-button/round-button.component';
import { IonicModule } from '@ionic/angular';
import { SelectDrComponent } from './select-dr/select-dr.component';
import { SmallBotoneraComponent } from './small-botonera/small-botonera.component';
import { SwiperModule } from "swiper/angular";
import { MyPipesModule } from 'src/app/pipes/my-pipes.module';
import { MesesPipe } from 'src/app/pipes/meses.pipe';

@NgModule({
  declarations: [
    HeaderLinkComponent,
    HeaderLinkKeypadComponent,
    MySwiperComponent,
    HomeCarouselComponent,
    PushButtonComponent,
    NovedadCardComponent,
    InputDrComponent,
    TextAreaDrComponent,
    RoundedButtonComponent,
    PremioCardComponent,
    RoundButtonComponent,
    SelectDrComponent,
    SmallBotoneraComponent
  ],
  exports: [
    HeaderLinkKeypadComponent,
    MySwiperComponent,
    HomeCarouselComponent,
    PushButtonComponent,
    NovedadCardComponent,
    InputDrComponent,
    TextAreaDrComponent,
    RoundedButtonComponent,
    PremioCardComponent,
    RoundButtonComponent,
    SelectDrComponent,
    SmallBotoneraComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SwiperModule,
    MyPipesModule
  ],
  providers: [
    MesesPipe
  ]
})
export class UiModule { }
