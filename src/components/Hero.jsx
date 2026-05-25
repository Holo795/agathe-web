export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-logo-frame">
          <img className="hero-logo" src="/images/logo.jpeg" alt="Hoshin" />
        </div>
        <div className="hero-line" />
        <p className="hero-tagline">
          Une parenthèse hors du temps,<br />au cœur d'un ancien temple japonais.
        </p>
      </div>
      <div className="scroll-indicator">Découvrir ↓</div>
    </section>
  )
}
