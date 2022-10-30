import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
  
  getErrorMessage(field: any) {
    if (field.hasError('required')) {
      return 'Campo requerido';
    }

    if(field.hasError('email')){
      return 'Debe ingresar un email válido';
    }
   
    if(field.hasError('min')){
      return 'Debe ingresar como mínimo ' + field.errors.min.min + ' dígitos';
    }
   
    if(field.hasError('minlength')){
      return 'Debe ingresar como mínimo ' + field.errors.minlength.requiredLength + ' caracteres';
    }
  }
}
