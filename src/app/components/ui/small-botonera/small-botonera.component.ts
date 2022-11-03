import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ROUND_BUTTON_EDIT_CONFIG, ROUND_BUTTON_DELETE_CONFIG } from '../round-button/round-button-configs';
import { IRoundButtonConfig } from '../round-button/round-button.component';

@Component({
  selector: 'app-small-botonera',
  templateUrl: './small-botonera.component.html',
  styleUrls: ['./small-botonera.component.scss'],
})
export class SmallBotoneraComponent implements OnInit {
  @Output() leftButtonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() rightButtonClicked: EventEmitter<boolean> = new EventEmitter();

  editRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EDIT_CONFIG;
  deleteRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_CONFIG;
  constructor() { }

  ngOnInit() {
    this.editRoundButtonConfig.extraClass = 'small-botonera-button small-left-btn';
    this.deleteRoundButtonConfig.extraClass = 'small-botonera-button small-right-btn';
  }

}
