import { Component, Input, OnInit } from '@angular/core';
import { BUTTON_CANCEL_CONFIG, BUTTON_CLOSE_CONFIG, BUTTON_DELETE_CONFIG, BUTTON_UPLOAD_CONFIG } from 'src/app/components/ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from 'src/app/components/ui/rounded-button/rounded-button.component';
import { ModalService } from 'src/app/services/modal.service';

export const OPERATION_TYPES = {
  DELETE: 'DELETE',
  SAVE: 'SAVE',
  MODIFY: 'MODIFY',
  RESET_PASSWORD: 'RESET_PASSWORD',
  EXCEL_LOAD: 'EXCEL_LOAD',
  MULTIPLE_DELETE: 'MULTIPLE_DELETE'
}

export const  RESULTS_TYPES = {
  WARNING: 'WARNING',
  WARNING_EXCEL: 'WARNING_EXCEL',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  MODIFY: 'MODIFY',
  NO_ELEMENTS: 'NO_ELEMENTS'
}

const TITLES = {
  WARNING: '¡Cuidado!',
  WARNING_EXCEL: '¡Cuidado!',
  SUCCESS: '¡Genial!',
  ERROR: '¡Lo sentimos!',
  MODIFY: '¡Excelente!',
  NO_ELEMENTS: '¡Atención!'
}

const MESSAGES = {
  DELETE_WARNING: 'Estás por borrar <b>{{ toDelete }}</b>. Si continuás con esta operación, no se puede deshacer. ¿Estás seguro de querer eliminar?',
  DELETE_SUCCESS: 'Se borró <b>{{ toDelete }}</b> con éxito.',
  DELETE_ERROR: 'Tuvimos un error al intentar borrar <b>{{ toDelete }}</b>. Intentalo más tarde',
  SAVE_SUCCESS: 'Se guardó <b>{{ toDelete }}</b> exitosamente.',
  SAVE_ERROR: 'Tuvimos un error al intentar guardar <b>{{ toDelete }}</b>. Intentalo más tarde',
  RESET_PASSWORD_SUCCESS: 'Enviamos un mensaje a tu correo: <b>{{ toDelete }}</b> con un link para reestablecer la contraseña. No te olvides de revisar la carpeta de SPAM. En caso de que no te llegue, comunicate con nosotros.',
  RESET_PASSWORD_ERROR: 'Tuvimos un error al intentar reestablecer tu contraseña. Intentalo más tarde',
  MODIFY_SUCCESS: 'Se editó <b>{{ toDelete }}</b> exitosamente.',
  MODIFY_ERROR: 'Tuvimos un error al intentar editar <b>{{ toDelete }}</b>. Intentalo más tarde',
  EXCEL_LOAD_WARNING_EXCEL: '¿Seguro desea cargar el archivo <b>{{ toDelete }}</b>?',
  MULTIPLE_DELETE_NO_ELEMENTS: 'No has seleccionado ningún elemento. Primero debés seleccionar alguno y volver a reintentar la operación.',
}

const ICONS = {
  WARNING: 'alert-icon.svg',
  WARNING_EXCEL: 'alert-icon.svg',
  NO_ELEMENTS: 'alert-icon.svg',
  SUCCESS: 'confirm-icon.svg',
  ERROR: 'cancel-icon.svg'
}

const BUTTONS = {
  WARNING: ['cancel', 'send'],
  WARNING_EXCEL: ['cancel', 'upload'],
  SUCCESS: ['close'],
  ERROR: ['close'],
  NO_ELEMENTS: ['close']
}

@Component({
  selector: 'app-delete-messages',
  templateUrl: './delete-messages.page.html',
  styleUrls: ['./delete-messages.page.scss'],
})
export class DeleteMessagesPage implements OnInit {
  @Input() toDelete: string;
  @Input() resultType: string = RESULTS_TYPES.WARNING;
  @Input() operationType: string = OPERATION_TYPES.DELETE;
  title: string = '';
  message: string = '';
  icon: string = '';
  showButtons = [];
  buttonSendConfig: IRoundedButtonConfig = BUTTON_DELETE_CONFIG;
  buttonUploadConfig: IRoundedButtonConfig = BUTTON_UPLOAD_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;
  buttonCloseConfig: IRoundedButtonConfig = BUTTON_CLOSE_CONFIG;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
    let resultTypeUpperCase = this.resultType.toUpperCase();
    let operationTypeUpperCase = this.operationType.toUpperCase();
    
    this.icon = ICONS[resultTypeUpperCase];
    this.title = TITLES[resultTypeUpperCase];
    this.showButtons = BUTTONS[resultTypeUpperCase];
    this.message = MESSAGES[operationTypeUpperCase + '_' + resultTypeUpperCase];
    this.message = this.message.replace('{{ toDelete }}', this.toDelete);
  }

  closeModal(deleteCurso: boolean){
    this.modalSrv.dismissModal(deleteCurso);
  }

}
