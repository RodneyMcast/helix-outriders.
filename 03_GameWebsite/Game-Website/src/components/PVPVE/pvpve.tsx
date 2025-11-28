import './Pvpve.css'
import artboard from '../../Images/Artboard 1 1.png'

export default function Pvpve() {
  return (
    <section className="pvpve" aria-label="PvPvE mode">
      <div className="pvpve__bg" aria-hidden="true" />

      <div className="pvpve__top">
        <span className="step step--one">1. DEPLOY</span>
        <span className="step step--two">2. ELIMINATE</span>
        <span className="step step--three">3. EXTRACT</span>
      </div>

      <div className="pvpve__inner">
        <div className="pvpve__copy">
          <h2 className="pvpve__title">PVPVE</h2>
          <p className="pvpve__tag">Because sometimes the real enemy is your teammate.</p>
        </div>

        <figure className="pvpve__polaroid" aria-label="In the field">
          <img
            className="pvpve__image"
            src={artboard}
            alt="Soldier in a chaotic battlefield under helicopter lights"
          />
        </figure>
      </div>
    </section>
  )
}
