import './game.css'
import gameDescriptionVideo from '../../Images/20251031_1025_New Video_simple_compose_01k8wscj69fb4v1t1t2qmnr453.mp4'
import gameDescriptionPoster from '../../Images/game description.png'

export default function GameDescription() {
  return (
    <section
      className="game-description"
      aria-labelledby="game-description-heading"
      role="region"
    >
      <div className="game-description__panel">
        <div className="game-description__content">
          <p className="game-description__eyebrow" id="game-description-heading">
            &#129516; HELIX OUTRIDERS &mdash; AVAILABLE NOW
          </p>

          <p className="game-description__body">
            Drop into quarantined city sectors consumed by the undead. Fight through collapsing streets and harvest
            Genome Samples to evolve on the fly.
          </p>

          <p className="game-description__body">
            Squad up with up to three allies in high-intensity 20-minute extractions where every kill, every sample, and
            every death matters.
          </p>

          <p className="game-description__body">
            When you fall, your Echo rises &mdash; your own corpse turned enemy. Defeat it to reclaim your loadout, your
            samples, and your humanity.
          </p>

          <p className="game-description__tagline">Extraction isn't survival. It's evolution.</p>

          <button type="button" className="game-description__cta">
            PLAY NOW
          </button>
        </div>

        <figure className="game-description__art" aria-hidden="true">
          <video
            className="game-description__video"
            src={gameDescriptionVideo}
            poster={gameDescriptionPoster}
            autoPlay
            muted
            loop
            playsInline
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </figure>
      </div>
    </section>
  )
}
