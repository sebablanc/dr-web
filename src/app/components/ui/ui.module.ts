import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { HeaderLinkKeypadComponent } from './header-link-keypad/header-link-keypad.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './swiper/swiper.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { PushButtonComponent } from './push-button/push-button.component';
import { PushButtonKeypadComponent } from './push-button-keypad/push-button-keypad.component';
import { NovedadCardComponent } from './novedad-card/novedad-card.component';
import { InputDrComponent } from './input-dr/input-dr.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderLinkComponent,
    HeaderLinkKeypadComponent,
    SwiperComponent,
    HomeCarouselComponent,
    PushButtonComponent,
    PushButtonKeypadComponent,
    NovedadCardComponent,
    InputDrComponent
  ],
  exports: [
    HeaderLinkKeypadComponent,
    SwiperComponent,
    HomeCarouselComponent,
    PushButtonComponent,
    PushButtonKeypadComponent,
    NovedadCardComponent,
    InputDrComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ReactiveFormsModule
  ]
})
export class UiModule { }
