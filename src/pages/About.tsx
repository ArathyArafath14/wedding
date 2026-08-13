import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { team } from '../data/content'
import './pages.css'

export function About() {
  return (
    <>
      <PageHero
        kicker="About Bohu"
        title="A studio for romantic, modern celebrations"
        lead="We plan and style weddings with restraint and warmth — less spectacle, more feeling."
      />
      <section className="section">
        <div className="container about-grid">
          <img
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
            alt="Wedding table styling"
          />
          <div>
            <p className="section-kicker">Philosophy</p>
            <h2 className="section-title">Design the feeling first</h2>
            <p className="section-lead">
              Every Bohu celebration begins with atmosphere: light, scent, pace, and hospitality. From
              there we build vendor teams, floral language, and a timeline that lets the couple stay
              present.
            </p>
            <p className="section-lead">
              Whether you need a full-planning partner or a polished invitation website with RSVP, we
              keep the process clear and calm.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Meet the studio
            </Link>
          </div>
        </div>
      </section>
      <section className="section alt-band">
        <div className="container">
          <p className="section-kicker">Team</p>
          <h2 className="section-title">People behind the day</h2>
          <div className="people-grid">
            {team.map((member) => (
              <article key={member.name}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
