import { brand } from './config/brand'
import { contact } from './config/contact'

export default function App() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <header className="bg-brand px-6 py-8 text-white">
        <h1 className="font-display text-3xl font-bold">{brand.name}</h1>
        <p className="mt-2 text-white/80">{brand.tagline}</p>
      </header>
      <section className="space-y-2 p-6">
        <p>
          {contact.address.street}, {contact.address.city}, {contact.address.province}
        </p>
        <p>
          Tel: {contact.phoneDisplay} · {contact.email}
        </p>
        <ul>
          {contact.hours.map((h) => (
            <li key={h.days}>
              {h.days}: {h.time}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}