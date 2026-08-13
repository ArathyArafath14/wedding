import { Link } from 'react-router-dom'
import { Countdown } from '../components/Countdown'
import { site, timeline } from '../data/content'
import './home.css'

export function HomeInvitation() {
  return (
    <>
      <section className="invite-hero">
        <div className="invite-hero__media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fe0c7b?auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
          <div className="invite-hero__veil" />
        </div>
        <div className="container invite-hero__content">
          <p className="hero__kicker reveal">Together with their families</p>
          <h1 className="reveal reveal-delay-1">
            <span className="script">
              {site.couple.bride} & {site.couple.groom}
            </span>
          </h1>
          <p className="invite-hero__date reveal reveal-delay-2">October 18, 2026 · Hudson Valley</p>
          <p className="hero__lead reveal reveal-delay-2">
            We invite you to celebrate our wedding — dinner under candlelight, dancing until late, and
            a garden ceremony at golden hour.
          </p>
          <div className="hero__actions reveal reveal-delay-3">
            <Link to="/rsvp" className="btn btn-light">
              RSVP now
            </Link>
            <a href="#schedule" className="btn btn-ghost hero__ghost">
              View schedule
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container invite-count">
          <div>
            <p className="section-kicker">Counting down</p>
            <h2 className="section-title">Until we say I do</h2>
          </div>
          <Countdown date={site.weddingDate} />
        </div>
      </section>

      <section className="section story-band">
        <div className="container story-band__grid">
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
            alt="Couple portrait"
          />
          <div>
            <p className="section-kicker">Our story</p>
            <h2 className="section-title">A quiet beginning</h2>
            <p className="section-lead">
              We met over coffee that turned into a long walk, then a city that felt like home together.
              This day is a thank-you to the people who shaped our years — and a promise for the ones
              ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="schedule">
        <div className="container">
          <p className="section-kicker">Schedule</p>
          <h2 className="section-title">The day at a glance</h2>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.title}>
                <time>{item.time}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section gallery-strip">
        <div className="container">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title">Moments so far</h2>
        </div>
        <div className="gallery-strip__row">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1522673607200-164a2e6371ad?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1520854221256-17451cc461bf?auto=format&fit=crop&w=900&q=80',
          ].map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2 className="script">Will you join us?</h2>
          <p>Kindly reply by September 1 so we can save your seat and set the table.</p>
          <Link to="/rsvp" className="btn btn-light">
            Send RSVP
          </Link>
        </div>
      </section>
    </>
  )
}
