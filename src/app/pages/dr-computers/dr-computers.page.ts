import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CHECK_ALL_CONFIG, ROUND_BUTTON_CREATE_CONFIG, ROUND_BUTTON_DELETE_ALL_CONFIG, ROUND_BUTTON_EXCEL_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { CursosListService } from 'src/app/services/cursos-list.service';
import { CursosService } from 'src/app/services/cursos.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { SECTION_TYPES } from 'src/constants/items';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-dr-computers',
  templateUrl: './dr-computers.page.html',
  styleUrls: ['./dr-computers.page.scss'],
})
export class DrComputersPage implements OnInit {

  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  excelButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EXCEL_CONFIG;
  checkAllRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CHECK_ALL_CONFIG;
  deleteAllRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_ALL_CONFIG;

  cursosChecked: Array<string> = [];
  checkedAll: boolean = false;

  userLogged: boolean;
  private userLogged$: Observable<boolean>;
  
  cursosAdultos: Array<ICursoData>;
  private cursos$: Observable<ICursoData[]>;

  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private cursosListSrv: CursosListService,
    private loadingSrv: LoadingService,
    private cursosSrv: CursosService) { }

  ngOnInit() {
    this.checkingUserLogged();
    this.gettingCursos();
    this.editingButtonsConfig();
  }

  editingButtonsConfig(){
    this.excelButtonConfig.extraClass = null;
    this.excelButtonConfig.lowerButton = true;
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }

  gettingCursos(){
    this.cursos$ = this.cursosListSrv.getCursos$();
    this.cursos$.subscribe(cursos => {
      this.cursosAdultos = cursos.filter(c => c.categoria == SECTION_TYPES.ADULTOS);
    });
  }

  async showCreateModal(){
    await this.modalSrv.showCursoModal('Crear nuevo curso', null);
  }

  async showExcelModal(){
    await this.modalSrv.showCursoExcelModal('Importar archivo Excel');
  }

  addToCheckedList(event: any) {
    const index = this.cursosChecked.indexOf(event.cursoId);
    if (event.checked && index < 0) {
      this.cursosChecked.push(event.cursoId);
    } else if (!event.checked && index > -1) {
      this.cursosChecked.splice(index, 1);
    }
  }

  checkAllCursos() {
    if (this.cursosAdultos.length === this.cursosChecked.length) {
      this.checkedAll = false;
    } else {
      this.checkedAll = true;
    }
  }

  async deleteAllCursos() {
    const cantCursos = this.cursosChecked.length;
    if (cantCursos < 1) {
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.MULTIPLE_DELETE, RESULTS_TYPES.NO_ELEMENTS, '');
      return;
    }
    
    let cantCursosMsg = `${cantCursos + ' curso' + (cantCursos > 1 ? 's' : '')}`;
    let response = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, cantCursosMsg);
    if(response.role === 'confirm'){
      this.loadingSrv.showDRLoading();
      this.cursosChecked.forEach(id => {
        this.cursosSrv.eliminar_curso(id);
      })
      setTimeout(() => {
        this.cursosChecked = [];
        this.checkedAll = false;
        this.loadingSrv.dismissLoading();
      }, 1000);
    }
  }

}
