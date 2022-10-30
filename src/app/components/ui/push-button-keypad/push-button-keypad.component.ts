import { Component, Input, OnInit } from '@angular/core';
import { IPushButtonItem } from '../push-button/push-button.component';

@Component({
  selector: 'app-push-button-keypad',
  templateUrl: './push-button-keypad.component.html',
  styleUrls: ['./push-button-keypad.component.scss'],
})
export class PushButtonKeypadComponent implements OnInit {
  @Input() items: Array<IPushButtonItem> = [];

  constructor() { }

  ngOnInit() {}

}
