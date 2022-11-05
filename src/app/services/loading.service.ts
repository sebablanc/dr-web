import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingComponent } from '../components/common/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private modal: HTMLIonModalElement;
  
  constructor(private modalCtrl: ModalController) { }

  private async openModal(component: any) {
    this.modal = await this.modalCtrl.create({
      component,
      cssClass: 'loading-modal'
    });

    this.modal.present();

    return await this.modal.onWillDismiss();
  }

  async showDRLoading() {
    return await this.openModal(LoadingComponent);
  }

  async dismissLoading() {
    this.modal.dismiss();
  }
}
