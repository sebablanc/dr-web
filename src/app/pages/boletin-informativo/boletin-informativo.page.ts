import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ROUND_BUTTON_CREATE_CONFIG } from 'src/app/components/ui/round-button/round-button-configs';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ModalService } from 'src/app/services/modal.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {
  roundButtonConfig: IRoundButtonConfig = ROUND_BUTTON_CREATE_CONFIG;
  subscriber: Subscription;
  userLogged: boolean;
  novedadesList: Array<number> = [1, 1, 1, 1];
  
  constructor(private modalSrv: ModalService, private userLoggedSrv: UserLoggedService) { }

  ngOnInit() {
    this.subscriber = this.userLoggedSrv.isUserLogged$().subscribe((value: boolean)=>{
      this.userLogged = value;
    });
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  async showCreateModal(){
    let algo = await this.modalSrv.showNovedadModal('Agregar Novedad', null);
    console.log('algo');
    console.log(algo);
  }

}
