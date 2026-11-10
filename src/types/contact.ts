export type OpeningHours = {
    /** Días, tal como se muestran. Ej: "Lunes a viernes" */
    days: string
    /** Horario, tal como se muestra. Ej: "9:00 a 18:00" */
    time: string
}

export type ContactConfig = {
    /** Teléfono tal como se muestra al visitante */
    phoneDisplay: string
    /** Teléfono en formato internacional, para el enlace de llamada */
    phoneTel: string
    /** WhatsApp: solo dígitos, formato internacional, sin "+" ni espacios */
    whatsapp: string
    email: string
    address: {
        street: string
        city: string
        province: string
        /** Enlace a Google Maps, opcional */
        mapUrl?: string
    }
    hours: OpeningHours[]
    /** Redes sociales: se muestran solo las que tengan enlace */
    social?: {
        instagram?: string
        facebook?: string
        youtube?: string
    }
}