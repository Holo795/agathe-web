const spaces = [
  { img: 'chambre.jpeg',        jp: '客室 · Kyakushitsu', name: 'Chambres' },
  { img: 'restaurant.jpeg',      jp: '懐石 · Kaiseki',     name: 'Restaurant' },
  { img: 'spa.jpeg', jp: '温泉 · Onsen',       name: 'Spa' },
  { img: 'lobby.jpeg',    jp: '入口 · Iriguchi',    name: 'Réception' },
  { img: 'cuisine.png',    jp: '厨房 · Kitchen',    name: 'Cuisine' },
  { img: 'bar.jpeg',    jp: 'バー · Bar',    name: 'Bar', position: '75% center' }
]

export default function Espaces() {
  return (
    <section id="espaces">
      <div className="container">
        <div className="section-label reveal">L'âme du lieu</div>
        <h2 className="section-title reveal">Nos Espaces</h2>
        <div className="divider" />
        <p className="section-sub reveal">
          Un temple revisité où le luxe se vit en silence — sensoriel, minimaliste, apaisant.
        </p>

        <div className="spaces">
          {spaces.map((s) => (
            <div className="space reveal" key={s.name}>
              <img src={`/images/${s.img}`} alt={s.name} style={s.position ? { objectPosition: s.position } : undefined} />
              <div className="space-overlay">
                <div className="space-jp">{s.jp}</div>
                <h3>{s.name}</h3>
                <div className="space-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
