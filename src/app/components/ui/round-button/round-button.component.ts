import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent implements OnInit {
  @Input() config: IRoundButtonConfig;
  @Output() roundButtonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}

export interface IRoundButtonConfig {
  iconName: string;
  extraClass: string;
  lowerButton: boolean;
  secondaryButton: boolean;
}
