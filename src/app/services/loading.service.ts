import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingComponent } from '../components/common/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private modalLoading: HTMLIonModalElement;
  
  constructor(private modalCtrl: ModalController) { }

  private async openModal(component: any) {
    this.modalLoading = await this.modalCtrl.create({
      component,
      cssClass: 'loading-modal'
    });

    this.modalLoading.present();

    return this.modalLoading;
    //return await this.modalLoading.onWillDismiss();

  }

  async showDRLoading() {
    return await this.openModal(LoadingComponent);
  }

  async dismissLoading() {
    await this.modalLoading.dismiss();
  }
}
