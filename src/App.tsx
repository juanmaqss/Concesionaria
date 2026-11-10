import { brand } from './config/brand'

export default function App() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <header className="bg-brand px-6 py-8 text-white">
        <h1 className="font-display text-3xl font-bold">{brand.name}</h1>
        <p className="mt-2 text-white/80">{brand.tagline}</p>
      </header>
      <section className="p-6">
        <p>Sitio en construcción</p>
      </section>
    </main>
  )
}