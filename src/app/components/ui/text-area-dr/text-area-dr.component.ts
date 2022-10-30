import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-text-area-dr',
  templateUrl: './text-area-dr.component.html',
  styleUrls: ['./text-area-dr.component.scss'],
})
export class TextAreaDrComponent implements OnInit {
  @Input() config: ITextAreaConfig;
  @Input() form: FormGroup;
  field: AbstractControl;

  constructor(private shareSrv: ShareService) { }

  ngOnInit() {
    this.field = this.form.controls[this.config.formControlName];
  }

  getErrorMessage(type: any){
    return this.shareSrv.getErrorMessage(this.field);
  }

}

export interface ITextAreaConfig {
  formControlName: string;
  label: string;
  readOnly?: boolean;
  minRows?: number;
}
