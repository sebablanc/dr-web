import { Component, OnInit } from '@angular/core';
import { loginData } from 'src/app/interfaces/authData';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorLogin: boolean = false;
  constructor(
    private authSrv: AuthService,
    private modalSrv: ModalService) { }

  ngOnInit() {
  }

  async login(event: loginData){
    this.errorLogin = false;
    let resp = await this.authSrv.login(event);
    this.errorLogin = !resp;
    if(resp) window.location.reload();
  }

  async openResetPassword(){
    let resetPasswordResult = await this.modalSrv.showResetPasswordModal();
    console.log('resetPasswordResult');
    console.log(resetPasswordResult);
  }

}
