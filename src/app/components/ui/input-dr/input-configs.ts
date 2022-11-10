import { IInputConfig } from "src/app/components/ui/input-dr/input-dr.component";

export const NOMBRE_CONFIG: IInputConfig = {
    formControlName: 'nombre',
    label: 'Nombre',
    type: 'text',
    lastElement: false
};

export const APELLIDO_CONFIG: IInputConfig = {
    formControlName: 'apellido',
    label: 'Apellido',
    type: 'text',
    lastElement: false
};

export const TELEFONO_CONFIG: IInputConfig = {
    formControlName: 'telefono',
    label: 'Teléfono',
    type: 'text',
    lastElement: false
};

export const EMAIL_CONFIG: IInputConfig = {
    formControlName: 'email',
    label: 'E-Mail',
    type: 'email',
    lastElement: false
};

export const PASSWORD_CONFIG: IInputConfig = {
    formControlName: 'password',
    label: 'Contraseña',
    type: 'password',
    lastElement: true
};

export const TITULO_CONFIG: IInputConfig = {
    formControlName: 'titulo',
    label: 'Título',
    type: 'text',
    lastElement: false
};

export const LINK_CONFIG: IInputConfig = {
    formControlName: 'link',
    label: 'Link',
    type: 'text',
    lastElement: false
};

export const IMAGEN_URL_CONFIG: IInputConfig = {
    formControlName: 'imagen',
    label: 'Link a la imagen',
    type: 'text',
    lastElement: false
};

export const FECHA_SORTEO_CONFIG: IInputConfig = {
    formControlName: 'fechaSorteo',
    label: 'Fecha de sorteo',
    type: 'date',
    lastElement: false
};

export const NUMERO_CUPON_CONFIG: IInputConfig = {
    formControlName: 'numeroCupon',
    label: 'Número de cupón',
    type: 'number',
    lastElement: false
};

export const NOMBRE_FAVORECIDO_CONFIG: IInputConfig = {
    formControlName: 'nombreFavorecido',
    label: 'Nombre del alumno favorecido',
    type: 'text',
    lastElement: false
};

export const NOMBRE_RETIRO_CONFIG: IInputConfig = {
    formControlName: 'nombreRetiro',
    label: 'Nombre del alumno que retiró el cupón',
    type: 'text',
    lastElement: false
};

export const HORARIO_EXTRACCION_CONFIG: IInputConfig = {
    formControlName: 'horarioExtraccion',
    label: 'Horario en que se extrajo el cupón',
    type: 'time',
    lastElement: false
};
