const steps = [
  { num: 'I',   icon: '鐘', title: 'Le Gong',         text: 'Résonne à chaque arrivée. Marque le passage.' },
  { num: 'II',  icon: '手', title: 'Serviette Chaude', text: "Un geste de purification. L'invitation à ralentir." },
  { num: 'III', icon: '茶', title: "Thé d'Accueil",    text: "Symbole de pureté et d'attention." },
  { num: 'IV',  icon: '願', title: 'L\'Arbre à Vœux',  text: 'Un parchemin. Un souhait. Une intention.' }
]

export default function Rituel() {
  return (
    <section id="rituel" className="rituel">
      <div className="container">
        <div className="section-label reveal">Promesse client</div>
        <h2 className="section-title reveal">Le Rituel d'Accueil</h2>
        <div className="divider" />
        <p className="section-sub reveal">
          Quatre gestes pour franchir le seuil et laisser le monde derrière soi.
        </p>

        <div className="rituel-grid">
          {steps.map((s) => (
            <div className="rituel-step reveal" key={s.num}>
              <div className="rituel-num">— {s.num} —</div>
              <span className="rituel-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
