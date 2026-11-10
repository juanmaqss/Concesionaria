export default function App() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <header className="bg-brand px-6 py-8 text-white">
        <h1 className="font-display text-3xl font-bold">Sitio en construcción</h1>
        <p className="mt-2 text-white/80">Prueba de paleta y tipografías</p>
      </header>
      <section className="space-y-4 p-6">
        <p>Texto normal en la tipografía de lectura. Año 2022 · 38.000 km · USD 24.500</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-sm text-white">Oferta</span>
          <span className="rounded-full bg-available px-3 py-1 text-sm text-white">Disponible</span>
          <span className="rounded-full bg-reserved px-3 py-1 text-sm text-white">Reservado</span>
          <span className="rounded-full bg-sold px-3 py-1 text-sm text-white">Vendido</span>
          <span className="rounded-full bg-danger px-3 py-1 text-sm text-white">Error</span>
        </div>
        <button className="rounded-lg bg-whatsapp px-4 py-2 font-medium text-white">
          Consultar por WhatsApp
        </button>
      </section>
    </main>
  )
}