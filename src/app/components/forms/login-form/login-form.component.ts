import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { EMAIL_CONFIG, PASSWORD_CONFIG } from '../../ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_LOGIN_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  loginForm: FormGroup = null;
  emailConfig: IInputConfig = EMAIL_CONFIG;
  passwordConfig: IInputConfig = PASSWORD_CONFIG;
  buttonLoginConfig: IRoundedButtonConfig = BUTTON_LOGIN_CONFIG;
  
  constructor(private fb: FormBuilder, private modalSrv: ModalService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  async openResetPassword(){
    let resetPasswordResult = await this.modalSrv.showResetPasswordModal();
    console.log('resetPasswordResult');
    console.log(resetPasswordResult);
  }

  closeForm(create: boolean){
    let data = create ? this.loginForm.value : null;
    this.emitData.emit(data);
  }
}
