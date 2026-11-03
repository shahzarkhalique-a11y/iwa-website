import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { CONTACT } from './data.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/#programs', label: 'Programs' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/apply', label: 'Apply' },
  { to: '/#contact', label: 'Contact' },
]
const cls = ({ isActive }) => `px-3 py-2 text-[15px] font-medium hover:text-leaf ${isActive ? 'text-leaf' : 'text-ink/80'}`

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-sage">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 h-16">
          <Link to="/" aria-label="Ilm Welfare Association home"><img src="/logo.png" alt="Ilm Welfare Association" className="h-12 w-auto" /></Link>
          <ul className="hidden md:flex items-center">
            {links.map(l => <li key={l.label}>{l.to.includes('#')
              ? <Link to={l.to} className="px-3 py-2 text-[15px] font-medium text-ink/80 hover:text-leaf">{l.label}</Link>
              : <NavLink to={l.to} end={l.end} className={cls}>{l.label}</NavLink>}</li>)}
          </ul>
          <button className="md:hidden p-2" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? 'M5 5l14 14M19 5L5 19' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
          </button>
        </nav>
        {open && <ul className="md:hidden border-t border-sage bg-white px-5 py-2">
          {links.map(l => <li key={l.label}><Link onClick={() => setOpen(false)} to={l.to} className="block py-3 font-medium">{l.label}</Link></li>)}
        </ul>}
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer id="contact" className="bg-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-white/75 max-w-xs">Call us to volunteer, partner with us, or bring a programme to your school.</p>
          </div>
          <dl className="space-y-4">
            <div><dt className="text-white/60 text-sm">President</dt><dd className="text-lg">{CONTACT.president}</dd></div>
            <div><dt className="text-white/60 text-sm">Phone</dt><dd><a className="text-lg underline underline-offset-4 decoration-brass" href={CONTACT.phoneHref}>{CONTACT.phone}</a></dd></div>
            <div><dt className="text-white/60 text-sm">Facebook</dt><dd><a className="text-lg underline underline-offset-4 decoration-brass" href={CONTACT.facebook} target="_blank" rel="noreferrer">facebook.com/ilwelfare</a></dd></div>
          </dl>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/apply" className="hover:text-white">Apply to join</Link></li>
            <li><Link to="/#programs" className="hover:text-white">Programs</Link></li>
          </ul>
        </div>
        <p className="border-t border-white/15 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} Ilm Welfare Association</p>
      </footer>
    </div>
  )
}
