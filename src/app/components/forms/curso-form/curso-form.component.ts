import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMAGEN_CONFIG, NOMBRE_CONFIG, VALOR_CONFIG } from 'src/app/components/ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_CANCEL_CONFIG, BUTTON_SAVE_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';
import { CATEGORIA_CONFIG } from '../../ui/select-dr/select-configs';
import { ISelectConfig } from '../../ui/select-dr/select-dr.component';
import { DESCRIPCION_CONFIG } from '../../ui/text-area-dr/text-area-config';
import { ITextAreaConfig } from '../../ui/text-area-dr/text-area-dr.component';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent implements OnInit {
  @Input() curso: any;
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  cursoForm: FormGroup = null;
  nombreConfig: IInputConfig = NOMBRE_CONFIG;
  valorConfig: IInputConfig = VALOR_CONFIG;
  descripcionConfig: ITextAreaConfig = DESCRIPCION_CONFIG;
  imagenConfig: IInputConfig = IMAGEN_CONFIG;
  categoriaConfig: ISelectConfig = CATEGORIA_CONFIG;
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cursoForm = this.fb.group({
      nombre: [this.curso && this.curso.nombre ? this.curso.nombre : '', [Validators.required, Validators.minLength(3)]],
      imagen: [this.curso && this.curso.imagen ? this.curso.imagen : '', [Validators.required]],
      valor: [this.curso && this.curso.valor ? this.curso.valor : '', [Validators.required]],
      descripcion: [this.curso && this.curso.descripcion ? this.curso.descripcion : '', [Validators.required]],
      categoria: [this.curso && this.curso.categoria ? this.curso.categoria : '', Validators.required]
    })
  }

  closeForm(create: boolean){
    let data = create ? this.cursoForm.value : null;
    this.emitData.emit(data);
  }
}
