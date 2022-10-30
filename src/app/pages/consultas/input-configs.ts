import { IInputConfig } from "src/app/components/ui/input-dr/input-dr.component";
import { IRoundedButtonConfig } from "src/app/components/ui/rounded-button/rounded-button.component";

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
    type: 'text'
};

export const CONSULTA_CONFIG: IInputConfig = {
    formControlName: 'consulta',
    label: 'Consulta',
    type: 'text'
};

export const BUTTON_SUBMIT_CONFIG: IRoundedButtonConfig = {
    text: 'Consultar',
    type: 'submit'
}