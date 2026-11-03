import { timeline, scope } from '../data.js'

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-6xl font-bold text-deep">About Ilm Welfare Association</h1>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-leaf">Mission</h2>
          <p className="mt-3 leading-relaxed">To develop a society that is aware of its basic educational rights and has equal access to job and professional facilities.</p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-leaf">Vision</h2>
          <p className="mt-3 leading-relaxed">A well-educated and healthy society.</p>
        </div>
      </section>

      <section className="mt-14 bg-sage p-8 md:p-10">
        <h2 className="font-display text-3xl font-semibold text-deep">Our philosophy</h2>
        <p className="mt-3 max-w-2xl leading-relaxed">IWA acts as a bridge for poor and needy students, connecting them to opportunity through counseling and formal and informal schooling.</p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold text-deep">Project history</h2>
        <ol className="mt-8 border-l-2 border-leaf ml-2">
          {timeline.map(t => (
            <li key={t.title} className="relative pl-8 pb-9 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-brass ring-4 ring-white" />
              <p className="text-sm font-medium text-leaf">{t.years}</p>
              <h3 className="font-display text-2xl font-semibold">{t.title}{t.result && <span className="ml-3 font-sans text-base font-medium text-brass">{t.result}</span>}</h3>
              <p className="mt-1 text-ink/80">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

            <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold text-deep">Scope of work</h2>
        <p className="mt-3 max-w-2xl text-ink/70">The areas IWA works in, from classrooms to families and communities.</p>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {scope.map((s, i) => (
            <li key={s.title} className="border-t-2 border-leaf pt-4">
              <span className="font-display text-3xl font-bold text-brass">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl font-semibold text-deep">{s.title}</h3>
              <p className="mt-1 leading-relaxed text-ink/80">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
