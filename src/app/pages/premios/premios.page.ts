import { Component, OnInit } from '@angular/core';
import { ROUND_BUTTON_CREATE_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {
  titlePage: string = 'Resultado de los sorteos';
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  async showCreateModal(){
    let algo = await this.modalSrv.showPremioModal('Agregar nuevo sorteo', null);
    console.log('algo');
    console.log(algo);
  }
}
