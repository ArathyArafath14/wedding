import { useEffect, useState, type CSSProperties } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, site } from '../data/content'
import './Header.css'

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileOpen(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt={site.brand} />
        </Link>

        <nav className="header__desktop" aria-label="Primary">
          <ul className="header__menu">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length)
              return (
                <li
                  key={item.label}
                  className={`header__item ${hasChildren ? 'has-dropdown' : ''}`}
                >
                  {item.to && !hasChildren ? (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `header__link ${isActive ? 'is-active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <span className="header__link">
                      {item.label}
                      <svg className="header__chevron" viewBox="0 0 10 6" aria-hidden="true">
                        <path
                          d="M1 1l4 4 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}

                  {hasChildren ? (
                    <div className="header__dropdown" role="menu">
                      <ul>
                        {item.children!.map((child, i) => (
                          <li key={`${child.to}-${child.label}`} style={{ '--i': i } as CSSProperties}>
                            <NavLink to={child.to} role="menuitem">
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            className={`header__toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`header__mobile ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length)
            const expanded = mobileOpen === item.label
            return (
              <li key={item.label} className={expanded ? 'is-expanded' : ''}>
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      className="header__mobile-link"
                      onClick={() => setMobileOpen(expanded ? null : item.label)}
                    >
                      {item.label}
                      <svg className="header__chevron" viewBox="0 0 10 6" aria-hidden="true">
                        <path
                          d="M1 1l4 4 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ul className={`header__mobile-sub ${expanded ? 'is-open' : ''}`}>
                      {item.children!.map((child) => (
                        <li key={`${child.to}-${child.label}`}>
                          <NavLink to={child.to} onClick={() => setOpen(false)}>
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.to!}
                    className="header__mobile-link"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
