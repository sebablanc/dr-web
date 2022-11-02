import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IInputConfig } from 'src/app/components/ui/input-dr/input-dr.component';
import { BUTTON_ASK_CONFIG } from 'src/app/components/ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from 'src/app/components/ui/rounded-button/rounded-button.component';
import { ShareService } from 'src/app/services/share.service';
import { APELLIDO_CONFIG, NOMBRE_CONFIG, TELEFONO_CONFIG, EMAIL_CONFIG, CONSULTA_CONFIG } from '../../components/ui/input-dr/input-configs';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  consultaForm: FormGroup = null;
  nombreConfig: IInputConfig = NOMBRE_CONFIG;
  apellidoConfig: IInputConfig = APELLIDO_CONFIG;
  telefonoConfig: IInputConfig = TELEFONO_CONFIG;
  emailConfig: IInputConfig = EMAIL_CONFIG;
  consultaConfig: IInputConfig = CONSULTA_CONFIG;
  buttonConsultaConfig: IRoundedButtonConfig = BUTTON_ASK_CONFIG;

  constructor(private shareSrv: ShareService, private fb: FormBuilder) { }

  ngOnInit() {
    this.consultaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      consulta: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log('onSubmit');
  }

  getErrorMessage(){
    this.shareSrv.getErrorMessage(this.consultaForm.get('nombre'));
  }

}
