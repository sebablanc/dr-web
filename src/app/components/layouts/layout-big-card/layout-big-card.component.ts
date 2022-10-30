import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-big-card',
  templateUrl: './layout-big-card.component.html',
  styleUrls: ['./layout-big-card.component.scss'],
})
export class LayoutBigCardComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {}

}
