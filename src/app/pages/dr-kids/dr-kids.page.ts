import { Component, OnInit } from '@angular/core';
import { IPushButtonItem } from 'src/app/components/ui/push-button/push-button.component';

@Component({
  selector: 'app-dr-kids',
  templateUrl: './dr-kids.page.html',
  styleUrls: ['./dr-kids.page.scss'],
})
export class DrKidsPage implements OnInit {

  cursosKids: Array<IPushButtonItem> = [
    {label: 'Operador Junior 4 años', image: 'assets/images/logos/logoDRKids.png'},
    {label: 'Operador Junior 5 años', image: 'assets/images/logos/logoDRKids.png'},
    {label: 'Operador Junior 6 años', image: 'assets/images/logos/logoDRKids.png'},
    {label: 'Operador Junior 7 años', image: 'assets/images/logos/logoDRKids.png'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
