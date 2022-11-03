import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-premio-form-layout',
  templateUrl: './premio-form-layout.page.html',
  styleUrls: ['./premio-form-layout.page.scss'],
})
export class PremioFormLayoutPage implements OnInit {
  @Input() title: string = '';
  @Input() premio: any;

  constructor(private modalSrv: ModalService) { }

  ngOnInit() {
  }

  handleFormData(event: any){
    this.modalSrv.dismissModal(event);
  }
}
