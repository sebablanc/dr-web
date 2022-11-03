import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-curso-form-page',
  templateUrl: './curso-form.page.html',
  styleUrls: ['./curso-form.page.scss'],
})
export class CursoFormPage implements OnInit {
  @Input() title: string = '';
  @Input() curso: any;
  
  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  handleFormData(event: any){
    this.modalSrv.dismissModal(event);
  }

}
