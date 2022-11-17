import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { IPremioData } from 'src/app/interfaces/premioData';
import { OPERATION_TYPES, RESULTS_TYPES } from 'src/app/pages/delete-messages/delete-messages.page';
import { MesesPipe } from 'src/app/pipes/meses.pipe';
import { ModalService } from 'src/app/services/modal.service';
import { PremiosService } from 'src/app/services/premios.service';
import { SORTEOS_TYPE } from 'src/constants/items';

@Component({
  selector: 'app-premio-card',
  templateUrl: './premio-card.component.html',
  styleUrls: ['./premio-card.component.scss'],
})
export class PremioCardComponent implements OnInit {
  @Input() showPC: boolean = false;
  @Input() showBotonera: boolean = false;
  @Input() isChecked: boolean = false;
  @Input() premio: IPremioData;
  @Output() premioChecked: EventEmitter<{checked: boolean, premioId: string}> = new EventEmitter();
  tiposSorteo = SORTEOS_TYPE;

  constructor(
    private modalSrv: ModalService,
    private premioSrv: PremiosService,
    private mesesPipe: MesesPipe) { }

  ngOnInit() { }

  async openEditModal() {
    await this.modalSrv.showPremioModal('Editar sorteo', this.premio);
  }

  async openDeleteModal() {
    let title = 'Premio ' + this.premio.tipoSorteo + ' que corresponde a ' + this.mesesPipe.transform(this.premio.mes) + ' de ' + this.premio.year;
    let deletePremio = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, title);
    if (deletePremio.role === 'confirm') {
      const result = this.premioSrv.eliminar_premio(this.premio.id)
      const resultType = result ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR;
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, resultType, title);
    }
  }

  itemChecked(event: CheckboxCustomEvent){
    this.isChecked = event.detail.checked;
    this.premioChecked.emit({checked: this.isChecked, premioId: this.premio.id});
  }

}
