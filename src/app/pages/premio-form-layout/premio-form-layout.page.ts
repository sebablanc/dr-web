import { Component, Input, OnInit } from '@angular/core';
import { IPremioData } from 'src/app/interfaces/premioData';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { PremiosService } from 'src/app/services/premios.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-premio-form-layout',
  templateUrl: './premio-form-layout.page.html',
  styleUrls: ['./premio-form-layout.page.scss'],
})
export class PremioFormLayoutPage implements OnInit {
  @Input() title: string = '';
  @Input() premio: any;

  constructor(
    private modalSrv: ModalService,
    private loadingSrv: LoadingService,
    private permioSrv: PremiosService) { }

  ngOnInit() {
  }

  async handleFormData(event: IPremioData){
    this.modalSrv.dismissModal(false);
    if(!event) return;
    try{
      await this.loadingSrv.showDRLoading();
      let success = false;
      let operationType = OPERATION_TYPES.MODIFY;
      if(event.id !== null){
        success = this.permioSrv.editar_premio(event);
      } else {
        const resultCrear = await this.permioSrv.crear_premio(event);
        success = resultCrear && resultCrear.id !== null && resultCrear.id.trim() !== '';
        operationType = OPERATION_TYPES.SAVE;
      }
      let operationResult = success ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR; 
      setTimeout(() => {
        this.loadingSrv.dismissLoading();
        this.modalSrv.showDeleteMessagesModal(operationType, operationResult, event.mes + ' de ' + event.year);
      }, 10);
    } catch(e){
      this.loadingSrv.dismissLoading();
      throw new Error("Error de creacion de curso");
    }
  }
}
