import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-novedad-form-layout',
  templateUrl: './novedad-form-layout.page.html',
  styleUrls: ['./novedad-form-layout.page.scss'],
})
export class NovedadFormLayoutPage implements OnInit {
  @Input() title: string;
  @Input() novedad: any;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  handleFormData(event: any){
    this.modalSrv.dismissModal(event);
  }

}
