import { Component, Input, OnInit } from '@angular/core';
import { BUTTON_CANCEL_CONFIG, BUTTON_CLOSE_CONFIG, BUTTON_DELETE_CONFIG } from 'src/app/components/ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from 'src/app/components/ui/rounded-button/rounded-button.component';
import { ModalService } from 'src/app/services/modal.service';

export const  MESSAGES_TYPES = {
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

const TITLES = {
  WARNING: '¡Cuidado!',
  SUCCESS: '¡Genial!',
  ERROR: '¡Lo sentimos!'
}

const MESSAGES = {
  WARNING: 'Estás por borrar <b>{{ toDelete }}</b>. Si continuás con esta operación, no se puede deshacer. ¿Estás seguro de querer eliminar?',
  SUCCESS: 'Se borró <b>{{ toDelete }}</b> con éxito.',
  ERROR: 'Tuvimos un error al intentar borrar <b>{{ toDelete }}</b>. Intentalo más tarde'
}

const ICONS = {
  WARNING: 'alert-icon.svg',
  SUCCESS: 'confirm-icon.svg',
  ERROR: 'cancel-icon.svg'
}

const BUTTONS = {
  WARNING: ['cancel', 'send'],
  SUCCESS: ['close'],
  ERROR: ['close']
}

@Component({
  selector: 'app-delete-messages',
  templateUrl: './delete-messages.page.html',
  styleUrls: ['./delete-messages.page.scss'],
})
export class DeleteMessagesPage implements OnInit {
  @Input() toDelete: string;
  @Input() type: string = MESSAGES_TYPES.WARNING;
  title: string = '';
  message: string = '';
  icon: string = '';
  showButtons = [];
  buttonSendConfig: IRoundedButtonConfig = BUTTON_DELETE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;
  buttonCloseConfig: IRoundedButtonConfig = BUTTON_CLOSE_CONFIG;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
    let typeUpperCase = this.type.toUpperCase();
    console.log(typeUpperCase);
    
    this.icon = ICONS[typeUpperCase];
    this.title = TITLES[typeUpperCase];
    this.showButtons = BUTTONS[typeUpperCase];
    this.message = MESSAGES[typeUpperCase];
    this.message = this.message.replace('{{ toDelete }}', this.toDelete);
  }

  closeModal(deleteCurso: boolean){
    this.modalSrv.dismissModal(deleteCurso);
  }

}
