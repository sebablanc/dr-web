import { Component, OnInit } from '@angular/core';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';
import { ROUNDED_BUTTONS_ICONS } from 'src/constants/items';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {
  editRoundButtonConfig: IRoundButtonConfig = {
    iconName: ROUNDED_BUTTONS_ICONS.EDIT,
    extraClass: null
  }
  deleteRoundButtonConfig: IRoundButtonConfig = {
    iconName: ROUNDED_BUTTONS_ICONS.DELETE ,
    extraClass: 'second-button'
  }
  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  async showEditModal(){
    let algo = await this.modalSrv.showCursoModal('Editar curso', {nombre: 'programacion', categoria: '2', valor: 132, descripcion: 'algo'});
    console.log('algo');
    console.log(algo);
  }

  async deleteCurso() {
    let algo = await this.modalSrv.showWarningModal('', '');
  }
}
