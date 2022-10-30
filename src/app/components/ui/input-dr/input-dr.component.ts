import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-input-dr',
  templateUrl: './input-dr.component.html',
  styleUrls: ['./input-dr.component.scss'],
})
export class InputDrComponent implements OnInit {
  @Input() config: IInputConfig;
  @Input() form: FormGroup;
  @Output('suffixIconClicked') suffixIconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('prefixIconClicked') prefixIconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('dataEmit') dataEmit: EventEmitter<any> = new EventEmitter();
  @Output('dataEmitKey') dataEmitKey: EventEmitter<any> = new EventEmitter();

  field: AbstractControl;
  
  constructor(private shareSrv: ShareService) { }

  ngOnInit() {
    if(this.config && this.form){
      this.field = this.form.controls[this.config.formControlName];
    }
  }

  getErrorMessage(){
    return this.shareSrv.getErrorMessage(this.field);
  }

}

export interface IInputConfig {
  formControlName: string;
  label: string;
  type: string;
  prefixIcon?: string;
  suffixIcon?: string;
  readOnly?: boolean;
}
