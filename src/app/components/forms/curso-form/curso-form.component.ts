import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DESCRIPCION_CONFIG, NOMBRE_CONFIG, VALOR_CONFIG } from 'src/app/components/ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_CANCEL_CONFIG, BUTTON_SAVE_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';
import { CATEGORIA_CONFIG } from '../../ui/select-dr/select-configs';
import { ISelectConfig } from '../../ui/select-dr/select-dr.component';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent implements OnInit {
  cursoForm: FormGroup = null;
  nombreConfig: IInputConfig = NOMBRE_CONFIG;
  valorConfig: IInputConfig = VALOR_CONFIG;
  descripcionConfig: IInputConfig = DESCRIPCION_CONFIG;
  categoriaConfig: ISelectConfig = CATEGORIA_CONFIG;
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cursoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', Validators.required]
    })
  }

}
