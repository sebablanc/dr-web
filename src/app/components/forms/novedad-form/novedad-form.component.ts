import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LINK_CONFIG, TITULO_CONFIG } from '../../ui/input-dr/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';
import { BUTTON_CANCEL_CONFIG, BUTTON_SAVE_CONFIG } from '../../ui/rounded-button/button-configs';
import { IRoundedButtonConfig } from '../../ui/rounded-button/rounded-button.component';
import { MENSAJE_CONFIG } from '../../ui/text-area-dr/text-area-config';
import { ITextAreaConfig } from '../../ui/text-area-dr/text-area-dr.component';

@Component({
  selector: 'app-novedad-form',
  templateUrl: './novedad-form.component.html',
  styleUrls: ['./novedad-form.component.scss'],
})
export class NovedadFormComponent implements OnInit {
  @Input() novedad: any;
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  
  novedadForm: FormGroup = null;
  tituloConfig: IInputConfig = TITULO_CONFIG;
  linkConfig: IInputConfig = LINK_CONFIG;
  mensajeConfig: ITextAreaConfig = MENSAJE_CONFIG;
  buttonSendConfig: IRoundedButtonConfig = BUTTON_SAVE_CONFIG;
  buttonCancelConfig: IRoundedButtonConfig = BUTTON_CANCEL_CONFIG;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.novedadForm = this.fb.group({
      id: [this.novedad && this.novedad.id ? this.novedad.id : null],
      titulo: [this.novedad && this.novedad.titulo ? this.novedad.titulo : '', Validators.required],
      mensaje: [this.novedad && this.novedad.mensaje ? this.novedad.mensaje : '', Validators.required],
      link: [this.novedad && this.novedad.link ? this.novedad.link : '']
    })
  }

  closeForm(create: boolean){
    let data = create ? this.novedadForm.value : null;
    this.emitData.emit(data);
  }

}
