import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
          <div className="hero__inner container">
              
        {/* Outline-only heading */}
        <h1 className="hero__title" aria-label="Now Available">
          NOW AVAILABLE
        </h1>

        {/* Subline with PS5 logo */}
        <div className="hero__availability" role="note" aria-label="Only available on PlayStation 5">
          <span className="hero__only">Only on</span>
          <img
            className="hero__ps5"
            src="src/Images/PS5-Logo.png" 
            alt="PS5"
            height={22}
          />
        </div>
      </div>
    </section>
  )
}
