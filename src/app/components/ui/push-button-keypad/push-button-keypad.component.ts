import { Component, Input, OnInit } from '@angular/core';
import { ICursoData } from 'src/app/interfaces/cursoData';

@Component({
  selector: 'app-push-button-keypad',
  templateUrl: './push-button-keypad.component.html',
  styleUrls: ['./push-button-keypad.component.scss'],
})
export class PushButtonKeypadComponent implements OnInit {
  @Input() items: Array<ICursoData> = [];

  constructor() { }

  ngOnInit() {}

}
