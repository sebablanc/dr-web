import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-curso-form-page',
  templateUrl: './curso-form.page.html',
  styleUrls: ['./curso-form.page.scss'],
})
export class CursoFormPage implements OnInit {
  @Input() title: string = '';
  @Input() curso: any;
  
  constructor(
    private modalSrv: ModalService,
    private loadingSrv: LoadingService,
    private cursosSrv: CursosService
  ) { }

  ngOnInit() {
  }

  async handleFormData(event: any){
    let result = false;
    this.modalSrv.dismissModal(result);
    if(!event) return;
    try{
      await this.loadingSrv.showDRLoading();
      let resultCrear = await this.cursosSrv.crear_curso(event);
      let operationResult = resultCrear && resultCrear.id !== null && resultCrear.id.trim() !== '' ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR; 

      if(operationResult){
        // TODO: Buscar cursos
      }
      this.loadingSrv.dismissLoading();
      this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.SAVE, operationResult, event.nombre);
    } catch(e){
      this.loadingSrv.dismissLoading();
      throw new Error("Error de creacion de curso");
    }
  }

}
