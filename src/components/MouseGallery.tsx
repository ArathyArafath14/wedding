import { useEffect, useRef } from 'react'
import './MouseGallery.css'

const images = [
  { src: '/hero-1.jpg', alt: 'Bride by the window', size: 'portrait' },
  { src: '/hero-3.jpg', alt: 'Bride and groom portrait', size: 'tall' },
  { src: '/hero-5.jpg', alt: 'Wedding rings and bouquet', size: 'square' },
  { src: '/hero-7.jpg', alt: 'Couple dancing at the reception', size: 'portrait' },
  { src: '/hero-hands.jpg', alt: 'Hands holding a wedding invitation', size: 'square' },
  { src: '/hero-8.jpg', alt: 'Bride on the staircase', size: 'portrait' },
  { src: '/hero-clean2.jpg', alt: 'Groom portrait', size: 'tall' },
  { src: '/hero-clean3.jpg', alt: 'Wedding day details', size: 'square' },
]

export function MouseGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const targetX = useRef(0)
  const currentX = useRef(0)
  const rafRef = useRef(0)
  const idleRef = useRef(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(hover: none)').matches
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track || prefersReduced) return

    const maxShift = () => Math.max(0, track.scrollWidth - section.clientWidth)

    targetX.current = -0.5 * maxShift()
    currentX.current = targetX.current
    track.style.transform = `translate3d(${currentX.current}px, 0, 0)`

    const onMove = (clientX: number) => {
      idleRef.current = 0
      const nx = Math.min(1, Math.max(0, clientX / window.innerWidth))
      targetX.current = -nx * maxShift()
    }

    const onMouse = (e: MouseEvent) => onMove(e.clientX)
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) onMove(e.touches[0].clientX)
    }

    const tick = (time: number) => {
      if (coarse && idleRef.current > 90) {
        targetX.current = ((Math.sin(time / 4200) + 1) / 2) * -maxShift()
      } else {
        idleRef.current += 1
      }

      currentX.current += (targetX.current - currentX.current) * 0.08
      track.style.transform = `translate3d(${currentX.current}px, 0, 0)`
      rafRef.current = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(() => {
      const progress =
        maxShift() === 0 ? 0.5 : Math.min(1, Math.max(0, -targetX.current / maxShift()))
      targetX.current = -progress * maxShift()
    })
    ro.observe(track)

    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="mouse-gallery"
      id="gallery"
      aria-label="Wedding gallery"
    >
      <div ref={trackRef} className="mouse-gallery__track">
        {images.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className={`mouse-gallery__item mouse-gallery__item--${item.size} ${
              i % 2 === 0 ? 'is-up' : 'is-down'
            }`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
