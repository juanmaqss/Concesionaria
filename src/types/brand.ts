export type BrandConfig = {
    /** Nombre comercial: se muestra en el encabezado */
    name: string
    /** Frase corta de la concesionaria */
    tagline: string
    /** Logo opcional. Si no hay, se muestra el nombre como texto */
    logo?: {
        src: string
        alt: string
    }
}