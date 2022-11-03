import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-novedad-card',
  templateUrl: './novedad-card.component.html',
  styleUrls: ['./novedad-card.component.scss'],
})
export class NovedadCardComponent implements OnInit {

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {}

  async openEditModal(){
    console.log('openEditModal')
    let algo = await this.modalSrv.showNovedadModal('Editar novedad', {titulo: 'Nueva novedad', mensaje: 'Esta es la nueva novedad'});
    console.log('edit');
    console.log(algo);
  }

  async openDeleteModal() {
    let algo = await this.modalSrv.showWarningModal('', 'Título Novedad');
    console.log('delete');
    console.log(algo);
  }

}
