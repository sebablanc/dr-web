import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MESES_ITEMS, TIPO_SORTEO_LIST } from 'src/constants/items';
import { HORARIO_EXTRACCION_CONFIG, NOMBRE_FAVORECIDO_CONFIG, NOMBRE_RETIRO_CONFIG, NUMERO_CUPON_CONFIG } from '../../ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_SAVE_CONFIG, BUTTON_CANCEL_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';
import { MES_CONFIG, TIPO_SORTEO_CONFIG, YEAR_CONFIG } from '../../ui/select-dr/select-configs';
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
  yearConfig: ISelectConfig = YEAR_CONFIG;
  mesConfig: ISelectConfig = MES_CONFIG;
  numeroCuponConfig: IInputConfig = NUMERO_CUPON_CONFIG;
  nombreFavorecidoConfig: IInputConfig = NOMBRE_FAVORECIDO_CONFIG;
  nombreRetiroConfig: IInputConfig = NOMBRE_RETIRO_CONFIG;
  horarioExtraccionConfig: IInputConfig = HORARIO_EXTRACCION_CONFIG;
  tipoSorteoConfig: ISelectConfig = TIPO_SORTEO_CONFIG;
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;
  yearsList = [{value: 0, label: '-- Seleccione un año --'}];
  mesesList = MESES_ITEMS;
  tipoSorteoList = TIPO_SORTEO_LIST;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    const year = new Date().getFullYear();
    for (let index = year; index > 1996; index--) {
      this.yearsList.push({value: index, label: index.toString()});
    }
  }

  createForm(){
    this.premioForm = this.fb.group({
      id: [this.premio && this.premio.id ? this.premio.id : null],
      year: [this.premio && this.premio.year ? this.premio.year : 0, [Validators.required, Validators.min(1997)]],
      mes: [this.premio && this.premio.mes ? this.premio.mes : '', Validators.required],
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
