import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_DELETE_CONFIG, ROUND_BUTTON_EDIT_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { BUTTON_BACK_CONFIG } from 'src/app/components/ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from 'src/app/components/ui/rounded-button/rounded-button.component';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { CursosListService } from 'src/app/services/cursos-list.service';
import { CursosService } from 'src/app/services/cursos.service';
import { ModalService } from 'src/app/services/modal.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { LOGOS_URLS, SECTION_TYPES } from 'src/constants/items';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {

  editRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EDIT_CONFIG;
  deleteRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_BACK_CONFIG;
  sectionsTypes = SECTION_TYPES;
  logosUrls = LOGOS_URLS;
  curso: ICursoData = null;
  userLogged: boolean;
  private userLogged$: Observable<boolean>;
  private cursos$: Observable<ICursoData[]>;

  constructor(
    private modalSrv: ModalService,
    private cursosListSrv: CursosListService,
    private cursoSrv: CursosService,
    private userLoggedSrv: UserLoggedService,
    private route: ActivatedRoute,
    private navigationSrv: NavigationService) { }

  ngOnInit() {
    this.editingButtonsConfig();
    this.checkingUserLogged();
  }
  
  ngAfterViewInit(){
    this.gettingCurso();
  }

  gettingCurso(){
    const cursoId = this.route.snapshot.paramMap.get('id');
    this.cursos$ = this.cursosListSrv.getCursos$();
    this.cursos$.subscribe(cursos => {
      this.curso = cursos.find(c => c.id == cursoId);
      if(!this.curso) this.goBack();
    });
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }
  
  editingButtonsConfig(){
    this.editRoundButtonConfig.extraClass = null;
    this.deleteRoundButtonConfig.extraClass = null;
    this.deleteRoundButtonConfig.lowerButton = true;
  }

  async showEditModal(){
    await this.modalSrv.showCursoModal('Editar curso', this.curso);
  }

  async deleteCurso() {
    let deleteCurso = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, this.curso.nombre);
    if(deleteCurso.role === 'confirm'){
      const result = this.cursoSrv.eliminar_curso(this.curso.id);
      const resultType = result ? RESULTS_TYPES.SUCCESS : RESULTS_TYPES.ERROR;
      await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, resultType, this.curso.nombre);
    }
  }

  goBack(){
    this.navigationSrv.goBack();
  }
}
