import { useEffect, useRef } from 'react'
import { site } from '../data/content'

const stories = [
  {
    title: 'First Time We Met',
    text: 'We met by chance at a coffee shop on a rainy afternoon. She was reading her favorite book, and I offered her the last available seat. What began as casual conversation quickly turned into hours of laughter neither of them expected.',
    thumb: '/hero-3.jpg',
    hero: '/hero-8.jpg',
  },
  {
    title: 'The Proposal',
    text: 'Under soft evening light, with trembling hands and a quiet smile, the question that changed everything was asked. Tears, laughter, and a yes that still echoes — the start of forever written in that moment.',
    thumb: '/hero-5.jpg',
    hero: '/hero-hands.jpg',
  },
  {
    title: 'Our Forever',
    text: `From that first coffee to walking down the aisle, every chapter led here. ${site.couple.bride} & ${site.couple.groom} invite you to celebrate the day their story becomes a promise kept.`,
    thumb: '/hero-1.jpg',
    hero: '/hero-clean2.jpg',
  },
]

export function StoryScroll() {
  const pinRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const targetX = useRef(0)
  const currentX = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const update = () => {
      const pin = pinRef.current
      const sticky = stickyRef.current
      const track = trackRef.current
      if (!pin || !sticky || !track) return

      const maxShift = Math.max(0, track.scrollWidth - sticky.clientWidth)
      const pinRect = pin.getBoundingClientRect()
      const travel = pin.offsetHeight - sticky.offsetHeight
      const scrolled = Math.min(travel, Math.max(0, -pinRect.top))
      const ratio = travel > 0 ? scrolled / travel : 0
      targetX.current = -ratio * maxShift
    }

    const tick = () => {
      currentX.current += (targetX.current - currentX.current) * 0.12
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${currentX.current}px, 0, 0)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    update()
    rafRef.current = requestAnimationFrame(tick)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div ref={pinRef} className="story-scroll-pin">
      <section ref={stickyRef} className="story-scroll" aria-label="Our story moments">
        <div ref={trackRef} className="story-scroll__track">
          {stories.map((item) => (
            <article key={item.title} className="story-panel">
              <div className="story-panel__left">
                <figure className="story-panel__thumb">
                  <img src={item.thumb} alt="" loading="lazy" />
                </figure>
                <h3 className="story-panel__title">{item.title}</h3>
                <p className="story-panel__text">{item.text}</p>
              </div>
              <figure className="story-panel__hero">
                <img src={item.hero} alt={item.title} loading="lazy" />
              </figure>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
