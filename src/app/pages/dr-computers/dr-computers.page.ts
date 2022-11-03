import { Component, OnInit } from '@angular/core';
import { IPushButtonItem } from 'src/app/components/ui/push-button/push-button.component';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';
import { ROUNDED_BUTTONS_ICONS } from 'src/constants/items';

@Component({
  selector: 'app-dr-computers',
  templateUrl: './dr-computers.page.html',
  styleUrls: ['./dr-computers.page.scss'],
})
export class DrComputersPage implements OnInit {

  roundButtonConfig: IRoundButtonConfig = {
    iconName: ROUNDED_BUTTONS_ICONS.CREATE,
    extraClass: null
  }

  cursosAdultos: Array<IPushButtonItem> = [
    {label: 'Reparacion de PC I', image: 'assets/images/logos/logoDR.png'},
    {label: 'Reparacion de PC II', image: 'assets/images/logos/logoDR.png'},
    {label: 'Windows, Word y Excel', image: 'assets/images/logos/logoDR.png'},
    {label: 'CorelDraw', image: 'assets/images/logos/logoDR.png'},
  ]

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  async showCreateModal(){
    let algo = await this.modalSrv.showCursoModal('Crear nuevo curso', null);
    console.log('algo');
    console.log(algo);
  }

}
