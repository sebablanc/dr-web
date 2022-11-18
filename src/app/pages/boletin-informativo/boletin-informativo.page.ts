import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CHECK_ALL_CONFIG, ROUND_BUTTON_CREATE_CONFIG, ROUND_BUTTON_DELETE_ALL_CONFIG, ROUND_BUTTON_EXCEL_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { INovedadData } from 'src/app/interfaces/novedadData';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { NovedadesListService } from 'src/app/services/novedades-list.service';
import { NovedadesService } from 'src/app/services/novedades.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  excelButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EXCEL_CONFIG;
  checkAllRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CHECK_ALL_CONFIG;
  deleteAllRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_ALL_CONFIG;
  novedadesChecked: Array<string> = [];
  userLogged: boolean;
  private userLogged$: Observable<boolean>;
  novedadesList: Array<INovedadData>;
  private novedades$: Observable<INovedadData[]>;
  
  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private novedadesListSrv: NovedadesListService,
    private loadingSrv: LoadingService,
    private novedadesSrv: NovedadesService) { }

  ngOnInit() {
    this.checkingUserLogged();
    this.gettingNovedades();
    this.editingButtonsConfig();
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }

  gettingNovedades(){
    this.novedades$ = this.novedadesListSrv.getNovedades$();
    this.novedades$.subscribe(novedades => this.novedadesList = novedades);
  }

  editingButtonsConfig(){
    this.excelButtonConfig.extraClass = null;
    this.excelButtonConfig.lowerButton = true;
  }

  async showCreateModal(){
    await this.modalSrv.showNovedadModal('Agregar nueva novedad', null);
  }

  async showExcelModal(){
    await this.modalSrv.showNovedadesExcelModal('Importar archivo Excel');
  }

  addToCheckedList(event: any) {
    const index = this.novedadesChecked.indexOf(event.novedadId);
    if (event.checked && index < 0) {
      this.novedadesChecked.push(event.novedadId);
    } else if (!event.checked && index > -1) {
      this.novedadesChecked.splice(index, 1);
    }
  }

  checkAllNovedades() {
    const checkedLength = this.novedadesChecked.length;
    this.novedadesChecked = [];
    if(checkedLength < this.novedadesList.length){
      this.novedadesList.forEach(novedad => {
        this.novedadesChecked.push(novedad.id);
      })
    }
  }

  async deleteAllNovedades() {
    const cantNovedades = this.novedadesChecked.length;
    if (cantNovedades < 1) {
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.MULTIPLE_DELETE, RESULTS_TYPES.NO_ELEMENTS, '');
      return;
    }
    
    let cantNovedadesMsg = `${cantNovedades + ' novedad' + (cantNovedades > 1 ? 'es' : '')}`;
    let response = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, cantNovedadesMsg);
    if(response.role === 'confirm'){
      this.loadingSrv.showDRLoading();
      this.novedadesChecked.forEach(id => {
        this.novedadesSrv.eliminar_novedad(id);
      })
      setTimeout(() => {
        this.novedadesChecked = [];
        this.loadingSrv.dismissLoading();
      }, 1000);
    }
  }
}
