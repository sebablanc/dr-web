import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CREATE_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { CursosListService } from 'src/app/services/cursos-list.service';
import { ModalService } from 'src/app/services/modal.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-dr-computers',
  templateUrl: './dr-computers.page.html',
  styleUrls: ['./dr-computers.page.scss'],
})
export class DrComputersPage implements OnInit {

  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  userLogged: boolean;
  private userLogged$: Observable<boolean>;

  cursosAdultos: Array<ICursoData>;
  private cursos$: Observable<ICursoData[]>;

  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private cursosListSrv: CursosListService) { }

  ngOnInit() {
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
    this.cursos$ = this.cursosListSrv.getCursos$();
    this.cursos$.subscribe(cursos => {
      this.cursosAdultos = cursos.filter(c => c.categoria == SECTION_TYPES.ADULTOS);
    });
  }

  async showCreateModal(){
    await this.modalSrv.showCursoModal('Crear nuevo curso', null);
  }

}
