import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ft">
      {/* Top nav + socials */}
      <div className="ft__top container">
        <div className="ft__brand">
          <span className="ft__brand-name">Helix Outriders</span>
          <nav className="ft__menu">
            <a href="#games">Games</a>
            <a href="#news">News</a>
            <a href="#gameplay">Gameplay</a>
            <a href="#studio">Ghawdxin Studios</a>
            <a href="#discord">Join Discord</a>
          </nav>
        </div>

       
              <div className="ft__socials-icons" aria-label="Social links">
            {/* Replace href with your profiles */}
            <a aria-label="Facebook" href="#"><svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg></a>
            <a aria-label="X" href="#"><svg viewBox="0 0 24 24"><path d="M3 4l7.5 8.2L3.6 20H7l5-5.7L16.8 20H21l-8-8.7L20.4 4H17L12 9.3 7.7 4z"/></svg></a>
            <a aria-label="YouTube" href="#"><svg viewBox="0 0 24 24"><path d="M23 7.1s-.2-1.6-.8-2.4c-.7-.8-1.6-.8-2-0.9C17.6 3.5 12 3.5 12 3.5h0s-5.6 0-8.2.3c-.4 0-1.3.1-2 .9C1.2 5.5 1 7.1 1 7.1S.8 9.1.8 11v2c0 1.9.2 3.9.2 3.9s.2 1.6.8 2.4c.7.8 1.7.8 2.1.9 1.5.1 6.1.3 8.1.3 2 0 6.6-.1 8.1-.3.4 0 1.4-.1 2.1-.9.6-.8.8-2.4.8-2.4s.2-2 .2-3.9v-2c0-1.9-.2-3.9-.2-3.9zM9.8 14.8V8.9l6 2.9-6 3z"/></svg></a>
            <a aria-label="Instagram" href="#"><svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5c2 0 2.3 0 3.1.1.8.1 1.4.3 1.9.6.6.3 1 .7 1.6 1.3.6.6 1 .9 1.3 1.6.3.5.5 1.1.6 1.9.1.8.1 1.1.1 3.1s0 2.3-.1 3.1c-.1.8-.3 1.4-.6 1.9-.3.6-.7 1-1.3 1.6-.6.6-1 .9-1.6 1.3-.5.3-1.1.5-1.9.6-.8.1-1.1.1-3.1.1s-2.3 0-3.1-.1c-.8-.1-1.4-.3-1.9-.6a6 6 0 01-1.6-1.3 6 6 0 01-1.3-1.6c-.3-.5-.5-1.1-.6-1.9C3 14.3 3 14 3 12s0-2.3.1-3.1c.1-.8.3-1.4.6-1.9.3-.6.7-1 1.3-1.6.6-.6 1-.9 1.6-1.3.5-.3 1.1-.5 1.9-.6C9.7 2 10 2 12 2z"/></svg></a>
            <a aria-label="Twitch" href="#"><svg viewBox="0 0 24 24"><path d="M4 3h16v10l-4 4h-4l-2 2H8v-2H4V3zm2 2v11h3v2h1l2-2h4l2-2V5H6zm8 2h2v5h-2V7zm-5 0h2v5H9V7z"/></svg></a>
            <a aria-label="TikTok" href="#"><svg viewBox="0 0 24 24"><path d="M15 3c.6 2.2 2.3 3.9 4.5 4.5v3.2c-1.6 0-3.1-.5-4.5-1.5v5.7a6 6 0 11-4.5-5.9v3.3a2.7 2.7 0 101.8 2.6V3H15z"/></svg></a>
            <a aria-label="Discord" href="#"><svg viewBox="0 0 24 24"><path d="M20 5.5A19 19 0 0015.3 4l-.2.4c1.1.3 2.1.7 3 1.2-1.3-.6-2.7-1-4.1-1.1-.5 0-1 0-1.5 0s-1 0-1.5 0C8.6 4.5 7.2 5 5.9 5.6 6.8 5.1 7.8 4.7 8.9 4.4L8.7 4A19 19 0 004 5.5 16 16 0 002 14.6c1.8 1.3 3.6 2.1 5.3 2.6l.8-1.3c-.9-.3-1.8-.7-2.6-1.1.3.1.6.2 1 .4 2 .8 4.1 1.1 6.3 1.1s4.3-.4 6.3-1.1c.3-.1.6-.3 1-.4-.8.5-1.7.8-2.6 1.1l.8 1.3c1.7-.5 3.5-1.3 5.3-2.6A16 16 0 0020 5.5zM9.6 13.6a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zm4.8 0a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2z"/></svg></a>
          </div>
      </div>

      <hr className="ft__rule" />

      {/* Mid content: ratings + disclaimer */}
      <div className="ft__mid container">
        <p className="ft__disclaimer">
          REFERENCE TO A PARTICULAR MAKE, MODEL, MANUFACTURER, AND/OR VERSION OF WEAPON, GEAR OR
          VEHICLE IS FOR HISTORICAL ACCURACY ONLY AND DOES NOT INDICATE ANY SPONSORSHIP OR
          ENDORSEMENT OF ANY TRADEMARK OWNER.
        </p>

        {/* Ratings badge placeholder — replace src with your ESRB/PEGI asset */}
        <div className="ft__rating">
          <img src="src/Images/17+Warningtag.svg" alt="Mature 17+ – Blood, Violence, Strong Language" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft__bottom">
        <div className="container ft__bottom-inner">
          {/* Company mark — replace with your studio SVG */}
          <div className="ft__company">
            <img className="ft__company-logo" src="src\Images\ChatGPT Image Nov 8, 2025, 11_13_14 AM.png" alt="Company logo" />
          </div>

          <nav className="ft__links">
            <a href="#">Browse Games</a>
            <a href="#">Latest News</a>
            <a href="#">Help Center</a>
            <a href="#">About Us</a>
          </nav>

          <div className="ft__selectors">
            <label className="ft__select">
              <span>Regional Pricing</span>
              <select aria-label="Regional Pricing">
                <option>Malta</option>
                <option>United Kingdom</option>
                <option>Italy</option>
                <option>Germany</option>
              </select>
            </label>

            <label className="ft__select">
              <span>Language</span>
              <select aria-label="Language">
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Italia</option>
                <option>Deutsch</option>
              </select>
            </label>
          </div>
        </div>

        <div className="container ft__legal">
          <div className="ft__legal-links">
            <a href="#">Legal &amp; Privacy</a>
            <a href="#">Online Service Updates</a>
            <a href="#">User Agreement</a>
            <a href="#">Privacy &amp; Cookie Policy</a>
          </div>

          <div className="ft__copyright">
            © {year} Helix Outriders Inc.
          </div>

          {/* Trust badge placeholder */}
          <div className="ft__trust">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
