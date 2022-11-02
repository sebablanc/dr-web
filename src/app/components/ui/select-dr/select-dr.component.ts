import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-select-dr',
  templateUrl: './select-dr.component.html',
  styleUrls: ['./select-dr.component.scss'],
})
export class SelectDrComponent implements OnInit {
  @Input() config: ISelectConfig;
  @Input() form: FormGroup;

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

export interface ISelectConfig {
  formControlName: string;
  label: string;
  readOnly?: boolean;
}
