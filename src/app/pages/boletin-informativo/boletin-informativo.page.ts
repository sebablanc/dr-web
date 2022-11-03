import { Component, OnInit } from '@angular/core';
import { ROUND_BUTTON_CREATE_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  novedadesList: Array<number> = [1, 1, 1, 1];
  
  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  async showCreateModal(){
    let algo = await this.modalSrv.showNovedadModal('Agregar Novedad', null);
    console.log('algo');
    console.log(algo);
  }

}
