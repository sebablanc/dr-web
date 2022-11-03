import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FECHA_SORTEO_CONFIG, HORARIO_EXTRACCION_CONFIG, NOMBRE_FAVORECIDO_CONFIG, NOMBRE_RETIRO_CONFIG, NUMERO_CUPON_CONFIG } from '../../ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_SAVE_CONFIG, BUTTON_CANCEL_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';
import { TIPO_SORTEO_CONFIG } from '../../ui/select-dr/select-configs';
import { ISelectConfig } from '../../ui/select-dr/select-dr.component';

@Component({
  selector: 'app-premio-form',
  templateUrl: './premio-form.component.html',
  styleUrls: ['./premio-form.component.scss'],
})
export class PremioFormComponent implements OnInit {
  @Input() premio: any;
  @Output() emitData: EventEmitter<any> = new EventEmitter();

  premioForm: FormGroup = null;
  fechaSorteoConfig: IInputConfig = FECHA_SORTEO_CONFIG;
  numeroCuponConfig: IInputConfig = NUMERO_CUPON_CONFIG;
  nombreFavorecidoConfig: IInputConfig = NOMBRE_FAVORECIDO_CONFIG;
  nombreRetiroConfig: IInputConfig = NOMBRE_RETIRO_CONFIG;
  horarioExtraccionConfig: IInputConfig = HORARIO_EXTRACCION_CONFIG;
  tipoSorteoConfig: ISelectConfig = TIPO_SORTEO_CONFIG;
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.premioForm = this.fb.group({
      fechaSorteo: [this.premio && this.premio.titulo ? this.premio.titulo : '', Validators.required],
      numeroCupon: [this.premio && this.premio.numeroCupon ? this.premio.numeroCupon : '', Validators.required],
      nombreFavorecido: [this.premio && this.premio.nombreFavorecido ? this.premio.nombreFavorecido : '', Validators.required],
      nombreRetiro: [this.premio && this.premio.nombreRetiro ? this.premio.nombreRetiro : '', Validators.required],
      horarioExtraccion: [this.premio && this.premio.horarioExtraccion ? this.premio.horarioExtraccion : '', Validators.required],
      tipoSorteo: [this.premio && this.premio.tipoSorteo ? this.premio.tipoSorteo : '', Validators.required],
    })
  }

  closeForm(create: boolean){
    let data = create ? this.premioForm.value : null;
    this.emitData.emit(data);
  }

}
