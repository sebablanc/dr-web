import { Component, OnInit } from '@angular/core';
import { IPushButtonItem } from 'src/app/components/ui/push-button/push-button.component';

@Component({
  selector: 'app-dr-computers',
  templateUrl: './dr-computers.page.html',
  styleUrls: ['./dr-computers.page.scss'],
})
export class DrComputersPage implements OnInit {

  cursosAdultos: Array<IPushButtonItem> = [
    {label: 'Reparacion de PC I', image: 'assets/images/logos/logoDR.png'},
    {label: 'Reparacion de PC II', image: 'assets/images/logos/logoDR.png'},
    {label: 'Windows, Word y Excel', image: 'assets/images/logos/logoDR.png'},
    {label: 'CorelDraw', image: 'assets/images/logos/logoDR.png'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
