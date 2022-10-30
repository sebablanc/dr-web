import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {
  novedadesList: Array<number> = [1, 1, 1, 1];
  constructor() { }

  ngOnInit() {
  }

}
