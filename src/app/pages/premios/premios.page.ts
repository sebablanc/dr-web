import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CREATE_CONFIG, ROUND_BUTTON_EXCEL_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { YEAR_CONFIG } from 'src/app/components/ui/select-dr/select-configs';
import { ISelectConfig } from 'src/app/components/ui/select-dr/select-dr.component';
import { IPremioData } from 'src/app/interfaces/premioData';
import { ModalService } from 'src/app/services/modal.service';
import { PremiosListService } from 'src/app/services/premios-list.service';
import { PremiosService } from 'src/app/services/premios.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { SORTEOS_TYPE } from 'src/constants/items';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {
  titlePage: string = 'Resultado de los sorteos';
  
  premiosForm: FormGroup = null;
  yearConfig: ISelectConfig = YEAR_CONFIG;
  years = [{value: '', label: '-- Seleccione un año --'}];
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  excelButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EXCEL_CONFIG;

  userLogged: boolean;
  private userLogged$: Observable<boolean>;
  
  premiosCuotas: Array<IPremioData>;
  premioComputadora: IPremioData;
  private premios$: Observable<IPremioData[]>;

  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private fb: FormBuilder,
    private premiosListSrv: PremiosListService,
    private premiosSrv: PremiosService) { }

  ngOnInit() {
    this.editingButtonsConfig();
    this.createForm();
    this.checkingUserLogged();
  }

  editingButtonsConfig(){
    this.excelButtonConfig.extraClass = null;
    this.excelButtonConfig.lowerButton = true;
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
    this.gettingPremios();
  }
  
  createForm(){
    const year = new Date().getFullYear()
    this.premiosForm = this.fb.group({year: year});
    for (let index = year; index > 1996; index--) {
      this.years.push({value: index.toString(), label: index.toString()});
    }

    this.premiosForm.valueChanges.subscribe(() =>{
      this.searchPremios(parseInt(this.premiosForm.value.year));
    })
  }

  gettingPremios(){
    this.premios$ = this.premiosListSrv.getPremios$();
    this.premios$.subscribe(premios => {
      this.premiosCuotas = premios.filter(p => p.tipoSorteo == SORTEOS_TYPE.CUOTA);
      this.premioComputadora = premios.find(p => p.tipoSorteo == SORTEOS_TYPE.COMPUTADORA);
    });
  }

  searchPremios(year: number){
    this.premiosSrv.obtener_premios(year);
  }

  async showCreateModal(){
    await this.modalSrv.showPremioModal('Agregar nuevo sorteo', null);
  }

  async showExcelModal(){
    await this.modalSrv.showExcelModal('Importar archivo Excel');
  }
}
