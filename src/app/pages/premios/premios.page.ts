import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {
  titlePage: string = 'Resultado de los sorteos';

  constructor() { }

  ngOnInit() {
  }

}
