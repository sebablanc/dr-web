import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginData } from 'src/app/interfaces/authData';
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
  @Input() errorCredentials: boolean = false;
  @Output() emitData: EventEmitter<loginData> = new EventEmitter();
  @Output() emitResetPassword: EventEmitter<boolean> = new EventEmitter();

  loginForm: FormGroup = null;
  emailConfig: IInputConfig = EMAIL_CONFIG;
  passwordConfig: IInputConfig = PASSWORD_CONFIG;
  buttonLoginConfig: IRoundedButtonConfig = BUTTON_LOGIN_CONFIG;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  closeForm(create: boolean){
    let data = create ? this.loginForm.value : null;
    this.emitData.emit(data);
  }
}
