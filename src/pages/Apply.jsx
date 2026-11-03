import { useState } from 'react'
import { SHEET_URL } from '../data.js'

const levels = ['Primary (Class 1–5)', 'Middle (Class 6–8)', 'Matric (Class 9–10)', 'Intermediate (Class 11–12)', 'University / Graduate', 'Not currently studying']
const steps = ['Fill in this short form', 'We contact you to confirm your details', 'Join a session']
const field = 'mt-2 w-full border border-ink/30 bg-white px-4 py-3 text-base rounded-sm focus:border-leaf'
const validContact = v => /^\S+@\S+\.\S+$/.test(v) || v.replace(/\D/g, '').length >= 10

export default function Apply() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!validContact(String(data.get('contact')).trim())) return setError('Please enter a valid phone number or email.')
    setError('')
    setStatus('sending')
    try {
      if (!SHEET_URL) throw new Error('SHEET_URL is not set in src/data.js')
      await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) })
      setStatus('done')
    } catch {
      setStatus('idle')
      setError('Something went wrong. Please try again, or call us on 0331-2896006.')
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-24 grid gap-14 md:grid-cols-[1fr_1.1fr]">
      <div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-deep leading-tight">Apply to join IWA</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">Free for everyone, of any age. Students and adults can apply with the same form.</p>
        <ol className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4 items-baseline">
              <span className="font-display text-3xl font-bold text-brass">{i + 1}</span>
              <span className="text-ink/85">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      {status === 'done' ? (
        <div className="bg-sage p-8 self-start" role="status">
          <h2 className="font-display text-3xl font-semibold text-deep">Thank you!</h2>
          <p className="mt-3 leading-relaxed">We have received your application and will contact you soon to confirm your details.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6 self-start">
          <div>
            <label htmlFor="name" className="font-medium">Full name</label>
            <input id="name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="age" className="font-medium">Age</label>
            <input id="age" name="age" type="number" inputMode="numeric" min="3" max="100" required className={field} />
          </div>
          <div>
            <label htmlFor="education" className="font-medium">Education level</label>
            <select id="education" name="education" required defaultValue="" className={field}>
              <option value="" disabled>Select one</option>
              {levels.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="contact" className="font-medium">Phone number or email</label>
            <input id="contact" name="contact" required autoComplete="tel" className={field} />
          </div>
          <input name="hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
          {error && <p className="text-red-700" role="alert">{error}</p>}
          <button disabled={status === 'sending'} className="bg-leaf text-white px-8 py-3.5 font-medium rounded-sm hover:bg-deep disabled:opacity-60 transition-colors">
            {status === 'sending' ? 'Sending…' : 'Submit application'}
          </button>
        </form>
      )}
    </div>
  )
}