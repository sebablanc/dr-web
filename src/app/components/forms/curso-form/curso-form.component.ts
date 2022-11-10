import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMAGEN_URL_CONFIG, NOMBRE_CONFIG } from 'src/app/components/ui/input-dr/input-configs';
import { SECTION_TYPES } from 'src/constants/items';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_CANCEL_CONFIG, BUTTON_SAVE_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';
import { CATEGORIA_CONFIG } from '../../ui/select-dr/select-configs';
import { IList, ISelectConfig } from '../../ui/select-dr/select-dr.component';
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
  imagenUrlConfig: IInputConfig = IMAGEN_URL_CONFIG;
  descripcionConfig: ITextAreaConfig = DESCRIPCION_CONFIG;
  categoriaConfig: ISelectConfig = CATEGORIA_CONFIG;
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;
  categorias: Array<IList> = [{value: '', label: '-- Seleccione una categoría --'}];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    for (const section in SECTION_TYPES) {
      this.categorias.push({value: section, label: section})
    }
    this.cursoForm = this.fb.group({
      id: [this.curso && this.curso.id ? this.curso.id : null],
      nombre: [this.curso && this.curso.nombre ? this.curso.nombre : '', [Validators.required, Validators.minLength(3)]],
      descripcion: [this.curso && this.curso.descripcion ? this.curso.descripcion : '', [Validators.required]],
      categoria: [this.curso && this.curso.categoria ? this.curso.categoria : '', Validators.required],
      imagen: [this.curso && this.curso.imagen ? this.curso.imagen : '']
    })
  }

  closeForm(create: boolean){
    let data = create ? this.cursoForm.value : null;
    this.emitData.emit(data);
  }
}
