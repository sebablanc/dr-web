import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { INovedadData } from 'src/app/interfaces/novedadData';
import { OPERATION_TYPES, RESULTS_TYPES } from 'src/app/pages/delete-messages/delete-messages.page';
import { ModalService } from 'src/app/services/modal.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { NovedadesService } from 'src/app/services/novedades.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-novedad-card',
  templateUrl: './novedad-card.component.html',
  styleUrls: ['./novedad-card.component.scss'],
})
export class NovedadCardComponent implements OnInit {
  @Input() showBotonera: boolean = false;
  @Input() novedad: INovedadData;
  @Input() isChecked: boolean = false;
  @Output() novedadChecked: EventEmitter<{checked: boolean, novedadId: string}> = new EventEmitter();
  userLogged: boolean;
  private userLogged$: Observable<boolean>;

  constructor(
    private modalSrv: ModalService,
    private navigationSrv: NavigationService,
    private novedadSrv: NovedadesService,
    private userLoggedSrv: UserLoggedService) { }

  ngOnInit() {
    this.checkingUserLogged();
  }

  checkingUserLogged() {
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }

  async openEditModal() {
    await this.modalSrv.showNovedadModal('Editar novedad', this.novedad);
  }

  async openDeleteModal() {
    let deleteNovedad = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, this.novedad.titulo);
    if (deleteNovedad.role === 'confirm') {
      const result = this.novedadSrv.eliminar_novedad(this.novedad.id);
      const resultType = result ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR;
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, resultType, this.novedad.titulo);
    }
  }

  goTo(link: string) {
    this.navigationSrv.goToExternal(link);
  }

  itemChecked(event: CheckboxCustomEvent){
    this.isChecked = event.detail.checked;
    this.novedadChecked.emit({checked: this.isChecked, novedadId: this.novedad.id});
  }

}
