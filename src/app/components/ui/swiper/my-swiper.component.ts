import { Component, OnInit, ViewEncapsulation, ViewChild, Input, HostListener } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
@Component({
  selector: 'app-my-swiper',
  templateUrl: './my-swiper.component.html',
  styleUrls: ['./my-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MySwiperComponent implements OnInit {
  @ViewChild("swiper") swiper: SwiperComponent;
  @Input() items: Array<any>;
  slidesPerView: number = 3;

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.slidesPerView = 3;
    if(window.innerWidth > 590 && window.innerWidth < 963){
      this.slidesPerView = 2;
    }
    else if (window.innerWidth < 590) this.slidesPerView = 1;
  }

  constructor() { }

  ngOnInit() {
    this.onResize();
  }

  ngAfterContentChecked() {
    if (this.swiper) {
        this.swiper.updateSwiper({});
    }
}

}
