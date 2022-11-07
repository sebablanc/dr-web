import { Component, Input, OnInit } from '@angular/core';
import { INovedadData } from 'src/app/interfaces/novedadData';
import { OPERATION_TYPES, RESULTS_TYPES } from 'src/app/pages/delete-messages/delete-messages.page';
import { ModalService } from 'src/app/services/modal.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { NovedadesService } from 'src/app/services/novedades.service';

@Component({
  selector: 'app-novedad-card',
  templateUrl: './novedad-card.component.html',
  styleUrls: ['./novedad-card.component.scss'],
})
export class NovedadCardComponent implements OnInit {
  @Input() showBotonera: boolean = false;
  @Input() novedad: INovedadData;
  
  constructor(
    private modalSrv: ModalService,
    private navigationSrv: NavigationService,
    private novedadSrv: NovedadesService) { }

  ngOnInit() {}

  async openEditModal(){
    await this.modalSrv.showNovedadModal('Editar novedad', this.novedad);
  }

  async openDeleteModal() {
    let deleteNovedad = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, this.novedad.titulo);
    if(deleteNovedad.role === 'confirm'){
      const result = this.novedadSrv.eliminar_novedad(this.novedad.id);
      const resultType = result ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR;
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, resultType, this.novedad.titulo);
    }
  }

  goTo(link: string){
    this.navigationSrv.goToExternal(link);
  }

}
