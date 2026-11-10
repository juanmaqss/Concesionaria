import type { ContactConfig } from '../types/contact'

export const contact: ContactConfig = {
    phoneDisplay: '(000) 000-0000',
    phoneTel: '+540000000000',
    whatsapp: '5490000000000',
    email: 'contacto@meridiano.example',
    address: {
        street: 'Av. Ejemplo 1234',
        city: 'Ciudad Ejemplo',
        province: 'Provincia Ejemplo',
    },
    hours: [
        { days: 'Lunes a viernes', time: '9:00 a 18:00' },
        { days: 'Sábados', time: '9:00 a 13:00' },
    ],
}