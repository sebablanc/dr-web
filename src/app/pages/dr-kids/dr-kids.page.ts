import { Component, OnInit } from '@angular/core';
import { IPushButtonItem } from 'src/app/components/ui/push-button/push-button.component';
import { ROUND_BUTTON_CREATE_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';

@Component({
  selector: 'app-dr-kids',
  templateUrl: './dr-kids.page.html',
  styleUrls: ['./dr-kids.page.scss'],
})
export class DrKidsPage implements OnInit {

  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;

  cursosKids: Array<IPushButtonItem> = [
    {label: 'Operador Junior 4 años', image: 'assets/images/logos/logoDRKids.png'},
    {label: 'Operador Junior 5 años', image: 'assets/images/logos/logoDRKids.png'},
    {label: 'Operador Junior 6 años', image: 'assets/images/logos/logoDRKids.png'},
    {label: 'Operador Junior 7 años', image: 'assets/images/logos/logoDRKids.png'},
  ]

  constructor() { }

  ngOnInit() {
  }

  showCreateModal(){
    console.log('showCreateModal');
  }

}
