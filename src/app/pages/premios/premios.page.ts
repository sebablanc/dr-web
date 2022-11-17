import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CHECK_ALL_CONFIG, ROUND_BUTTON_CREATE_CONFIG, ROUND_BUTTON_DELETE_ALL_CONFIG, ROUND_BUTTON_EXCEL_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { YEAR_CONFIG } from 'src/app/components/ui/select-dr/select-configs';
import { ISelectConfig } from 'src/app/components/ui/select-dr/select-dr.component';
import { IPremioData } from 'src/app/interfaces/premioData';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { PremiosListService } from 'src/app/services/premios-list.service';
import { PremiosService } from 'src/app/services/premios.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { SORTEOS_TYPE } from 'src/constants/items';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {
  titlePage: string = 'Resultado de los sorteos';

  premiosForm: FormGroup = null;
  yearConfig: ISelectConfig = YEAR_CONFIG;
  years = [{ value: '', label: '-- Seleccione un año --' }];
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  excelButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EXCEL_CONFIG;
  checkAllRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CHECK_ALL_CONFIG;
  deleteAllRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_ALL_CONFIG;

  userLogged: boolean;
  private userLogged$: Observable<boolean>;

  premiosCuotas: Array<IPremioData>;
  premioComputadora: IPremioData;
  premiosConsuelo: Array<IPremioData>;
  premiosChecked: Array<string> = [];
  checkedAll: boolean = false;
  private premios$: Observable<IPremioData[]>;

  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private fb: FormBuilder,
    private premiosListSrv: PremiosListService,
    private premiosSrv: PremiosService,
    private loadingSrv: LoadingService) { }

  ngOnInit() {
    this.editingButtonsConfig();
    this.createForm();
    this.checkingUserLogged();
    this.premiosChecked = [];
  }

  editingButtonsConfig() {
    this.excelButtonConfig.extraClass = null;
    this.excelButtonConfig.lowerButton = true;
  }

  checkingUserLogged() {
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
    this.gettingPremios();
  }

  createForm() {
    const year = new Date().getFullYear()
    this.premiosForm = this.fb.group({ year: year });
    for (let index = year; index > 1996; index--) {
      this.years.push({ value: index.toString(), label: index.toString() });
    }

    this.premiosForm.valueChanges.subscribe(() => {
      this.searchPremios(parseInt(this.premiosForm.value.year));
    })
  }

  gettingPremios() {
    this.premios$ = this.premiosListSrv.getPremios$();
    this.premios$.subscribe(premios => {
      this.premiosCuotas = premios.filter(p => p.tipoSorteo == SORTEOS_TYPE.CUOTA);
      this.premioComputadora = premios.find(p => p.tipoSorteo == SORTEOS_TYPE.COMPUTADORA);
      this.premiosConsuelo = premios.filter(p => p.tipoSorteo == SORTEOS_TYPE.CONSUELO);
    });
  }

  searchPremios(year: number) {
    this.premiosSrv.obtener_premios(year);
  }

  addToCheckedList(event: any) {
    const index = this.premiosChecked.indexOf(event.premioId);
    if (event.checked && index < 0) {
      this.premiosChecked.push(event.premioId);
    } else if (!event.checked && index > -1) {
      this.premiosChecked.splice(index, 1);
    }
  }

  checkAllPremios() {
    let premioComputadoraLength = this.premioComputadora !== null ? 1 : 0;
    let cantidadTotal = premioComputadoraLength + this.premiosCuotas.length + this.premiosConsuelo.length;
    if (cantidadTotal === this.premiosChecked.length) {
      this.checkedAll = false;
    } else {
      this.checkedAll = true;
    }
  }

  async showCreateModal() {
    await this.modalSrv.showPremioModal('Agregar nuevo sorteo', null);
  }

  async showExcelModal() {
    await this.modalSrv.showPremioExcelModal('Importar archivo Excel');
  }

  async deleteAllPremios() {
    const cantPremios = this.premiosChecked.length;
    if (cantPremios < 1) {
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.MULTIPLE_DELETE, RESULTS_TYPES.NO_ELEMENTS, '');
      return;
    }
    
    let cantPremiosMsg = `${cantPremios + ' premio' + (cantPremios > 1 ? 's' : '')}`;
    let response = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, cantPremiosMsg);
    if(response.role === 'confirm'){
      this.loadingSrv.showDRLoading();
      this.premiosChecked.forEach(id => {
        this.premiosSrv.eliminar_premio(id);
      })
      setTimeout(() => {
        this.premiosChecked = [];
        this.checkedAll = false;
        this.loadingSrv.dismissLoading();
      }, 1000);
    }
  }
}
