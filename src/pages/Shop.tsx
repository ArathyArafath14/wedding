import { PageHero } from '../components/PageHero'
import { shopProducts } from '../data/content'
import './pages.css'

export function Shop() {
  return (
    <>
      <PageHero
        kicker="Shop"
        title="Special products for you"
        lead="Bridal essentials curated with the same quiet elegance as our celebrations."
      />
      <section className="section">
        <div className="container shop-grid">
          {shopProducts.map((item) => (
            <article key={item.title} className="shop-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button type="button" className="btn btn-primary">
                Add to cart
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
