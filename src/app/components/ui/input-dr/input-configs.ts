import { IInputConfig } from "src/app/components/ui/input-dr/input-dr.component";

export const NOMBRE_CONFIG: IInputConfig = {
    formControlName: 'nombre',
    label: 'Nombre',
    type: 'text'
};

export const APELLIDO_CONFIG: IInputConfig = {
    formControlName: 'apellido',
    label: 'Apellido',
    type: 'text'
};

export const TELEFONO_CONFIG: IInputConfig = {
    formControlName: 'telefono',
    label: 'Teléfono',
    type: 'text'
};

export const EMAIL_CONFIG: IInputConfig = {
    formControlName: 'email',
    label: 'E-Mail',
    type: 'email'
};

export const VALOR_CONFIG: IInputConfig = {
    formControlName: 'valor',
    label: 'Valor',
    type: 'number',
    prefixIcon: 'logo-usd',
};

export const IMAGEN_CONFIG: IInputConfig = {
    formControlName: 'imagen',
    label: 'Imagen',
    type: 'file'
};

export const TITULO_CONFIG: IInputConfig = {
    formControlName: 'titulo',
    label: 'Título',
    type: 'text'
};

export const FECHA_SORTEO_CONFIG: IInputConfig = {
    formControlName: 'fechaSorteo',
    label: 'Fecha de sorteo',
    type: 'date'
};

export const NUMERO_CUPON_CONFIG: IInputConfig = {
    formControlName: 'numeroCupon',
    label: 'Número de cupón',
    type: 'number'
};

export const NOMBRE_FAVORECIDO_CONFIG: IInputConfig = {
    formControlName: 'nombreFavorecido',
    label: 'Nombre del alumno favorecido',
    type: 'text'
};

export const NOMBRE_RETIRO_CONFIG: IInputConfig = {
    formControlName: 'nombreRetiro',
    label: 'Nombre del alumno que retiró el cupón',
    type: 'text'
};

export const HORARIO_EXTRACCION_CONFIG: IInputConfig = {
    formControlName: 'horarioExtraccion',
    label: 'Horario en que se extrajo el cupón',
    type: 'time'
};
