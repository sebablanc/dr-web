import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CursoFormPage } from '../pages/curso-form/curso-form.page';
import { WarningPage } from '../pages/warning/warning.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: HTMLIonModalElement;

  constructor(private modalCtrl: ModalController) { }

  private async openModal(component: any, componentProps: any, cssClass?: Array<string>|string) {
    this.modal = await this.modalCtrl.create({
      component,
      componentProps,
      cssClass
    });

    this.modal.present();

    return await this.modal.onWillDismiss();
  }

  async showCursoModal(title: string, curso: any) {
    return await this.openModal(CursoFormPage, { title, curso }, 'curso-form-modal');
  }

  async showWarningModal(title: string, curso: any) {
    return await this.openModal(WarningPage, { title, curso }, 'warning-modal');
  }

  async dismissModal(data: any){
    let role = !data ? 'cancel' : 'confirm';
    this.modal.dismiss(data, role);
  }
}
