import { Component, Input, OnInit } from '@angular/core';
import { OPERATION_TYPES, RESULTS_TYPES } from 'src/app/pages/delete-messages/delete-messages.page';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-novedad-card',
  templateUrl: './novedad-card.component.html',
  styleUrls: ['./novedad-card.component.scss'],
})
export class NovedadCardComponent implements OnInit {
  @Input() showBotonera: boolean = false;
  constructor(private modalSrv: ModalService) { }

  ngOnInit() {}

  async openEditModal(){
    console.log('openEditModal')
    let algo = await this.modalSrv.showNovedadModal('Editar novedad', {titulo: 'Nueva novedad', mensaje: 'Esta es la nueva novedad'});
    console.log('edit');
    console.log(algo);
  }

  async openDeleteModal() {
    let algo = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, 'Título Novedad');
    console.log('delete');
    console.log(algo);
  }

}
