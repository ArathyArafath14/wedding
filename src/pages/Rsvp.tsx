import { FormEvent, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { site } from '../data/content'
import './pages.css'

export function Rsvp() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        kicker="RSVP"
        title={`Celebrate with ${site.couple.bride} & ${site.couple.groom}`}
        lead="Please reply by September 1, 2026. We cannot wait to set a place for you."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <form className="form-panel" onSubmit={onSubmit}>
            {sent ? (
              <p className="form-success">
                Your RSVP is received — thank you. We will follow up with travel notes soon.
              </p>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    Full name
                    <input name="name" required />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" required />
                  </label>
                </div>
                <label>
                  Attendance
                  <select name="attendance" required defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="yes">Joyfully accepts</option>
                    <option value="no">Respectfully declines</option>
                  </select>
                </label>
                <label>
                  Number of guests
                  <input type="number" name="guests" min={1} max={6} defaultValue={1} required />
                </label>
                <label>
                  Meal preference
                  <select name="meal" defaultValue="standard">
                    <option value="standard">Seasonal tasting</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </label>
                <label>
                  Song request / note
                  <textarea name="note" rows={4} placeholder="Optional" />
                </label>
                <button type="submit" className="btn btn-primary">
                  Submit RSVP
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
