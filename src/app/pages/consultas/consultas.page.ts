import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IInputConfig } from 'src/app/components/ui/input-dr/input-dr.component';
import { ShareService } from 'src/app/services/share.service';
import { NOMBRE_CONFIG } from './input-configs';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  form: FormGroup = null;
  nombreConfig: IInputConfig = NOMBRE_CONFIG;

  constructor(private shareSrv: ShareService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    console.log('onSubmit');
  }

  getErrorMessage(){
    this.shareSrv.getErrorMessage(this.form.get('nombre'));
  }

}
