import { site } from '../data/content'

export function InviteDay() {
  return (
    <section className="invite-day" aria-label="Wedding invitation">
      <div className="invite-day__headline">
        <p className="invite-day__line invite-day__line--top">
          Welcome to
          <span className="invite-day__diamond invite-day__diamond--top">
            <img src="/hero-hands.jpg" alt="" />
          </span>
        </p>
        <p className="invite-day__line invite-day__line--bottom">
          <span className="invite-day__diamond invite-day__diamond--bottom">
            <img src="/hero-8.jpg" alt="" />
          </span>
          Our Big Day
        </p>
      </div>

      <div className="invite-day__copy">
        <p className="invite-day__kicker">You are invited</p>
        <p>
          Together with their families, {site.couple.bride} &amp; {site.couple.groom} request the
          honour of your presence as they exchange vows on{' '}
          <strong>{site.weddingDateLabel}</strong> at {site.address}.
        </p>
      </div>
    </section>
  )
}
