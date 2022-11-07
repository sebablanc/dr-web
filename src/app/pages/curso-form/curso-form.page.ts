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
      let success = false;
      if(event.id !== null){
        success = this.cursosSrv.editar_curso(event);
      } else {
        const resultCrear = await this.cursosSrv.crear_curso(event);
        success = resultCrear && resultCrear.id !== null && resultCrear.id.trim() !== '';
      }
      let operationResult = success ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR; 
      setTimeout(() => {
        this.loadingSrv.dismissLoading();
        this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.SAVE, operationResult, event.nombre);
      }, 10);
    } catch(e){
      this.loadingSrv.dismissLoading();
      throw new Error("Error de creacion de curso");
    }
  }

}
