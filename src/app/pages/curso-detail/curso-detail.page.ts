import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_DELETE_CONFIG, ROUND_BUTTON_EDIT_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { CursosService } from 'src/app/services/cursos.service';
import { ModalService } from 'src/app/services/modal.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { SECTION_TYPES } from 'src/constants/items';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {

  editRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EDIT_CONFIG;
  deleteRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_CONFIG;
  sectionsTypes = SECTION_TYPES;
  curso: ICursoData = null;
  userLogged: boolean;
  private userLogged$: Observable<boolean>;

  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private cursosSrv: CursosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.editingButtonsConfig();
    this.checkingUserLogged();
    this.findCurso();
  }
  
  findCurso(){
    const cursoId = this.route.snapshot.paramMap.get('id');
    this.curso = this.cursosSrv.obtener_curso_id(cursoId);
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
    let deleteCurso = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, 'Reparación de PC I');
    if(deleteCurso.role === 'confirm'){
      //TODO: BORRAR CURSO
      this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.SUCCESS, 'Reparación de PC I')
    }
  }
}
