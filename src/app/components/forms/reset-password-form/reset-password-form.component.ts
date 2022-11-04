import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { EMAIL_CONFIG } from '../../ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_RESET_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent implements OnInit {
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  resetPasswordForm: FormGroup = null;
  emailConfig: IInputConfig = EMAIL_CONFIG;
  buttonRPConfig: IRoundedButtonConfig = BUTTON_RESET_CONFIG;
  
  constructor(private fb: FormBuilder, private modalSrv: ModalService) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  closeForm(create: boolean){
    let data = create ? this.resetPasswordForm.value : null;
    this.emitData.emit(data);
  }
}
