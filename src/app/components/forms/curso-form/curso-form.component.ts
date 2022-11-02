import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NOMBRE_CONFIG, VALOR_CONFIG } from 'src/app/pages/consultas/input-configs';
import { IInputConfig } from '../../ui/input-dr/input-dr.component';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent implements OnInit {
  cursoForm: FormGroup = null;
  nombreConfig: IInputConfig = NOMBRE_CONFIG;
  valorConfig: IInputConfig = VALOR_CONFIG;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cursoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      consulta: ['', [Validators.required]]
    })
  }

}
