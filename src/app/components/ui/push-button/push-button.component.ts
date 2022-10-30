import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-push-button',
  templateUrl: './push-button.component.html',
  styleUrls: ['./push-button.component.scss'],
})
export class PushButtonComponent implements OnInit {
  @Input() item: IPushButtonItem = null;

  constructor(private navigationSrv: NavigationService) { }

  ngOnInit() {}

  goTo(){
    this.navigationSrv.goTo('curso-detail');
  }

}

export interface IPushButtonItem{
  image: string,
  label: string
}
