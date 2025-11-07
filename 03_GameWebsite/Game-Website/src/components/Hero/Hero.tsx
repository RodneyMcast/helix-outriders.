import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="kicker">Available now</span>
        <h1 className="h1">
          Because sometimes the real enemy is <em className="highlight">your teammate</em>.
        </h1>
        <p className="sub">
          Squad up, drop into infected zones, betray or be betrayed. Extract what matters — if you make it out alive.
        </p>
      </div>
    </section>
  )
}
