import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { services } from '../data/content'
import './pages.css'

export function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Planning, styling & coordination"
        lead="Choose full planning or plug us into the chapters that need the most care."
      />
      <section className="section">
        <div className="container service-list">
          {services.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="container" style={{ marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn btn-primary">
            Request a proposal
          </Link>
        </div>
      </section>
    </>
  )
}
