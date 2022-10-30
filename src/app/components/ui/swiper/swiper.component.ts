import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  ngOnInit() {}

}
