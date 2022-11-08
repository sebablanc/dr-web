import { environment } from "src/environments/environment";

export const SECTION_TYPES = {
    ADULTOS: 'ADULTOS',
    KIDS: 'KIDS'
}
export const NAV_ITEMS = [
    { text: 'Home', link: 'home', section: SECTION_TYPES.ADULTOS },
    { text: 'Quiénes somos', link: 'about-us', section: SECTION_TYPES.ADULTOS },
    { text: 'DR Computers', link: 'dr-computers', section: SECTION_TYPES.ADULTOS },
    { text: 'DR Kids', link: 'dr-kids', section: SECTION_TYPES.KIDS },
    { text: 'Promociones', link: 'promociones', section: SECTION_TYPES.ADULTOS },
    { text: 'Boletín informativo', link: 'boletin-informativo', section: SECTION_TYPES.ADULTOS },
    { text: 'Consultas', link: 'consultas', section: SECTION_TYPES.ADULTOS },
    { text: 'Premios', link: 'premios', section: '' },
];

export const RS_LINKS = [
    {logo: 'assets/images/logos/facebook_logo.svg', link: environment.instituteFB},
    {logo: 'assets/images/logos/instagram_logo.svg', link: environment.instituteInstagram},
    {logo: 'assets/images/logos/whatsapp_logo.svg', link: environment.instituteWApp},
    {logo: 'assets/images/logos/gmail_logo.svg', link: `https://mail.google.com/mail/?view=cm&fs=1&to=${environment.instituteEmail}&su=Consulta para el Instituto DR Computers&body=¡Saludos!`},
    {logo: 'assets/images/logos/email_logo.svg', link: `mailto://${environment.instituteEmail}?Subject=Consulta para el Instituto DR Computers&body=¡Saludos!`},
];

export const ROUNDED_BUTTONS_ICONS = {
    CREATE: 'add',
    EDIT: 'pencil',
    DELETE: 'trash'
}

export const MESES_ITEMS = [
    {value: '', label: '-- Seleccione un mes --'},
    {value: 'ENERO', label: 'Enero'},
    {value: 'FEBRERO', label: 'Febrero'},
    {value: 'MARZO', label: 'Marzo'},
    {value: 'ABRIL', label: 'Abril'},
    {value: 'MAYO', label: 'Mayo'},
    {value: 'JUNIO', label: 'Junio'},
    {value: 'JULIO', label: 'Julio'},
    {value: 'AGOSTO', label: 'Agosto'},
    {value: 'SEPTIEMBRE', label: 'Septiembre'},
    {value: 'OCTUBRE', label: 'Agosto'},
    {value: 'NOVIEMBRE', label: 'Noviembre'},
    {value: 'DICIEMBRE', label: 'Diciembre'}
]

export const SORTEOS_TYPE = {
    CUOTA: 'CUOTA',
    COMPUTADORA: 'COMPUTADORA'
}

export const TIPO_SORTEO_LIST = [
    {value: '', label: '-- Seleccione un tipo de sorteo --'},
    {value: 'CUOTA', label: 'Cuota'},
    {value: 'COMPUTADORA', label: 'Computadora'},
]