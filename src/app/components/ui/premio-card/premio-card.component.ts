import { Component, Input, OnInit } from '@angular/core';
import { IPremioData } from 'src/app/interfaces/premioData';
import { OPERATION_TYPES, RESULTS_TYPES } from 'src/app/pages/delete-messages/delete-messages.page';
import { ModalService } from 'src/app/services/modal.service';
import { PremiosService } from 'src/app/services/premios.service';

@Component({
  selector: 'app-premio-card',
  templateUrl: './premio-card.component.html',
  styleUrls: ['./premio-card.component.scss'],
})
export class PremioCardComponent implements OnInit {
  @Input() showPC: boolean = false;
  @Input() showBotonera: boolean = false;
  @Input() premio: IPremioData;

  constructor(
    private modalSrv: ModalService,
    private premioSrv: PremiosService) { }

  ngOnInit() { }

  async openEditModal() {
    await this.modalSrv.showPremioModal('Editar sorteo', this.premio);
  }

  async openDeleteModal() {
    let title = 'Premio ' + this.premio.tipoSorteo + ' que corresponde a ' + this.premio.mes + ' de ' + this.premio.year;
    let deletePremio = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, title);
    if (deletePremio.role === 'confirm') {
      const result = this.premioSrv.eliminar_premio(this.premio.id)
      const resultType = result ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR;
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, resultType, title);
    }
  }

}
