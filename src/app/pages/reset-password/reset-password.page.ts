import { Component, OnInit } from '@angular/core';
import { loginData } from 'src/app/interfaces/authData';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private loadingSrv: LoadingService,
    private modalSrv: ModalService,
    private authSrv: AuthService) { }

  ngOnInit() {
  }

  async resetPassword(event: loginData){
    if(!event || !event.email) return;
    try {
      this.modalSrv.dismissModal(null);
      this.loadingSrv.showDRLoading();
      let resultResetPassword = await this.authSrv.resetPassword(event.email);
      let resultType = resultResetPassword ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR;
      this.loadingSrv.dismissLoading();
      this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.RESET_PASSWORD, resultType, event.email);
    } catch (error) {
      console.log(error);
    }
  }

}
