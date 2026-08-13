import { FormEvent, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { site } from '../data/content'
import './pages.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us about your wedding"
        lead="Share your date, guest count, and the atmosphere you imagine — we reply within two business days."
      />
      <section className="section">
        <div className="container form-layout">
          <aside className="contact-aside">
            <h2>Studio</h2>
            <p>{site.address}</p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>{site.phone}</p>
          </aside>
          <form className="form-panel" onSubmit={onSubmit}>
            {sent ? (
              <p className="form-success">Thank you — your note is on its way to the atelier.</p>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    Name
                    <input name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                </div>
                <label>
                  Wedding date
                  <input type="date" name="date" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={5} required placeholder="Venue dreams, guest count, style notes…" />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
