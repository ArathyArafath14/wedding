import { InviteSeal } from '../components/InviteSeal'
import { Link } from 'react-router-dom'
import { Countdown } from '../components/Countdown'
import { StoryScroll } from '../components/StoryScroll'
import { InviteDay } from '../components/InviteDay'
import { MouseGallery } from '../components/MouseGallery'
import {
  portfolio,
  services,
  site,
  team,
  testimonials,
} from '../data/content'
import './home.css'

export function HomePlanner() {
  return (
    <>
      <section className="bohu-hero" aria-label="Wedding invitation hero">
        <div className="bohu-hero__photo" />

        <div className="bohu-hero__title">
          <h2 className="bohu-hero__line bohu-hero__line--forever">Forever</h2>
          <h2 className="bohu-hero__line bohu-hero__line--after">After</h2>
        </div>

        <div className="bohu-hero__badge">
          <InviteSeal />
        </div>

        <p className="bohu-hero__intro">
          Hi, Welcome to our Big Day in <strong>November 16, 2026.</strong> Together, let&apos;s create
          a remarkable journey where our dreams become realities.
        </p>
      </section>

      <section className="quote-collage" id="our-story" aria-label="Our story">
        <div className="quote-collage__col quote-collage__col--left">
          <figure className="quote-collage__frame quote-collage__frame--lt">
            <img src="/hero-8.jpg" alt="Bride and groom laughing together" loading="lazy" />
          </figure>
          <figure className="quote-collage__frame quote-collage__frame--lb">
            <img src="/hero-1.jpg" alt="Couple with wedding bouquet" loading="lazy" />
          </figure>
        </div>

        <div className="quote-collage__center">
          <h2 className="quote-collage__quote">
            “You are my today and all of my tomorrows.”
          </h2>
          <p className="quote-collage__text">
            Your smile is so gentle, so soft and so lovely. Your laugh is that of
            angelic tones. Your heart is so open, so caring and understanding. You
            are so special, so unique and so rare. Your love is so warm, so
            protective and unconditional.
          </p>
          <div className="quote-collage__icon" aria-hidden="true">
            <img src="/flower-icon.png" alt="" />
          </div>
        </div>

        <div className="quote-collage__col quote-collage__col--right">
          <figure className="quote-collage__frame quote-collage__frame--rt">
            <img src="/hero-hands.jpg" alt="Newlyweds at the ceremony" loading="lazy" />
          </figure>
          <figure className="quote-collage__frame quote-collage__frame--rb">
            <img src="/hero-5.jpg" alt="Wedding rings on a floral bouquet" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="couple-pair" aria-label="The couple">
        <div className="couple-pair__inner">
          <article className="couple-pair__side couple-pair__side--bride">
            <figure className="couple-pair__media">
              <img
                src="/hero-1.jpg"
                alt={site.couple.bride}
                loading="lazy"
              />
            </figure>
            <h3 className="couple-pair__name">{site.couple.bride}</h3>
            <p className="couple-pair__quote">
              Today, I marry my best friend. With joy in my heart and love in my eyes,
              I&apos;m ready for forever.
            </p>
          </article>

          <figure className="couple-pair__media couple-pair__media--center">
            <img
              src="/hero-hands.jpg"
              alt={`${site.couple.bride} and ${site.couple.groom}`}
              loading="lazy"
            />
          </figure>

          <article className="couple-pair__side couple-pair__side--groom">
            <h3 className="couple-pair__name">{site.couple.groom}</h3>
            <p className="couple-pair__quote">
              A heart full of love and a soul full of hope, I can&apos;t wait to begin
              this journey with you by my side.
            </p>
            <figure className="couple-pair__media">
              <img
                src="/hero-clean2.jpg"
                alt={site.couple.groom}
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </section>

      <StoryScroll />

      <InviteDay />

      <MouseGallery />

      <section className="section countdown-band" id="countdown">
        <div className="container countdown-band__inner">
          <div>
            <p className="section-kicker">Featured invitation</p>
            <h2 className="section-title">
              {site.couple.bride} & {site.couple.groom}
            </h2>
            <p className="section-lead">
              A couple site with countdown, timeline, gallery, and RSVP — ready for your celebration.
            </p>
          </div>
          <Countdown date={site.weddingDate} />
        </div>
      </section>

      <section className="the-plans" id="when-where" aria-label="The plans">
        <figure className="the-plans__photo">
          <img src="/hero-8.jpg" alt="Bride and groom dancing" />
        </figure>
        <div className="the-plans__panel">
          <div className="the-plans__icon" aria-hidden="true">
            <img src="/flower-icon.png" alt="" />
          </div>
          <h2 className="the-plans__title">The Plans</h2>
          <div className="the-plans__groups">
            <div>
              <h3>The Day Before</h3>
              <ul>
                <li><span>Event One</span><time>03:00 PM</time></li>
                <li><span>Event Two</span><time>05:00 PM</time></li>
                <li><span>Event Three</span><time>08:00 PM</time></li>
              </ul>
            </div>
            <div>
              <h3>The Wedding Day</h3>
              <ul>
                <li><span>Ceremony</span><time>03:00 PM</time></li>
                <li><span>Reception</span><time>05:00 PM</time></li>
                <li><span>Farewell</span><time>08:00 PM</time></li>
              </ul>
            </div>
            <div>
              <h3>The Day After</h3>
              <ul>
                <li><span>Event One</span><time>03:00 PM</time></li>
                <li><span>Event Two</span><time>05:00 PM</time></li>
                <li><span>Event Three</span><time>08:00 PM</time></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="watch-live">
        <div className="container">
          <p className="section-kicker">Watch Live</p>
          <h2 className="section-title">Join us from afar</h2>
          <p className="section-lead">
            Can&apos;t be there in person? Stream the ceremony live on the day — link opens closer to{' '}
            {site.weddingDateLabel}.
          </p>
          <a
            className="btn btn-primary"
            style={{ marginTop: '1.25rem' }}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            Watch live
          </a>
        </div>
      </section>

      

     

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2 className="script">Let’s plan something beautiful</h2>
          <p>Tell us about your date, venue dreams, and the feeling you want guests to carry home.</p>
          <Link to="/contact" className="btn btn-light">
            Book a consult
          </Link>
        </div>
      </section>
    </>
  )
}
