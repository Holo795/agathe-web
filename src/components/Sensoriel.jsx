const timeline = [
  {
    label: 'Avant',
    title: "L'Anticipation",
    text: "Le site web reprend les codes du Japon traditionnel. Vidéos d'activités, architecture, services : le client s'imagine déjà dans le temple."
  },
  {
    label: 'Pendant',
    title: "L'Immersion",
    text: "Bois foncé, pierre claire, parfum boisé, lumière tamisée, biwa apaisant. Un coup de gong annonce chaque rituel collectif."
  },
  {
    label: 'Après',
    title: 'Le Souvenir',
    text: "Tampons collectés au fil des activités, dessin unique à emporter. Une pensée écrite, accrochée pour toujours au bonsaï sacré."
  }
]

const senses = [
  { kanji: '目', name: 'Vue',     text: 'Bois foncé, pierre claire, lumière tamisée.' },
  { kanji: '鼻', name: 'Odorat',  text: "Parfum d'ambiance aux notes boisées." },
  { kanji: '耳', name: 'Ouïe',    text: 'Musique de biwa, silence, coup de gong.' },
  { kanji: '手', name: 'Toucher', text: 'Tatami, bois brut, serviette chaude.' },
  { kanji: '舌', name: 'Goût',    text: 'Cuisine kaiseki, baguettes en bois du monastère.' }
]

export default function Sensoriel() {
  return (
    <section id="sensoriel" className="senses">
      <div className="container">
        <div className="section-label reveal">Typologie</div>
        <h2 className="section-title reveal">Marketing Sensoriel</h2>
        <div className="divider" />
        <p className="section-sub reveal">Une immersion en trois temps, à travers les cinq sens.</p>

        <div className="timeline">
          {timeline.map((t) => (
            <div className="tl-step reveal" key={t.label}>
              <h4>— {t.label} —</h4>
              <h5>{t.title}</h5>
              <p>{t.text}</p>
            </div>
          ))}
        </div>

        <div className="five-senses">
          {senses.map((s) => (
            <div className="sense reveal" key={s.name}>
              <span className="sense-symbol">{s.kanji}</span>
              <h6>{s.name}</h6>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
