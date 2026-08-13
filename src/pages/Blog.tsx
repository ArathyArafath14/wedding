import { PageHero } from '../components/PageHero'
import { posts } from '../data/content'
import './pages.css'

export function Blog() {
  return (
    <>
      <PageHero
        kicker="Journal"
        title="Ideas for thoughtful celebrations"
        lead="Notes on florals, guest care, vows, and the small decisions that shape a beautiful day."
      />
      <section className="section">
        <div className="container blog-page-grid">
          {posts.map((post) => (
            <article key={post.title}>
              <img src={post.image} alt="" loading="lazy" />
              <time>{post.date}</time>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
