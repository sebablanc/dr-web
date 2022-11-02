import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CursoFormPage } from '../pages/curso-form/curso-form.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  private async openModal(component: any, componentProps: any) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps
    });

    modal.present();

    return await modal.onWillDismiss();
  }

  async showCursoModal(title: string) {
    return await this.openModal(CursoFormPage, { title });
  }
}
