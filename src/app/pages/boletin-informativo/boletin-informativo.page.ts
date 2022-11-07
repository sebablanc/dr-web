import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUND_BUTTON_CREATE_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { INovedadData } from 'src/app/interfaces/novedadData';
import { ModalService } from 'src/app/services/modal.service';
import { NovedadesListService } from 'src/app/services/novedades-list.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  userLogged: boolean;
  private userLogged$: Observable<boolean>;
  novedadesList: Array<INovedadData>;
  private novedades$: Observable<INovedadData[]>;
  
  constructor(
    private modalSrv: ModalService,
    private userLoggedSrv: UserLoggedService,
    private novedadesListSrv: NovedadesListService) { }

  ngOnInit() {
    this.checkingUserLogged();
    this.gettingNovedades();
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }

  gettingNovedades(){
    this.novedades$ = this.novedadesListSrv.getNovedades$();
    this.novedades$.subscribe(novedades => this.novedadesList = novedades);
  }

  async showCreateModal(){
    await this.modalSrv.showNovedadModal('Agregar nueva novedad', null);
  }

}
