import React, { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../Images/LOGO.png'

type SectionKey =
  | 'home'
  | 'story'
  | 'modes'
  | 'signup'
  | 'reviews'
  | 'footer'

type NavItem = {
  key: SectionKey
  label: string
  selector: string
}

const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'Home', selector: '.hero' },
  { key: 'story', label: 'Story', selector: '.game-description' },
  { key: 'modes', label: 'PvPvE', selector: '.pvpve' },
  { key: 'signup', label: 'Sign Up', selector: '.signup-section' },
  { key: 'reviews', label: 'Reviews', selector: '.reviews' },
  { key: 'footer', label: 'About', selector: 'footer.ft' }
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [menuOpen])

  const scrollToSelector = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement | null
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (item: NavItem) => {
    scrollToSelector(item.selector)
    setMenuOpen(false)
  }

  return (
    <nav ref={navRef} className={`nav ${isScrolled ? 'nav--scrolled' : ''}`} aria-label="Primary">
      <div className="nav__inner container">
        <button
          className="nav__brand"
          type="button"
          onClick={() => handleNavClick(NAV_ITEMS[0])}
          aria-label="Go to top"
        >
          <img className="nav__brand-img" src={logo} alt="Helix Outriders" />
        </button>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="site-menu"
          aria-haspopup="true"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <ul id="site-menu" className={`nav__menu ${menuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.key}>
              <button
                type="button"
                className="nav__link"
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="nav__cta"
              onClick={() => handleNavClick({ key: 'signup', label: 'Sign Up', selector: '.signup-section' })}
            >
              Play Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
