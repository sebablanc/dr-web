import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CursoFormComponent } from '../components/forms/curso-form/curso-form.component';
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
    //return await this.openModal(CursoFormComponent, { title });
  }
}
