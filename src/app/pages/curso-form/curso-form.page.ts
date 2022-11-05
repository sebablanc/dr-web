import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-curso-form-page',
  templateUrl: './curso-form.page.html',
  styleUrls: ['./curso-form.page.scss'],
})
export class CursoFormPage implements OnInit {
  @Input() title: string = '';
  @Input() curso: any;
  
  constructor(
    private modalSrv: ModalService,
    private loadingSrv: LoadingService
    //private cursosSrv: CursosService
  ) { }

  ngOnInit() {
  }

  async handleFormData(event: any){
    let result = false;
    /*try{
      let resultCrear = await this.cursosSrv.crear_curso(event);
      result = resultCrear && resultCrear.id !== null && resultCrear.id.trim() !== '';
    } catch(e){}*/
    
    this.modalSrv.dismissModal(result);
    this.loadingSrv.showDRLoading();
    /*setTimeout(() => {
      result = true;
      this.loadingSrv.dismissLoading();
    }, 1000);*/
  }

}
