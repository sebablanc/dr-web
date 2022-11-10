import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CREATE_CONFIG, ROUND_BUTTON_EXCEL_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { CursosListService } from 'src/app/services/cursos-list.service';
import { ModalService } from 'src/app/services/modal.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-dr-kids',
  templateUrl: './dr-kids.page.html',
  styleUrls: ['./dr-kids.page.scss'],
})
export class DrKidsPage implements OnInit {

  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  excelButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EXCEL_CONFIG;
  userLogged: boolean = false;
  private userLogged$: Observable<boolean>;

  cursosKids: Array<ICursoData>;
  private cursos$: Observable<ICursoData[]>;

  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private cursosListSrv: CursosListService) { }

  ngOnInit() {
    this.checkingUserLogged();
    this.gettingCursos();
    this.editingButtonsConfig();
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }

  gettingCursos(){
    this.cursos$ = this.cursosListSrv.getCursos$();
    this.cursos$.subscribe(cursos => {
      this.cursosKids = cursos.filter(c => c.categoria == SECTION_TYPES.KIDS);
    });
  }

  editingButtonsConfig(){
    this.excelButtonConfig.extraClass = null;
    this.excelButtonConfig.lowerButton = true;
  }

  async showCreateModal(){
    await this.modalSrv.showCursoModal('Crear nuevo curso', null);
  }

  async showExcelModal(){
    await this.modalSrv.showCursoExcelModal('Importar archivo Excel');
  }

}
