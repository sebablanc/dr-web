import { Component, OnInit } from '@angular/core';
import { BUTTON_CANCEL_CONFIG, BUTTON_DELETE_CONFIG } from 'src/app/components/ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from 'src/app/components/ui/rounded-button/rounded-button.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.page.html',
  styleUrls: ['./warning.page.scss'],
})
export class WarningPage implements OnInit {
  buttonSendConfig: IRoundedButtonConfig = BUTTON_DELETE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  closeModal(deleteCurso: boolean){
    this.modalSrv.dismissModal(deleteCurso);
  }

}
