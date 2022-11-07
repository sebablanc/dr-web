import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { NovedadesService } from 'src/app/services/novedades.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-novedad-form-layout',
  templateUrl: './novedad-form-layout.page.html',
  styleUrls: ['./novedad-form-layout.page.scss'],
})
export class NovedadFormLayoutPage implements OnInit {
  @Input() title: string;
  @Input() novedad: any;

  constructor(
    private modalSrv: ModalService,
    private loadingSrv: LoadingService,
    private novedadesSrv: NovedadesService) { }

  ngOnInit() {
  }

  async handleFormData(event: any){
    let result = false;
    this.modalSrv.dismissModal(result);
    if(!event) return;
    try{
      await this.loadingSrv.showDRLoading();
      let success = false;
      let operationType = OPERATION_TYPES.MODIFY;
      if(event.id !== null){
        success = this.novedadesSrv.editar_novedad(event);
      } else {
        const resultCrear = await this.novedadesSrv.crear_novedad(event);
        success = resultCrear && resultCrear.id !== null && resultCrear.id.trim() !== '';
        operationType = OPERATION_TYPES.SAVE;
      }
      let operationResult = success ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR; 
      setTimeout(() => {
        this.loadingSrv.dismissLoading();
        this.modalSrv.showDeleteMessagesModal(operationType, operationResult, event.titulo);
      }, 10);
    } catch(e){
      this.loadingSrv.dismissLoading();
      throw new Error("Error de creacion de novedad");
    }
  }

}
