import { Component, Input, OnInit } from '@angular/core';
import { OPERATION_TYPES, RESULTS_TYPES } from 'src/app/pages/delete-messages/delete-messages.page';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-premio-card',
  templateUrl: './premio-card.component.html',
  styleUrls: ['./premio-card.component.scss'],
})
export class PremioCardComponent implements OnInit {
  @Input() showPC: boolean = false;
  @Input() showBotonera: boolean = false;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() { }

  async openEditModal() {
    console.log('openEditModal')
    let algo = await this.modalSrv.showPremioModal('Editar novedad', {
      fechaSorteo: '2022-11-03',
      numeroCupon: '1',
      nombreFavorecido: 'El ganador',
      nombreRetiro: 'Alguien que retiro',
      horarioExtraccion: '21.45',
      tipoSorteo: '1'
    });
    console.log('edit');
    console.log(algo);
  }

  async openDeleteModal() {
    let algo = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, 'Premio');
    console.log('delete');
    console.log(algo);
  }

}
