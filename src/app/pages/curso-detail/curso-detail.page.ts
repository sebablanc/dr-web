import { Component, OnInit } from '@angular/core';
import { ROUND_BUTTON_DELETE_CONFIG, ROUND_BUTTON_EDIT_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {

  editRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_EDIT_CONFIG;
  deleteRoundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_DELETE_CONFIG;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
    this.deleteRoundButtonConfig.lowerButton = true;
  }

  async showEditModal(){
    let algo = await this.modalSrv.showCursoModal('Editar curso', {nombre: 'programacion', categoria: '2', valor: 132, descripcion: 'algo'});
    console.log('edit');
    console.log(algo);
  }

  async deleteCurso() {
    let algo = await this.modalSrv.showWarningModal('', '');
    console.log('delete');
    console.log(algo);
  }
}
