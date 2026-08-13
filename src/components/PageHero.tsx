import './PageHero.css'

type PageHeroProps = {
  kicker?: string
  title: string
  lead?: string
}

export function PageHero({ kicker, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner reveal">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
    </section>
  )
}
