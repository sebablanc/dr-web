import { Component, OnInit } from '@angular/core';
import { RS_LINKS } from 'src/constants/items';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  headerRSItems: Array<any> = RS_LINKS;

  constructor() { }

  ngOnInit() {}

}
