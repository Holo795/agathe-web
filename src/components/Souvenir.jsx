const steps = [
  { kanji: '工', name: "L'Atelier",  text: "Guidés par un artisan, les clients façonnent leur propre masque dans le silence du temple." },
  { kanji: '面', name: 'Le Masque',  text: "Une pièce unique, peinte à la main — reflet de l'âme du voyageur." },
  { kanji: '心', name: "L'Empreinte", text: "À emporter chez soi : un fragment du Japon, une mémoire vivante du séjour." }
]

export default function Souvenir() {
  return (
    <section id="souvenir" className="souvenir">
      <div className="container">
        <div className="section-label reveal">Pour Toujours</div>
        <h2 className="section-title reveal">Le Souvenir</h2>
        <div className="divider" />
        <p className="section-sub reveal">
          Un atelier de masques japonais — chaque hôte repart avec une œuvre façonnée de ses mains, témoin silencieux du voyage.
        </p>

        <div className="souvenir-video reveal">
          <video
            src="/videos/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="souvenir-grid">
          {steps.map((s) => (
            <div className="souvenir-item reveal" key={s.name}>
              <span className="souvenir-kanji">{s.kanji}</span>
              <h4>{s.name}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
