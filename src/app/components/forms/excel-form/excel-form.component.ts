import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BUTTON_SAVE_CONFIG, BUTTON_CANCEL_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-excel-form',
  templateUrl: './excel-form.component.html',
  styleUrls: ['./excel-form.component.scss'],
})
export class ExcelFormComponent implements OnInit {
  @ViewChild('inputFile') inputFile: HTMLInputElement;
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;
  
  constructor() { }

  ngOnInit() {}

  closeForm(create: boolean){
    let data = null;
    if(create){
      // si no selecciona archivo permanece en el modal de carga
      if (!this.inputFile['nativeElement'].files || !this.inputFile['nativeElement'].files[0]) return;
      data = this.inputFile['nativeElement'].files[0]
    } 

    this.emitData.emit(data);
  }

}
