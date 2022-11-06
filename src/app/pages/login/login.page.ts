import { Component, OnInit } from '@angular/core';
import { loginData } from 'src/app/interfaces/authData';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
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
    private modalSrv: ModalService,
    private loadingSrv: LoadingService) { }

  ngOnInit() {
  }

  async login(event: loginData){
    this.loadingSrv.showDRLoading();
    this.errorLogin = false;
    let resp = await this.authSrv.login(event);
    this.errorLogin = !resp;
    this.loadingSrv.dismissLoading();
    if(resp) window.location.reload();
  }

  async openResetPassword(){
    await this.modalSrv.showResetPasswordModal();
  }

}
