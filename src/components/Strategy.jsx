const sevenP = [
  { name: 'Product',   title: 'Hôtel zen haut de gamme',     desc: 'Chambres minimalistes, spa, rituels, gong, bonsaï sacré.' },
  { name: 'Price',     title: 'Positionnement premium',      desc: 'Tarifs élevés, packages bien-être. Valeur perçue forte.' },
  { name: 'Place',     title: 'Distribution directe',        desc: 'Site web, OTAs haut de gamme, agences de luxe.' },
  { name: 'Promotion', title: 'Communication émotionnelle',  desc: 'Storytelling, réseaux sociaux, influenceurs bien-être.' },
  { name: 'People',    title: 'Personnel formé aux rituels', desc: 'Service discret, posture et voix zen.' },
  { name: 'Process',   title: 'Parcours fluide & silencieux', desc: "Check-in zen, rituels d'accueil, spa apaisant." },
  { name: 'Physical',  title: 'Preuves tangibles',           desc: 'Bois foncé, bonsaï, gong, pierre claire, cascade.' }
]

export default function Strategy() {
  return (
    <section id="strategie" className="strategy">
      <div className="container">
        <div className="section-label reveal">Stratégie</div>
        <h2 className="section-title reveal">Les 7P du Marketing</h2>
        <div className="divider" />
        <p className="section-sub reveal">Sept piliers, une seule expérience.</p>

        <div className="seven-p">
          {sevenP.map((p) => (
            <div className="p-card reveal" key={p.name}>
              <div className="p-letter">P</div>
              <div className="p-name">{p.name}</div>
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
