export type FeaturesConfig = {
    /** Página de posventa (servicio técnico, repuestos). Solo si la concesionaria tiene taller */
    aftersales: boolean
    /** Sección de accesorios */
    accessories: boolean
    /** Solicitud de permuta o entrega de un usado */
    tradeIn: boolean
}