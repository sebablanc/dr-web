import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CursoFormPage } from '../pages/curso-form/curso-form.page';
import { NovedadFormLayoutPage } from '../pages/novedad-form-layout/novedad-form-layout.page';
import { PremioFormLayoutPage } from '../pages/premio-form-layout/premio-form-layout.page';
import { ResetPasswordPage } from '../pages/reset-password/reset-password.page';
import { DeleteMessagesPage } from '../pages/delete-messages/delete-messages.page';
import { PremioExcelLayoutPage } from '../pages/premio-excel-layout/premio-excel-layout.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: HTMLIonModalElement;

  constructor(private modalCtrl: ModalController) { }

  private async openModal(component: any, componentProps: any, cssClass?: Array<string> | string) {
    this.modal = await this.modalCtrl.create({
      component,
      componentProps,
      cssClass
    });

    this.modal.present();

    return await this.modal.onWillDismiss();
  }

  async showCursoModal(title: string, curso: any) {
    return await this.openModal(CursoFormPage, { title, curso }, 'basic-modal');
  }

  async showDeleteMessagesModal(operationType: string, resultType: string, toDelete: string) {
    return await this.openModal(DeleteMessagesPage, { operationType, resultType, toDelete }, 'basic-modal');
  }

  async showNovedadModal(title: string, novedad: any) {
    return await this.openModal(NovedadFormLayoutPage, { title, novedad }, 'basic-modal');
  }

  async showPremioModal(title: string, premio: any) {
    return await this.openModal(PremioFormLayoutPage, { title, premio }, 'basic-modal');
  }

  async showResetPasswordModal() {
    return await this.openModal(ResetPasswordPage, null, 'basic-modal');
  }

  async showExcelModal(title: string) {
    return await this.openModal(PremioExcelLayoutPage, { title }, 'basic-modal');
  }

  async dismissModal(data: any) {
    let role = !data ? 'cancel' : 'confirm';
    await this.modal.dismiss(data, role);
  }
}
