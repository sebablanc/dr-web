import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ROUND_BUTTON_DELETE_CONFIG, ROUND_BUTTON_EDIT_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {

  editRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EDIT_CONFIG;
  deleteRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_CONFIG;
  subscriber: Subscription;
  userLogged: boolean;

  constructor(private modalSrv: ModalService, private userLoggedSrv: UserLoggedService) { }

  ngOnInit() {
    this.editRoundButtonConfig.extraClass = null;
    this.deleteRoundButtonConfig.extraClass = null;
    this.deleteRoundButtonConfig.lowerButton = true;
    this.subscriber = this.userLoggedSrv.isUserLogged$().subscribe((value: boolean)=>{
      this.userLogged = value;
    });
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  async showEditModal(){
    let algo = await this.modalSrv.showCursoModal('Editar curso', {nombre: 'Reparación de PC I', categoria: '2', valor: 132, descripcion: 'algo'});
    console.log('edit');
    console.log(algo);
  }

  async deleteCurso() {
    let deleteCurso = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.WARNING, 'Reparación de PC I');
    if(deleteCurso.role === 'confirm'){
      //TODO: BORRAR CURSO
      this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.DELETE, RESULTS_TYPES.SUCCESS, 'Reparación de PC I')
    }
  }
}
