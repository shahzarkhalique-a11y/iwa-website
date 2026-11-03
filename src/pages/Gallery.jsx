import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-6xl font-bold text-deep">Gallery</h1>
      <p className="mt-3 text-ink/70 max-w-xl">Moments from our events, classrooms and training sessions.</p>
      {gallery.map(g => (
        <section key={g.group} className="mt-14">
          <h2 className="font-display text-3xl font-semibold text-leaf">{g.group}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map(i => (
              <figure key={i.label}>
                {i.src
                  ? <img src={i.src} alt={i.label} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  : <div className="aspect-[4/3] w-full bg-sage grid place-items-center"><img src="/logo.png" alt="" className="h-20 opacity-25" /></div>}
                <figcaption className="mt-2 font-medium">{i.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
