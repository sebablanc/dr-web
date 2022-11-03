import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss'],
})
export class RoundedButtonComponent implements OnInit {
  @Input() config: IRoundedButtonConfig;
  @Input() disableButton: boolean = false;
  @Output('buttonClicked') buttonClicked: EventEmitter<boolean> = new EventEmitter;
  
  constructor() { }

  ngOnInit() {}

}

export interface IRoundedButtonConfig{
  text: string;
  type: string;
  style: string;
  leftIcon?: string;
  rightIcon?: string;
}
