import { brand } from './config/brand'
import { content } from './data/content'

export default function App() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <header className="bg-brand px-6 py-4 text-white">
        <p className="font-display text-xl font-bold">{brand.name}</p>
      </header>
      <section className="space-y-2 px-6 py-10">
        <h1 className="font-display text-4xl font-bold">{content.hero.title}</h1>
        <p className="text-lg text-muted">{content.hero.subtitle}</p>
      </section>
      <section className="space-y-3 px-6 pb-10">
        <h2 className="font-display text-2xl font-bold">{content.about.title}</h2>
        {content.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>
    </main>
  )
}