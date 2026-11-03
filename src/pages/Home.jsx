import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '../data.js'

function useCountUp(target, ms = 1600) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(target)
    let raf, t0
    const tick = t => { t0 ??= t; const p = Math.min((t - t0) / ms, 1); setN(Math.round(target * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, ms])
  return n
}

export default function Home() {
  const students = useCountUp(2000)
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <img src="/logo.png" alt="" aria-hidden className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[38rem] max-w-none opacity-[0.07] hidden md:block" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32 grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div className="rise">
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] text-deep">A well-educated and healthy society.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">Empowering government and private school students with equal educational opportunities and counseling.</p>
            <Link to="/#programs" className="mt-9 inline-block bg-leaf text-white px-7 py-3.5 font-medium rounded-sm hover:bg-deep transition-colors">Explore Our Programs</Link>
          </div>
          <div className="rise md:border-l-4 md:border-brass md:pl-8" style={{ animationDelay: '.25s' }}>
            <p className="font-display text-7xl md:text-8xl font-bold text-leaf tabular-nums leading-none">{students.toLocaleString()}+</p>
            <p className="mt-2 text-lg text-ink/75">Students reached</p>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-deep">Our programs</h2>
        <p className="mt-3 max-w-xl text-ink/70">Four initiatives that bring learning to students, adults, teachers and trainers.</p>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {programs.map(p => (
            <article key={p.title} className="border-t-2 border-leaf pt-5">
              <h3 className="font-display text-2xl font-semibold text-deep">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/80 max-w-md">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-leaf text-white">
        <blockquote className="mx-auto max-w-4xl px-5 py-20 text-center font-display text-3xl md:text-5xl font-semibold leading-tight">
          Knowledge, education, training: nothing without each other.
        </blockquote>
      </section>
    </>
  )
}
