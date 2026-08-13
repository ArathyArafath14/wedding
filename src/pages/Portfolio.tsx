import { PageHero } from '../components/PageHero'
import { portfolio } from '../data/content'
import './pages.css'

export function Portfolio() {
  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Weddings we have held"
        lead="A selection of ceremonies, dinners, and destinations — soft light, strong florals, easy hospitality."
      />
      <section className="section">
        <div className="container portfolio-page-grid">
          {portfolio.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <p>{item.category}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
